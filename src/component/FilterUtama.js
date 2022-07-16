import React, { useState } from "react";
import Card from "../component/Card";
import Buttons from "../component/Buttons";
import Data from "../component/Data";

const FilterUtama = () => {
  const [item, setItem] = useState(Data);
  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="col-12 text-center my-3 fw-bold">Menu Satu Sore</h1>
        <Buttons
          filterItem={filterItem}
          setItem={setItem}
          menuItems={menuItems}
        />
        <Card item={item} />
      </div>
    </div>
  );
};

export default FilterUtama;
