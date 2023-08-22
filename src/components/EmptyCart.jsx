import { NavLink } from "react-router-dom";
import EmptyCartImg from "../constants/EmptyCart.jpg";
const EmptyCart = () => {
  return (
    <div className=" h-screen w-screen flex flex-col items-center justify-center gap-3 overflow-hidden flex-wrap">
      <img src={EmptyCartImg} width={300} alt="emptyCart" />
      <div>Cart Empty!</div>
      <NavLink to="/">
        <button className=" text-2xl font-semibold bg-green-500 text-white px-3 py-1 rounded-3xl shadow-sm hover:bg-green-700">
          Shop Now
        </button>
      </NavLink>
    </div>
  );
};

export default EmptyCart;
