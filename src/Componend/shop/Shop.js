import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Item from "../Item/Item";
import "./Shop.css";

const Shop = () => {
  const [items, setItems] = useState([]);
  const [carts, setCart] = useState([]);

  useEffect(() => {
    fetch("ultra.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const AddForCart = (item) => {
    console.log(item);
    const newCart = [...carts, item];
    setCart(newCart);
  };

  return (
    <div>
      <h1># Here Select Your Activities </h1>
      <p>Total Items : {items.length}</p>
      <section className="card">
        {items.map((item) => (
          <Item key={item.id} item={item} AddForCart={AddForCart}></Item>
        ))}
      </section>
      <Cart carts={carts}></Cart>
    </div>
  );
};

export default Shop;
