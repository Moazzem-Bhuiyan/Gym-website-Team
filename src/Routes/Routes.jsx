import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Home/Home/Home";

import OurServices from "../Page/PageMenu/OurServices";
import OurTeam from "../Page/PageMenu/OurTeam";
import Faq from "../Page/PageMenu/Faq";
import Pricing from "../Page/PageMenu/Pricing";
import GetQuta from "../Page/PageMenu/GetQuta";
import Cart from "../Page/Shop/Cart";
import ProductList from "../Page/Shop/ProductList";
import Wishlist from "../Page/Shop/Wishlist";
import Contact from "../Page/Contact/Contact";
import Blog from "../Page/Blog/Blog";
import Login from "../Page/Login/Login";
import Register from "../Page/Login/Register";
import MainAbout from "../Page/PageMenu/about/MainAbout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <MainAbout></MainAbout>,
      },
      {
        path: "/service",
        element: <OurServices></OurServices>,
      },
      {
        path: "/ourTeam",
        element: <OurTeam></OurTeam>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/getQuta",
        element: <GetQuta></GetQuta>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/productList",
        element: <ProductList></ProductList>,
      },
      {
        path: "/wishList",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
