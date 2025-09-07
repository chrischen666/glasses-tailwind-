import { NavLink } from "react-router-dom";
function Category() {
  return (
    <>
      <li className="w-1/3">
        <NavLink to="/optical" className="py-4 block border border-gray-30">
          OPTICAL
        </NavLink>
      </li>
      <li className="w-1/3">
        <NavLink to="/sunglasses" className="py-4 block border border-gray-30">
          SUNGLASSES
        </NavLink>
      </li>
      <li className="w-1/3">
        <NavLink to="/functional" className="py-4 block border border-gray-30">
          FUNCTIONAL
        </NavLink>
      </li>
    </>
  );
}
export default Category;
