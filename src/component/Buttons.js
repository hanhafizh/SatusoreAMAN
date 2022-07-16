import React from "react";
import Data from "./Data";

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="buttonitu d-flex justify-content-center">
        {/* <div className="buttonitu d-flex mb-1"> */}
        {menuItems.map((Val, id) => {
          return (
            <button
              className="buttonini btn-outline-dark p-1 px-1 mx-1 btn fw-bold border"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button
          className="buttonini btn-outline-dark p-1 px-1 mx-1 fw-bold btn border"
          onClick={() => setItem(Data)}
        >
          All
        </button>

        {/* <button
            className="btn-warning text-white p-1 mx-5"
          onClick={() => filterItem("Breakfast")}
        >
          Breakfast
        </button>
        <button
          className="btn-warning text-white p-1 px-2 mx-5"
          onClick={() => filterItem("Lunch")}
        >
          Lunch
        </button>
        <button
          className="btn-warning text-white p-1 mx-5"
          onClick={() => filterItem("Dinner")}
        >
          Dinner
        </button> */}
      </div>
    </>
  );
};

export default Buttons;
