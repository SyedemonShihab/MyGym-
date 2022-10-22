import React from "react";
import "./Cart.css";
import profile from "../img/profil.jpg";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ carts }) => {
  let total = 0;
  for (const times of carts) {
    total = total + times.time;
  }
  const notify = () => toast("Complite You Activities Boss!");

  const breakTimes = () => {
    const getids = document.getElementById("one");
    const stringVAlue = getids.innerText;
    const getNew = parseInt(stringVAlue);
    const getoldId = document.getElementById("breakTm");
    const stringOld = getoldId.innerText;
    const getOld = parseInt(stringOld);
    const newValue = getOld + getNew;

    getoldId.innerText = newValue;
  };
  const breakTimesTwo = () => {
    const getids = document.getElementById("two");
    const stringVAlue = getids.innerText;
    const getNew = parseInt(stringVAlue);
    const getoldId = document.getElementById("breakTm");
    const stringOld = getoldId.innerText;
    const getOld = parseInt(stringOld);
    const newValue = getOld + getNew;

    getoldId.innerText = newValue;
  };
  const breakTimesThree = () => {
    const getids = document.getElementById("three");
    const stringVAlue = getids.innerText;
    const getNew = parseInt(stringVAlue);
    const getoldId = document.getElementById("breakTm");
    const stringOld = getoldId.innerText;
    const getOld = parseInt(stringOld);
    const newValue = getOld + getNew;

    getoldId.innerText = newValue;
  };
  const breakTimesFour = () => {
    const getids = document.getElementById("four");
    const stringVAlue = getids.innerText;
    const getNew = parseInt(stringVAlue);
    const getoldId = document.getElementById("breakTm");
    const stringOld = getoldId.innerText;
    const getOld = parseInt(stringOld);
    const newValue = getOld + getNew;

    getoldId.innerText = newValue;
  };
  const breakTimesFive = () => {
    const getids = document.getElementById("five");
    const stringVAlue = getids.innerText;
    const getNew = parseInt(stringVAlue);
    const getoldId = document.getElementById("breakTm");
    const stringOld = getoldId.innerText;
    const getOld = parseInt(stringOld);
    const newValue = getOld + getNew;

    getoldId.innerText = newValue;
  };
  return (
    <>
      <h2>See Your Today's Activities</h2>
      <h4>Total Selected Activities: </h4>
      <div className="cart-sec">
        <div className="myinfo style">
          <img src={profile} alt="" />
          <div>
            <h4>Md. Emon Shihab</h4>
            <h5>Student </h5>
            <h5>East West University</h5>
          </div>
        </div>
        <div className="myBody">
          <div>
            <p>72kg</p>
            <h4>Weight</h4>
          </div>
          <div>
            <p>5.8</p>
            <h4>Height</h4>
          </div>
          <div>
            <p>23</p>
            <h4>Age</h4>
          </div>
        </div>
        <div className="style">
          <h2>Add a Break</h2>
          <div className="breakTime">
            <div>
            <p id="one" onClick={breakTimes}>10</p>
              <p>s</p>
            </div>
            <div>
              <p id="two" onClick={breakTimesTwo}>20</p>
              <p>s</p>
            </div>
            <div>
              <p id="three" onClick={breakTimesThree}>30</p>
              <p>s</p>
            </div>
            <div>
              <p id="four" onClick={breakTimesFour}>40</p>
              <p>s</p>
            </div>
            <div>
              <p id="five" onClick={breakTimesFive}>50</p>
              <p>s</p>
            </div>
          </div>
        </div>
        <div className="style">
          <h2>Exercise Details</h2>
          <div className="exerciseTime">
            <p>Total Exercise : {total}</p>
            {/* <p>{total}</p> */}
          </div>
          <div className="breakTotal">
            <p>Total Break</p>
            <p id="breakTm">00</p>
          </div>
        </div>
        <div className="complite">
          <button onClick={notify}>Activities Complite</button>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Cart;
