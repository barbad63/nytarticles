import React from "react";

const styles = {

  heading: {
    background: "#0033cc",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "2.0rem",
    color: "white",
    padding: "0 20px"
  }
}

const Nav = () => (
  <nav className="container-fluid" style={styles.heading}>
    <div className="row text-center">
      <div className="col-12">
        NY Times Article Scrubber
      </div>
    </div>
  </nav>
);

export default Nav;
