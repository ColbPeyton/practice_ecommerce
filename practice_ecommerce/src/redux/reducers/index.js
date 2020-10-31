import { combineReducers } from "redux";
import {addItemToCart, addItemToCartQuanity} from "./addToCart";
import {removeItemFromCart, removeItemQuanityFromCart} from "./removeFromCart";

export default combineReducers({ addItemToCart, addItemToCartQuanity, removeItemFromCart, removeItemQuanityFromCart});
