import React from "react";
import useVisitorStats from "../hooks/useVisitorStats";

const ModernSiteStats = () => {
  const { liveVisitors, totalVisitors, isLoading } = useVisitorStats();

  return (
    <div style={{
      display: "flex",
      gap: "0.5rem",
      alignItems: "center",
      padding: "0.5rem 1rem",
      background: "var(--bg-card)",
      border: "1px solid var(--border)",
      borderRadius: "999px",
      fontSize: "0.875rem",
      color: "var(--text-secondary)",
      fontWeight: "500",
      boxShadow: "var(--shadow-md)",
      backdropFilter: "blur(10px)",
      transition: "all 0.3s ease",
      cursor: "default"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
        <span style={{ 
          width: "8px", 
          height: "8px", 
          background: "#22c55e", 
          borderRadius: "50%",
          animation: "pulse 2s infinite",
          display: "inline-block"
        }}></span>
        <span style={{ 
          minWidth: "20px", 
          textAlign: "center",
          fontWeight: "600",
          color: "var(--text-primary)"
        }}>
          {isLoading ? "..." : liveVisitors}
        </span>
        <span style={{ fontSize: "0.8rem" }}>online</span>
      </div>
      <span style={{ 
        color: "var(--border)", 
        fontSize: "0.75rem" 
      }}>|</span>
      <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
        <span style={{ 
          minWidth: "20px", 
          textAlign: "center",
          fontWeight: "600",
          color: "var(--text-primary)"
        }}>
          {isLoading ? "..." : totalVisitors}
        </span>
        <span style={{ fontSize: "0.8rem" }}>visits</span>
      </div>
    </div>
  );
};

export default ModernSiteStats;