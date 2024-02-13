import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AccordionItemsList from "./AccordionItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  //! Alwayes subscribe like that to specific portion of the store as like here we subscribing only store's items.
  const cartItems = useSelector((store) => store.cart.items);

  //! Don't subscribe like that-
  /*const store = useSelector((store) => store);
  const cartItems = store.cart.items*/

  // console.log(cartItems);

  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <div className=" bg-slate-100 py-3 mb-2 shadow-lg w-[700px] p-9 cursor-pointer  ">
      <button
        className="mb-6 bg-slate-800 text-white px-6 py-2 rounded-md"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length == 0 && (
        <h1>Your Cart is Empety Please Add Some Items</h1>
      )}
      <AccordionItemsList items={cartItems} />
    </div>
  );
};

export default Cart;
