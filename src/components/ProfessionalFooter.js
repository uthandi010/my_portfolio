import React from "react";
import "../professional-styles.css";

const ProfessionalFooter = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Uthandi P. All rights reserved.</p>
      <p style={{ marginTop: "8px" }}>Crafted with passion and precision</p>
    </footer>
  );
};

export default ProfessionalFooter;