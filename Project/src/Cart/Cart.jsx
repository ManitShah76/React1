import React, { useContext, useState } from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'

function Cart() {

    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(CartContext)

    const [count,setCount] = useState(1)

    const handleaddClick = ()=>{
        setCount(count+1)
    }

    const handleminusClick = ()=>{
        setCount(count-1)
    }


  return (
    <div>
      <div className="py-3 py-md-5 bg-light">
        <div className="container">
    
            <div className="row">
                <div className="col-md-12">
                    <div className="shopping-cart">

                        <div className="cart-header d-none d-sm-none d-mb-block d-lg-block">
                            <div className="row">
                                <div className="col-md-4">
                                    <h4>Products</h4>
                                </div>
                                <div className="col-md-2">
                                    <h4>Size</h4>
                                </div>
                                <div className="col-md-2">
                                    <h4>Price</h4>
                                </div>
                                <div className="col-md-2">
                                    <h4>Quantity</h4>
                                </div>
                                <div className="col-md-2">
                                    <h4>Remove</h4>
                                </div>
                            </div>
                        </div>

                        {all_product.map((product)=>
                        {
                            if (cartItems[product.id]>0) {
                        return <div key={product.id} className="cart-item">
                            <div className="row">
                                <div className="col-md-4 my-auto">
                                    <Link to="">
                                        <div className="product-name">
                                            <img src={product.image}  width= "50px" height= "50px" alt=""/>
                                            {product.name}
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-2 my-auto">
                                    <label className="price">{product.size}</label>
                                </div>
                                <div className="col-md-2 my-auto">
                                    <label className="price">${product.new_price * cartItems[product.id]}</label>
                                </div>
                                <div className="col-md-2 col-7 my-auto">
                                    <div className="quantity">
                                        <div className="input-group">
                                            {/* <button className="btn btn1" onClick={()=>{handleminusClick()}}><i className="fa fa-minus"></i></button> */}
                                            <p className=''>{cartItems[product.id]}</p>
                                            {/* <button className="btn btn1" onClick={()=>{handleaddClick()}}><i className="fa fa-plus"></i></button> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 col-5 my-auto">
                                    <div className="remove">
                                        <button onClick={()=>{removeFromCart(product.id)}} to="" className="btn btn-danger btn-sm">
                                            <i className="fa fa-trash"></i> Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                        })}
                        <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
         <button>Proceed To Checkout</button>   
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder='Promo Code'/>
                <button>Submit</button>
            </div>
        </div>
      </div>
                                
                    </div>
                </div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Cart
