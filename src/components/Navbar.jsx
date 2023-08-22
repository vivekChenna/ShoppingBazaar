import logo from "../constants/logo.png";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className=" bg-black">
      <div className="flex justify-between items-center max-w-5xl mx-auto text-white">
        <NavLink to="/">
          <img src={logo} alt="logo" width={60} className=" cursor-pointer" />
        </NavLink>
        <div className="flex items-center">
          <NavLink to="/">Home</NavLink>
          <div>
            <div>{cart.length}</div>
            <NavLink to="/cart">{<FaShoppingCart />} </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
