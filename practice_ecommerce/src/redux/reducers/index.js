import { combineReducers } from "redux";
import {addItemToCart, addItemToCartQuanity, removeItemFromCart, removeItemQuanityFromCart} from "./cartReducers";

export default combineReducers({ addItemToCart, addItemToCartQuanity, removeItemFromCart, removeItemQuanityFromCart});
