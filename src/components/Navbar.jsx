import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className=" bg-black">
      <div className="flex justify-between items-center max-w-5xl mx-auto text-white">
        <NavLink to="/">
          <img
            src="https://as2.ftcdn.net/v2/jpg/02/69/19/95/1000_F_269199564_19eCvBKtZXR5SjtsXOFcwStH1AUNtHIk.jpg"
            alt="logo"
            width={75}
            className=" cursor-pointer bg-cover"
          />
        </NavLink>
        <div className="flex items-center">
          <NavLink className=" mr-4" to="/">
            Home
          </NavLink>
          <div className="relative">
            <div className="absolute bottom-[11px] right-[2px] text-[30px] font-bold text-green-600">
              {cart.length}
            </div>
            <NavLink to="/cart">{<FaShoppingCart fontSize="1.8rem" />} </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
