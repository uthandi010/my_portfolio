import { useEffect, useState } from "react";

const STATS_KEY = "portfolio-stats";
const SESSION_VISIT_KEY = "portfolio-visit-recorded";

// Local storage functions
const getStats = () => {
  try {
    const stored = localStorage.getItem(STATS_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.warn('Failed to read stats from localStorage:', error);
  }
  // Initialize with default values
  return { totalVisitors: 0, liveVisitors: 1 };
};

const saveStats = (stats) => {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (error) {
    console.warn('Failed to save stats to localStorage:', error);
  }
};

export const useVisitorStats = () => {
  const [stats, setReactStats] = useState({
    liveVisitors: 1,
    totalVisitors: 0,
    isLoading: true,
  });

  useEffect(() => {
    let isMounted = true;

    const updateState = (nextState) => {
      if (!isMounted) {
        return;
      }
      setReactStats((currentState) => ({ ...currentState, ...nextState }));
    };

    const initializeCounters = () => {
      // Get current stats from localStorage
      const currentStats = getStats();
      let currentTotal = currentStats.totalVisitors;

      // Increment total visits for new sessions (unique visits)
      if (!sessionStorage.getItem(SESSION_VISIT_KEY)) {
        currentTotal += 1;
        const updatedStats = { ...currentStats, totalVisitors: currentTotal };
        saveStats(updatedStats);
        sessionStorage.setItem(SESSION_VISIT_KEY, "1");
      }

      // Update state with final values
      updateState({
        liveVisitors: 1, // Always show 1 for current user
        totalVisitors: currentTotal,
        isLoading: false,
      });
    };

    initializeCounters();

    return () => {
      isMounted = false;
    };
  }, []);

  return stats;
};

export default useVisitorStats;