// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";



import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Navigation from "../Navigation/Navigation";
import ShopItems from "./ShopItems/ShopItems";


function Shop() {

 

  function updateCart()
  {

  }

  return (
    <div>
      {/* <ShoppingCart/> */}
      <Navigation/>
      <Outlet/>
      <ShopItems itemSearchTerm={10} />
      <ShopItems itemSearchTerm={11}/>
      <ShopItems itemSearchTerm={12}/>
      <ShopItems itemSearchTerm={13}/>
      <ShopItems itemSearchTerm={14}/>
      {/* <h1>Shop Items</h1> */}
    </div>
  );
}

export default Shop;
