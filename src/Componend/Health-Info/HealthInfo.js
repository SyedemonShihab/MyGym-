import React, { useEffect, useState } from "react";
import Hcart from "../hcart/Hcart";
import "./HealthInfo.css";

const HealthInfo = () => {
  const [healthTips, setHealthTips] = useState([]);

  useEffect(() => {
    fetch("gyminfo.json")
      .then((res) => res.json())
      .then((data) => setHealthTips(data));
  }, []);
  return (
    <div>
      <div className="fast-div">
        {healthTips.map((item) => (
          <Hcart key={item.id} item={item}></Hcart>
        ))}
      </div>
    </div>
  );
};

export default HealthInfo;
