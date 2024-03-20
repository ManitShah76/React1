import React, { useContext, useState } from 'react'
import '../ProductDetail/ProductDetail.css'
import { Link, useParams } from 'react-router-dom'
import all_product from '../Images/all_product'
import { CartContext } from '../CartContext'

function ProductDetail() {

    // const product = props;
    const [size,setSize] = useState([])
    // console.log(size);
    const {addToCart} = useContext(CartContext);

    
    // const handleaddClick = ()=>{
    //     setCount(count+1)
    // }

    // const handleminusClick = ()=>{
    //     setCount(count-1)
    // }


    const {pid} = useParams()

    const product = all_product.find((item)=>{
        return item.id === parseInt(pid);
    })

   

  return (
    <div>
        <div className="py-3 py-md-5 bg-light">
        <div className="container text-start">
            <div className="row">
                <p className="product-path">
                    Home &gt; {product.category} &gt; {product.name}
                </p>
                <div className="col-md-5 mt-3">
                    <div className="bg-white border">
                        <img src={product.image} className="w-100" alt="Img"/>
                    </div>
                </div>
                <div className="col-md-7 mt-3">
                    <div className="product-view">
                        <h4 className="product-name">
                            {product.name}
                        </h4>
                        <hr/>
                        
                        <div>
                            <span className="selling-price">${product.new_price}</span>
                            <span className="original-price">${product.old_price}</span>
                        </div>
                        {/* {
                            size.map((v)=>{
                               return <div  className="mt-3">
                                    <li className="btn btn1">{v.size}</li>
                                    {/* <button to="" className="btn btn1">{product.size="M"}</button>
                                    <button to="" className="btn btn1">{product.size="L"}</button>
                                    <button to="" className="btn btn1">{product.size="XL"}</button>
                                    <button to="" className="btn btn1">{product.size="XXL"}</button> 
                                </div>
                            })
                        } */}
                                <div  className="mt-3">
                                    <button to="" className="btn btn1">{product.sizes="S"}</button>
                                    <button to="" className="btn btn1">{product.sizes="M"}</button>
                                    <button to="" className="btn btn1">{product.sizes="L"}</button>
                                    <button to="" className="btn btn1">{product.sizes="XL"}</button>
                                    <button to="" className="btn btn1">{product.sizes="XXL"}</button>
                                </div>
                        <div className="mt-3">
                            {/* <div className="input-group">
                                <button className="btn btn1"><i className="fa fa-minus"></i></button>
                                <input type="text" value="1" className="input-quantity" />
                                <button className="btn btn1" ><i className="fa fa-plus"></i></button>
                            </div> */}
                        </div>
                        <div className="mt-3">
                            <button onClick={()=>{addToCart(product.id)}} className="btn btn1"> <i className="fa fa-shopping-cart"></i> Add To Cart</button>
                            {/* <Link to="" className="btn btn1"> <i className="fa fa-heart"></i> Add To Wishlist </Link> */}
                        </div>
                        <div className="mt-3">
                            <h5 className="mb-0">Small Description</h5>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mt-3">
                    <div className="card">
                        <div className="card-header bg-white">
                            <h4>Description</h4>
                        </div>
                        <div className="card-body">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ProductDetail
