import React from "react";
import "../fresh-styles.css";

const FreshFooter = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Uthandi P. All rights reserved.</p>
      <p style={{ marginTop: "8px" }}>Built with passion for great user experiences</p>
    </footer>
  );
};

export default FreshFooter;