import React, {useState} from 'react';
import ImageHelper from './helper/ImageHelper';
import {Redirect} from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import {isAuthenticated} from "../auth/helper"

const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  reload = undefined,
  setReload =  f =>f,

    }) => {

    const [redirect, setRedirect] = useState(false)
    const cartTitle = product ? product.name : "Hyzen is the best"
    const cartDescription = product ? product.description : "Hyzen is the best"
    const cartPrice = product ? product.price : "Hyzen is the best" 
    const addToCart = () => {
      if (isAuthenticated()) {
        addItemToCart(product, () => setRedirect(true));
        console.log("Added to cart");
      } else {
        console.log("Login Please!");
      }
    };

    const showRemoveFromCart = removeFromCart => {
      return(
        removeFromCart && (
          <button
                onClick={() => {
                  removeItemFromCart(product.id);
                  setReload(!reload)
                  console.log("Product Removed from Cart")
                }}
                className="btn btn-block btn-outline-danger mt-2 mb-2"
              >
                Remove from cart
              </button>
        )
      )
    }
    
    const getAredirect = (redirect) => {
      if (redirect) {
        return <Redirect to="/cart"/>
      }
    };
    const showAddtoCart = addToCartSwitch => {
      return(
        addtoCart && (
          <button
                onClick={addToCart}
                className="btn btn-block btn-outline-success mt-2 mb-2"
              >
                Add to Cart
              </button>
        )
      );
    }
    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{cartTitle}</div>
        <div className="card-body">
          {getAredirect(redirect)}
          <ImageHelper product={product}/>
          <p className="lead bg-success font-weight-normal text-wrap">
            {cartDescription}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">{cartPrice}</p>
          <div className="row">
            <div className="col-12">
              {showAddtoCart(addtoCart)}
            </div>
            <div className="col-12">
              {showRemoveFromCart(removeFromCart)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Card;