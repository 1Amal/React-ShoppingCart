import styled from "styled-components";

const Heading1 = styled.h1`
  font-size: 1.8em;
  text-align: center;
  color: #bf4f74;
`;

function ShoppingCart() {
  const Heading2 = styled.h2`
    font-size: 1.3em;
    text-align: center;
    color: #bf4f74;
  `;
  return (
    <div>
      <h1>Shopping Cart</h1>
      <Heading1>Item 1</Heading1>
      <Heading2>Item 2</Heading2>
    </div>
  );
}

export default ShoppingCart;