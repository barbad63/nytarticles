import React from "react";

export const Header = props => (
  <div className="col-md-6 offset-md-3 text-center">
    {console.log(props)}
    <strong>{props.hdr}</strong>
  </div>
);
