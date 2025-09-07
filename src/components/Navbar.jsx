import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo-white.png";

function Navbar() {
  return (
    <nav>
      <div className="bg-maroon-Default text-white">
        <div className="container px-0 sm:flex sm:justify-between sm:items-center">
          <NavLink href="#" className="block py-1" to="/">
            <img
              src={logo}
              alt="logo"
              className="w-20 h-[72px] object-contain mx-auto"
            />
          </NavLink>
          <ul className="text-center flex flex-wrap sm:gap-16 sm:items-center">
            <li className="w-1/2 sm:w-auto border sm:border-0  border-white border-b-0 border-r-0">
              <NavLink className="py-3 block" to="Optical">
                系列鏡框
              </NavLink>
            </li>
            <li className="w-1/2 sm:w-auto border sm:border-0  border-white border-b-0">
              <NavLink className="py-3 block">門市據點</NavLink>
            </li>
            <li className="w-1/2 sm:w-auto border sm:border-0  border-white border-r-0">
              <NavLink className="py-3 block">部落格</NavLink>
            </li>
            <li className="w-1/2 sm:w-auto border sm:border-0  border-white">
              <NavLink className="py-3 block">常見問題</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
