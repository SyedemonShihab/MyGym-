import React from "react";
import "./Item.css";

const Item = (props) => {
 
 const {AddForCart,item} =props;
 const {name, picture, info, age, time} = item

  return (
    <div className="item">
      <h3>{name}</h3>
      <div>
        <img src={picture} alt="" />
      </div>
      <div className="pera">
        <p>{info}</p>
      </div>
      <h4>For Age: {age}</h4>
      <h4>Time: {time}s</h4>
      <button onClick={() => AddForCart(item)}>Add to Cart</button>
    </div>
  );
};

export default Item;
