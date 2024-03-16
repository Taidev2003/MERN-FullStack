import HomePage from "../Page/Homepage/HomePage";
import LoginPage from "../Page/LoginPage/LoginPage";
import NotFoundPage from "../Page/NotfoundPage/NodeFoundPage";
import OrderPage from "../Page/OrderPage/OrderPage";
import productDetails from "../Page/ProductDetailsPage/ProductDetails";
import ProductPage from "../Page/ProductPage/ProductPage";
import SignUpPage from "../Page/SignUpPage/SignUpPage";

const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/products",
    page: ProductPage,
    isShowHeader: true,
  },
  {
    path: "/order",
    page: OrderPage,
    isShowHeader: true,
  },
  {
    path: "/productDetails",
    page: productDetails,
    isShowHeader: true,
  },
  {
    path: "/login",
    page: LoginPage,
    isShowHeader: false,
  },
  {
    path: "/sign-up",
    page: SignUpPage,
    isShowHeader: false,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];

export default routes;
