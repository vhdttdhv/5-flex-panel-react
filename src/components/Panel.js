import React from "react";
import "./Panel.css";
import { useState } from "react";
function Panel(props) {
  const [size, setSize] = useState(1);
  const src = props.src;
  const quote = props.text.split(" ");
  console.log(quote);
  return (
    <div
      className="Panel"
      style={{ backgroundImage: `url("${src}")`, flex: `${size}` }}
      onClick={() => (size == 1 ? setSize(5) : setSize(1))}
    >
      <div className="panel-wrapper">
        <p className={size == 1 ? "panel-hidden-text" : ""}>{quote[0]}</p>
        <p className="panel-main-text">{quote[1]}</p>
        <p className={size == 1 ? "panel-hidden-text" : ""}>{quote[2]}</p>
      </div>
    </div>
  );
}

export default Panel;
