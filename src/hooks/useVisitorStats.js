import { useEffect, useState } from "react";

const API_BASE = "https://api.countapi.xyz";
const NAMESPACE = "uthandi-portfolio";
const TOTAL_VISITS_KEY = "total-visits";
const LIVE_VIEWERS_KEY = "live-viewers";
const SESSION_VISIT_KEY = "portfolio-visit-recorded";
const SESSION_LIVE_KEY = "portfolio-live-registered";

const buildUrl = (path) => `${API_BASE}/${path}`;

const fetchCounter = async (path, options) => {
  const response = await fetch(buildUrl(path), options);

  if (!response.ok) {
    throw new Error(`Counter request failed: ${response.status}`);
  }

  return response.json();
};

const ensureLiveCounter = async () => {
  const params = new URLSearchParams({
    namespace: NAMESPACE,
    key: LIVE_VIEWERS_KEY,
    value: "0",
    update_lowerbound: "-1",
    update_upperbound: "1",
  });

  try {
    await fetchCounter(`create?${params.toString()}`);
  } catch (error) {
    // Ignore "already exists" and transient network issues here.
  }
};

const readCounter = async (key) => {
  const result = await fetchCounter(`get/${NAMESPACE}/${key}`);
  return typeof result.value === "number" ? result.value : null;
};

const updateCounter = async (key, amount, keepalive = false) => {
  const result = await fetchCounter(
    `update/${NAMESPACE}/${key}?amount=${amount}`,
    keepalive ? { keepalive: true } : undefined
  );
  return typeof result.value === "number" ? result.value : null;
};

const hitCounter = async (key) => {
  const result = await fetchCounter(`hit/${NAMESPACE}/${key}`);
  return typeof result.value === "number" ? result.value : null;
};

export const useVisitorStats = () => {
  const [stats, setStats] = useState({
    liveVisitors: null,
    totalVisitors: null,
    isLoading: true,
    hasError: false,
  });

  useEffect(() => {
    let isMounted = true;
    let pollIntervalId;

    const updateState = (nextState) => {
      if (!isMounted) {
        return;
      }

      setStats((currentState) => ({ ...currentState, ...nextState }));
    };

    const refreshCounters = async () => {
      try {
        const [liveVisitors, totalVisitors] = await Promise.all([
          readCounter(LIVE_VIEWERS_KEY),
          readCounter(TOTAL_VISITS_KEY),
        ]);

        updateState({
          liveVisitors,
          totalVisitors,
          isLoading: false,
          hasError: false,
        });
      } catch (error) {
        updateState({
          isLoading: false,
          hasError: true,
        });
      }
    };

    const initializeCounters = async () => {
      try {
        await ensureLiveCounter();

        let totalVisitors = null;
        let liveVisitors = null;

        if (!sessionStorage.getItem(SESSION_VISIT_KEY)) {
          totalVisitors = await hitCounter(TOTAL_VISITS_KEY);
          sessionStorage.setItem(SESSION_VISIT_KEY, "1");
        }

        if (!sessionStorage.getItem(SESSION_LIVE_KEY)) {
          liveVisitors = await updateCounter(LIVE_VIEWERS_KEY, 1);
          sessionStorage.setItem(SESSION_LIVE_KEY, "1");
        }

        if (totalVisitors === null || liveVisitors === null) {
          const [liveCount, totalCount] = await Promise.all([
            liveVisitors === null ? readCounter(LIVE_VIEWERS_KEY) : liveVisitors,
            totalVisitors === null ? readCounter(TOTAL_VISITS_KEY) : totalVisitors,
          ]);

          updateState({
            liveVisitors: liveVisitors === null ? liveCount : liveVisitors,
            totalVisitors: totalVisitors === null ? totalCount : totalVisitors,
            isLoading: false,
            hasError: false,
          });
        } else {
          updateState({
            liveVisitors,
            totalVisitors,
            isLoading: false,
            hasError: false,
          });
        }

        pollIntervalId = window.setInterval(refreshCounters, 15000);
      } catch (error) {
        updateState({
          isLoading: false,
          hasError: true,
        });
      }
    };

    const handlePageHide = () => {
      if (sessionStorage.getItem(SESSION_LIVE_KEY) !== "1") {
        return;
      }

      sessionStorage.removeItem(SESSION_LIVE_KEY);
      fetch(buildUrl(`update/${NAMESPACE}/${LIVE_VIEWERS_KEY}?amount=-1`), {
        keepalive: true,
      }).catch(() => {
        // Best effort only for page unload.
      });
    };

    initializeCounters();
    window.addEventListener("pagehide", handlePageHide);

    return () => {
      isMounted = false;
      if (pollIntervalId) {
        window.clearInterval(pollIntervalId);
      }
      window.removeEventListener("pagehide", handlePageHide);
    };
  }, []);

  return stats;
};

export default useVisitorStats;
