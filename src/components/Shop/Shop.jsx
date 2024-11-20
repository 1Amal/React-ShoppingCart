import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Navigation from "../Navigation/Navigation";
import ShopItems from "./ShopItems/ShopItems";

function Shop() {
  const [shoppingCart, setShoppingCart] = useState([
    { totalItems: 0, totalPrice: 0 },

    { itemName: "Item Name", itemPrice: "$0", quantity: 0, totalItemPrice: 0 },
  ]);

  function updateCart() {}

  return (
    <div>
      <Navigation />
      <Outlet context={[shoppingCart, setShoppingCart]} />
      <ShopItems itemSearchTerm={10} />
      <ShopItems itemSearchTerm={11} />
      <ShopItems itemSearchTerm={12} />
      <ShopItems itemSearchTerm={13} />
      <ShopItems itemSearchTerm={14} />
    </div>
  );
}

export default Shop;
