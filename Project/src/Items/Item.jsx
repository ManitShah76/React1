import React from 'react'

function Item() {
  return (
    <div>
      <div class="py-3 py-md-5 bg-light">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h4 class="mb-4">Populer in Woman</h4>
                </div>
                <div class="col-md-3">
                    <div class="product-card">
                        <div class="product-card-img">
                            <label class="stock bg-success">In Stock</label>
                            {/* <img src={item.image} alt=""/> */}
                        </div>
                        <div class="product-card-body">
                            <p class="product-brand">HP</p>
                            <h5 class="product-name">
                               <a href="">
                                   {/* {item.name} */}
                               </a>
                            </h5>
                            <div>
                                {/* <span class="selling-price">{item.new_price}</span> */}
                                {/* <span class="original-price">{item.old_price}</span> */}
                            </div>
                            <div class="mt-2">
                                <a href="" class="btn btn1">Add To Cart</a>
                                <a href="" class="btn btn1"> <i class="fa fa-heart"></i> </a>
                                <a href="" class="btn btn1"> View </a>
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

export default Item
