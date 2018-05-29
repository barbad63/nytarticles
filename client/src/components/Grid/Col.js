import React from "react";

const styles = {

  heading: {
    background: "#8fb2ea",
    minHeight: 30,
    lineHeight: 3.5,
    fontSize: "1.0rem",
    color: "white",
    padding: "0 20px"
  }
}

export const Col = ({ children }) => (

  <div className="col-md-6 offset-md-3" style={styles.heading}>
    {children}
  </div>
);