import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import styled from "styled-components";

const DivStyles = styled.div`
  border: 2px solid #bf4f74;
  margin: 2rem;
  padding: 2rem;
  background-color: #4fcfb3;
`;

function ShopItems({
  itemSearchTerm,
  updateCartAddItem,
  updateCartRemoveItem,
}) {
  const [itemInfo, setItemInfo] = useState({
    itemName: "Item Name",
    itemImage: "",
    itemDescription: "Item Description",
    itemPrice: "$0",
    quantity: 1,
  });

  function increaseItems() {
    if (itemInfo.quantity < 10) {
      let increaseItems = itemInfo.quantity + 1;

      setItemInfo({ ...itemInfo, quantity: increaseItems });
      // updateCartAddItem(itemInfo);
    }
  }

  function decreaseItems() {
    if (itemInfo.quantity > 0) {
      let decreaseItems = itemInfo.quantity - 1;
      setItemInfo({ ...itemInfo, quantity: decreaseItems });
    }
  }

  function addToCart() {
    // alert("Add to Cart Man !");
    updateCartAddItem(itemInfo);
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemSearchTerm}`, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((json) => {
        setItemInfo({
          ...itemInfo,
          itemName: json.title,
          itemImage: json.image,
          itemDescription: json.description,
          itemPrice: json.price,
        });
        // console.dir(json);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <DivStyles>
        <h2>{itemInfo.itemName}</h2>
        <img
          src={itemInfo.itemImage}
          alt="Item Image"
          width="200"
          height="150"
        />

        <p>{itemInfo.itemDescription}</p>
        <p>
          <span>Price: $</span>
          {itemInfo.itemPrice}
        </p>
        <label htmlFor="quantity">Quantity : </label>
        <button onClick={decreaseItems}> - </button>
        <input
          disabled
          type="number"
          id="quantity"
          name="quantity"
          min="0"
          max="10"
          value={itemInfo.quantity}
          onChange={(changeQuantity) =>
            setItemInfo({ ...itemInfo, quantity: changeQuantity.target.value })
          }
        />
        <button onClick={increaseItems}>+</button>
        <button onClick={addToCart}>Add To Cart</button>
        <button onClick={() => updateCartRemoveItem(itemInfo)}>
          Remove Item
        </button>
      </DivStyles>
    </div>
  );
}

ShopItems.propTypes={
  itemSearchTerm:PropTypes.number.isRequired,
  updateCartAddItem:PropTypes.func.isRequired,
  updateCartRemoveItem:PropTypes.func.isRequired
}
export default ShopItems;
