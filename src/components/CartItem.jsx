import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const RemoveItemFromCart = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="flex gap-3 items-center">
      <div>
        <img src={item.image} className=" w-40" alt="img" />
      </div>
      <div className=" flex flex-col items-center">
        <div className=" text-xl font-bold">{item.title}</div>
        <div className="text-sm">{`${item.description.substr(0, 150)}...`}</div>
        <div className=" font-bold text-green-400">${item.price}</div>
        <div className="w-full bg-gray-300 h-1"></div>
      </div>
      <div
        className=" bg-red-400 rounded-full p-2 cursor-pointer"
        onClick={() => {
          RemoveItemFromCart();
        }}
      >
        {<MdDeleteOutline />}
      </div>
    </div>
  );
};

export default CartItem;
