import React, { useState, useEffect } from "react";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartPage = () => {
  console.log("rendering");

  const { cart } = useSelector((state) => state);
  console.log("printing cart");
  console.log(cart);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return cart.length === 0 ? (
    <EmptyCart />
  ) : (
    <div className="flex justify-evenly border-2 flex-wrap mx-auto">
      <div className=" max-w-3xl flex flex-col gap-5  flex-wrap">
        {cart.map((item, index) => {
          return <CartItem key={item.id} itemIndex={index} item={item} />;
        })}
      </div>

      <div className="flex flex-col gap-10">
        <div>
          <div className="font-semibold">YOUR CART</div>
          <div className="font-semibold">SUMMARY</div>
          <p>
            <span className="font-semibold">Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p className=" font-semibold">Total Amount:$ {totalAmount}</p>
          <button className=" bg-green-500 px-3 py-1 text-white rounded-3xl">
            CheckOut Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
