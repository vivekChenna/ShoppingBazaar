import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, addItem } from "../redux/CartSlice";
import toast from "react-hot-toast";

const Product = ({ item }) => {
  const desc = item.description.substr(0, 50);
  const newTitle = `${item.title.substr(0, 15)}...`;

  const { cart } = useSelector((state) => state);

  console.log("rendering Product");

  const dispatch = useDispatch();

  const RemoveItemFromCart = () => {
    dispatch(removeItem(item.id));
    toast.error("Removed Item from Cart");
  };

  const AddItemToCart = () => {
    dispatch(addItem(item));
    toast.success("Added Item to Cart");
  };

  return (
    <div className="max-w-[230px] border-2 mt-5 flex flex-col items-center shadow-lg rounded-3xl justify-between py-4">
      <div className=" text-xl font-bold tracking-wide font-sans">
        {newTitle}
      </div>
      <p className=" text-sm text-center text-gray-400">{desc}</p>
      <div>
        <img width={100} src={item.image} alt="product-img" />
      </div>

      <p className="text-sm font-semibold font-mono ">{item.category}</p>
      <p className="text-sm font-bold ">${item.price}</p>

      <div className="flex justify-evenly w-full">
        <div className="text-lg flex items-center">
          <span>{item.rating.rate}</span>
          <span>{<AiFillStar />}</span>
        </div>
        <div>
          {cart.some((p) => p.id === item.id) ? (
            <button
              className="text-[16px] font-semibold bg-red-500 rounded-2xl px-2 text-white"
              onClick={() => RemoveItemFromCart()}
            >
              Remove Item
            </button>
          ) : (
            <button
              className="text-[16px] bg-green-500 rounded-2xl px-2 text-white font-semibold"
              onClick={() => AddItemToCart()}
            >
              Add Item
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
