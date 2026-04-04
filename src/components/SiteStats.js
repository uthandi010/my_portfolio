import React from "react";
import useVisitorStats from "../hooks/useVisitorStats";
import "../new-styles.css";

const SiteStats = () => {
  const { liveVisitors, totalVisitors, isLoading, hasError } = useVisitorStats();

  const liveVisitorsLabel = hasError
    ? "Unavailable"
    : isLoading
      ? "Loading..."
      : liveVisitors ?? "Unavailable";

  const totalVisitorsLabel = hasError
    ? "Unavailable"
    : isLoading
      ? "Loading..."
      : totalVisitors ?? "Unavailable";

  return (
    <div className="site-stats-badge">
      <article className="site-stat-chip">
        <span className="site-stat-label">Live</span>
        <strong>{liveVisitorsLabel}</strong>
      </article>
      <article className="site-stat-chip">
        <span className="site-stat-label">Visits</span>
        <strong>{totalVisitorsLabel}</strong>
      </article>
    </div>
  );
};

export default SiteStats;
