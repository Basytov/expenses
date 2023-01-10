import React from "react";
import "./Button.css";
export const Button = (props) => {
  return (
    <div className="button">
      <button className="btn" onClick={props.onClick}>{props.title}</button>
    </div>
  );
};
