import React, { useState } from "react";
import all_product from "../Images/all_product";
import { Link } from "react-router-dom";
import "./Category.css";
import Slider from "../Slider/Slider";

function Category() {
  const [items,setItems] = useState(all_product)

  const filterItems = (categItem)=>{
    const updatedItems = all_product.filter((curElem)=>{
      return curElem.category === categItem;
    })  
    setItems(updatedItems);
  }

  return (
    <div>
      <button className="btn btn-primary m-3 text-white" onClick={() => filterItems('men')}>
        Mens
      </button>
      <button className="btn btn-primary m-3 text-white" onClick={() => filterItems('women')}>
        Womens
      </button>
      <button className="btn btn-primary m-3 text-white" onClick={() => filterItems('kid')}>
        Kids
      </button>
      <button className="btn btn-primary m-3 text-white" onClick={() => setItems(all_product)}>
        All
      </button>

      <Slider/>

      <div class="py-3 py-md-5 bg-light">
        <div class="container">
            <div class="row">
                  {
                    items.map((elem)=>{
                      return  <div key={elem.id} class="col-md-3">
                        <Link  className="link" to={`/product/${elem.id}`}>
                      <div key={elem.id} class="product-card">
                          <div class="product-card-img">
                              <img src={elem.image} alt=""/>
                          </div>
                          <div class="product-card-body">
                              <h5 class="product-name">
                                <Link to={`/product/${elem.id}`}>
                                    {elem.name}
                                </Link>
                              </h5>
                              <div className="text-start">
                                  <span class="selling-price">${elem.new_price}</span>
                                  <span class="original-price">${elem.old_price}</span>
                              </div>
                              <div class="mt-2">
                                  {/* <Link to={`/cart/${elem.id}`} class="btn btn1"><i class="fa fa-shopping-cart"></i>Add To Cart</Link> */}
                                  {/* <Link href="" class="btn btn1"> <i class="fa fa-heart"></i> </Link> */}
                                  {/* <Link to={`/product/${elem.id}`} href="" class="btn btn1"><i class="fa-solid fa-eye"></i> View </Link> */}
                              </div>
                          </div>
                      </div>
                        </Link>
                  </div>
                    })
                  }
    
            </div>
        </div>
    </div>

      
    </div>
  );
}

export default Category;
