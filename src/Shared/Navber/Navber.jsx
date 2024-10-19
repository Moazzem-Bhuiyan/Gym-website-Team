import { Link, NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import {   FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
const Navber = () => {
  const [isFixed, setIsFixed] = useState(false);
  const page = (
    <>
      <NavLink to={"/about"}>About Us</NavLink>
      <NavLink to={"/service"}>Our Service</NavLink>
      <NavLink to={"/ourTeam"}>Our Team</NavLink>
      <NavLink to={"/faq"}>Faq</NavLink>
      <NavLink to={"/pricing"}>Pricing</NavLink>
      <NavLink to={"/getQuta"}>Get Quta</NavLink>
    </>
  );

  const shop = (
    <>
      <NavLink to={"/productList"}>Product List</NavLink>
      <NavLink to={"/cart"}>Cart</NavLink>
      <NavLink to={"/wishlist"}>Wishlist</NavLink>
    </>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.2) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div
        className={`${
          isFixed
            ? "fixed top-0 left-0 w-full z-50 transition-all duration-300"
            : ""
        }`}
      >
        
        <div
          className={`py-[10px] pt-[20px] bg-white px-2 transition-all duration-300 ${
            isFixed ? "shadow-xl" : "shadow-none"
          } max-w-screen-2xl mx-auto`}
        >
          <div className="flex justify-between font-semibold">
            <div>
              <div className="flex">
                <div className="lg:hidden z-20">
                  <div className="drawer z-20">
                    <input
                      id="my-drawer"
                      type="checkbox"
                      className="drawer-toggle"
                    />
                    <div className="drawer-content mt-2 mr-3 ml-2">
                      <label
                        htmlFor="my-drawer"
                        className=" text-2xl drawer-button"
                      >
                        <FaBars />
                      </label>
                    </div>
                    <div className="drawer-side ">
                      <label
                        htmlFor="my-drawer"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                      ></label>
                      <ul className="menu bg-white text-black min-h-full w-80 p-4">
                        <h1 className="bg-white md:px-5 py-6 shadow-sm">
                          <div className="flex justify-center">
                            <FaUser className="  text-2xl text-black " />
                          </div>
                          <h1 className="text-center text-xl mt-3">
                            <Link to="/login">Login</Link>
                          </h1>
                        </h1>{" "}
                        <hr />
                        <div className="flex flex-col mt-4 ">
                          <>
                            <NavLink className={"p-2"} to={"/"}>
                              Home
                            </NavLink>

                            <div className="dropdown dropdown-hover">
                              <div
                                tabIndex={0}
                                role="button"
                                className=" m-1"
                              >
                                <div className={"p-2"} >
                                  Page
                                </div>
                              </div>
                              <ul
                                tabIndex={0}
                                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                              >
                                <li>
                                  <a>Item 1</a>
                                </li>
                                <li>
                                  <a>Item 2</a>
                                </li>
                              </ul>
                            </div>
                            <NavLink className={"p-2"} to={"/blog"}>
                              Blog
                            </NavLink>
                            <NavLink className={"p-2"} to={"/shop"}>
                              Shop
                            </NavLink>
                            <NavLink className={"p-2"} to={"/contact"}>
                              Contact
                            </NavLink>
                          </>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
                <h1 className="font-bold text-3xl">laptop</h1>
              </div>
            </div>
            <div className="mt-2">
              <h1 className="hidden lg:block">
                <>
                  <NavLink className={"p-2"} to={"/"}>
                    Home
                  </NavLink>

                  <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className=" m-1">
                      <NavLink className={"p-2"}>
                        Page
                      </NavLink>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-[#363636] text-white z-[1] w-52 p-2 shadow"
                    >
                      <li>{page}</li>
                    </ul>
                  </div>



                  <NavLink className={"p-2"} to={"/blog"}>
                    Blog
                  </NavLink>
                  <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className=" m-1">
                      <NavLink className={"p-2"} >
                        Shop
                      </NavLink>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-[#363636] rounded-none text-white z-[1] w-52 p-2 shadow"
                    >
                      <li>{shop}</li>
                    </ul>
                  </div>
                  <NavLink className={"p-2"} to={"/contact"}>
                    Contact
                  </NavLink>
                </>
              </h1>
            </div>
            <div className="flex ">
              <details className="dropdown">
                <summary className="btn border-none rounded-full bg-white p-0 mr-3 hover:bg-white shadow-none">
                  <div className="indicator">
                  
                    <FaUser className=" text-2xl text-black" />
                  </div>
                </summary>
                <ul className="menu dropdown-content bg-white z-10 w-40 shadow ">
                  <>
                    <NavLink to="userhome">
                      <li className="border-b border-gray-200">
                        <a>My Profile</a>
                      </li>
                    </NavLink>
                    <NavLink to="cart">
                      <li className="border-b border-gray-200">
                        <a>My Cart</a>
                      </li>
                    </NavLink>
                    <li>
                      <button className="bg-green">Log out</button>
                    </li>
                  </>

                  <NavLink to="/login">
                    <li>Login</li>
                  </NavLink>
                </ul>
              </details>

              
              <span>
                <Link to="/mycart">
                  <div className="indicator mt-3 mr-5">
                    <span className="indicator-item badge bg-red-600 w-[10px] top-5 h-[18px] text-white border-none text-[12px]">
                      4
                    </span>
                    <button className=" text-2xl pl-[6px]">
                      <BsBag />
                    </button>
                  </div>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
