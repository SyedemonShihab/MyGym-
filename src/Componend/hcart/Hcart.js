import React from "react";
import "./hcart.css";

const Hcart = (props) => {
  const { item } = props;

  return (
    <div className="hcart">
      <h2>{item.name}</h2>
      <div>
        <p>{item.info}</p>
      </div>
    </div>
  );
};

export default Hcart;
