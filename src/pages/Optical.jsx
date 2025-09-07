// import Category from "../components/Category";
import { NavLink } from "react-router-dom";
import product_header_1 from "../assets/images/product-header-1.png";
import product_header_2 from "../assets/images/product-header-2.png";
import product_header_sm_1 from "../assets/images/product-header-sm-1.png";
import product_header_sm_2 from "../assets/images/product-header-sm-2.png";
import product_1 from "../assets/images/product-1.png";
import product_2 from "../assets/images/product-2.png";
import product_3 from "../assets/images/product-3.png";
import product_4 from "../assets/images/product-4.png";
import product_5 from "../assets/images/product-5.png";
import product_6 from "../assets/images/product-6.png";
import product_7 from "../assets/images/product-7.png";
import product_8 from "../assets/images/product-8.png";
import product_9 from "../assets/images/product-9.png";
import product_10 from "../assets/images/product-10.png";
import product_11 from "../assets/images/product-11.png";
import product_12 from "../assets/images/product-12.png";
function Optical() {
  return (
    <>
      <section>
        <div className="lg:container px-0">
          <ul className="flex text-center">
            <li className="w-1/3 border border-gray-30">
              <NavLink
                to="/optical"
                className="py-4 block border-transparent border-b-8 hover:border-maroon-Default"
              >
                OPTICAL
              </NavLink>
            </li>
            <li className="w-1/3 border border-gray-30">
              <NavLink
                to="/sunglasses"
                className="py-4 block  border-transparent border-b-8 hover:border-maroon-Default"
              >
                SUNGLASSES
              </NavLink>
            </li>
            <li className="w-1/3 border border-gray-30">
              <NavLink
                to="/functional"
                className="py-4 block  border-transparent border-b-8 hover:border-maroon-Default"
              >
                FUNCTIONAL
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="flex">
          <picture className="w-1/2">
            <source srcSet={product_header_1} media="(min-width: 1024px)" />
            <img
              src={product_header_sm_1}
              className="w-full h-full object-cover"
              alt="響應式圖片範例"
            />
          </picture>
          <picture className="w-1/2">
            <source srcSet={product_header_2} media="(min-width: 1024px)" />
            <img
              src={product_header_sm_2}
              className="w-full h-full object-cover"
              alt="響應式圖片範例"
            />
          </picture>
        </div>
      </section>
      <section>
        <div className="container py-20">
          <h2 className="text-2xl text-center">Celluloid Combi</h2>
          <h2 className="text-2xl mb-6 md:mb-8 text-center">
            賽璐珞鈦金屬混合鏡框
          </h2>
          <ul className="md:-mx-3 md:flex md:flex-wrap">
            <li className="md:w-1/2 md:px-3 lg:w-1/4">
              <img src={product_1} alt="" />
              <div className="flex justify-between">
                <p className="text-2xl">BJ41600S</p>
                <p className="text-2xl text-maroon-Default">NTD3,490</p>
              </div>
              <div className="flex gap-2">
                <div className="bg-brown-10 w-6 h-6 rounded-[4px]"></div>
                <div className="bg-brown-20 w-6 h-6 rounded-[4px]"></div>
              </div>
            </li>
            <li className="md:w-1/2 md:px-3 lg:w-1/4">
              <img src={product_2} alt="" />
              <div className="flex justify-between">
                <p className="text-2xl">BJ41600S</p>
                <p className="text-2xl text-maroon-Default">NTD3,490</p>
              </div>
              <div className="flex gap-2">
                <div className="bg-brown-10 w-6 h-6 rounded-[4px]"></div>
                <div className="bg-brown-20 w-6 h-6 rounded-[4px]"></div>
              </div>
            </li>
            <li className="md:w-1/2 md:px-3 lg:w-1/4">
              <img src={product_3} alt="" />
              <div className="flex justify-between">
                <p className="text-2xl">BJ41600S</p>
                <p className="text-2xl text-maroon-Default">NTD3,490</p>
              </div>
              <div className="flex gap-2">
                <div className="bg-brown-10 w-6 h-6 rounded-[4px]"></div>
                <div className="bg-brown-20 w-6 h-6 rounded-[4px]"></div>
              </div>
            </li>
            <li className="md:w-1/2 md:px-3 lg:w-1/4">
              <img src={product_4} alt="" />
              <div className="flex justify-between">
                <p className="text-2xl">BJ41600S</p>
                <p className="text-2xl text-maroon-Default">NTD3,490</p>
              </div>
              <div className="flex gap-2">
                <div className="bg-brown-10 w-6 h-6 rounded-[4px]"></div>
                <div className="bg-brown-20 w-6 h-6 rounded-[4px]"></div>
              </div>
            </li>
            <li className="md:w-1/2 md:px-3 lg:w-1/4">
              <img src={product_5} alt="" />
              <div className="flex justify-between">
                <p className="text-2xl">BJ41600S</p>
                <p className="text-2xl text-maroon-Default">NTD3,490</p>
              </div>
              <div className="flex gap-2">
                <div className="bg-brown-10 w-6 h-6 rounded-[4px]"></div>
                <div className="bg-brown-20 w-6 h-6 rounded-[4px]"></div>
              </div>
            </li>
            <li className="md:w-1/2 md:px-3 lg:w-1/4">
              <img src={product_6} alt="" />
              <div className="flex justify-between">
                <p className="text-2xl">BJ41600S</p>
                <p className="text-2xl text-maroon-Default">NTD3,490</p>
              </div>
              <div className="flex gap-2">
                <div className="bg-brown-10 w-6 h-6 rounded-[4px]"></div>
                <div className="bg-brown-20 w-6 h-6 rounded-[4px]"></div>
              </div>
            </li>
            <li className="md:w-1/2 md:px-3 lg:w-1/4">
              <img src={product_7} alt="" />
              <div className="flex justify-between">
                <p className="text-2xl">BJ41600S</p>
                <p className="text-2xl text-maroon-Default">NTD3,490</p>
              </div>
              <div className="flex gap-2">
                <div className="bg-brown-10 w-6 h-6 rounded-[4px]"></div>
                <div className="bg-brown-20 w-6 h-6 rounded-[4px]"></div>
              </div>
            </li>
            <li className="md:w-1/2 md:px-3 lg:w-1/4">
              <img src={product_8} alt="" />
              <div className="flex justify-between">
                <p className="text-2xl">BJ41600S</p>
                <p className="text-2xl text-maroon-Default">NTD3,490</p>
              </div>
              <div className="flex gap-2">
                <div className="bg-brown-10 w-6 h-6 rounded-[4px]"></div>
                <div className="bg-brown-20 w-6 h-6 rounded-[4px]"></div>
              </div>
            </li>
            <li className="md:w-1/2 md:px-3 lg:w-1/4">
              <img src={product_9} alt="" />
              <div className="flex justify-between">
                <p className="text-2xl">BJ41600S</p>
                <p className="text-2xl text-maroon-Default">NTD3,490</p>
              </div>
              <div className="flex gap-2">
                <div className="bg-brown-10 w-6 h-6 rounded-[4px]"></div>
                <div className="bg-brown-20 w-6 h-6 rounded-[4px]"></div>
              </div>
            </li>
            <li className="md:w-1/2 md:px-3 lg:w-1/4">
              <img src={product_10} alt="" />
              <div className="flex justify-between">
                <p className="text-2xl">BJ41600S</p>
                <p className="text-2xl text-maroon-Default">NTD3,490</p>
              </div>
              <div className="flex gap-2">
                <div className="bg-brown-10 w-6 h-6 rounded-[4px]"></div>
                <div className="bg-brown-20 w-6 h-6 rounded-[4px]"></div>
              </div>
            </li>
            <li className="md:w-1/2 md:px-3 lg:w-1/4">
              <img src={product_11} alt="" />
              <div className="flex justify-between">
                <p className="text-2xl">BJ41600S</p>
                <p className="text-2xl text-maroon-Default">NTD3,490</p>
              </div>
              <div className="flex gap-2">
                <div className="bg-brown-10 w-6 h-6 rounded-[4px]"></div>
                <div className="bg-brown-20 w-6 h-6 rounded-[4px]"></div>
              </div>
            </li>
            <li className="md:w-1/2 md:px-3 lg:w-1/4">
              <img src={product_12} alt="" />
              <div className="flex justify-between">
                <p className="text-2xl">BJ41600S</p>
                <p className="text-2xl text-maroon-Default">NTD3,490</p>
              </div>
              <div className="flex gap-2">
                <div className="bg-brown-10 w-6 h-6 rounded-[4px]"></div>
                <div className="bg-brown-20 w-6 h-6 rounded-[4px]"></div>
              </div>
            </li>
          </ul>
          <ul className="flex mt-20 justify-center">
            <li>
              <a className="border-[#555555] border text-[18px] px-4 py-3 block">
                上一頁
              </a>
            </li>
            {[...Array(5).keys()].map((item) => (
              <li key={item}>
                <a className="border-[#555555] border text-[18px] px-4 py-3 block">
                  {item + 1}
                </a>
              </li>
            ))}
            <li>
              <a className="border-[#555555] border text-[18px] px-4 py-3 block">
                下一頁
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
export default Optical;
