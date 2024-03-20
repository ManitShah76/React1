import React from 'react'
import { Link } from 'react-router-dom'
import data_product from '../Images/data'


function Populer() {
  return (
    <div>
      <div className="py-3 py-md-5 bg-light">
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                    <h4 className="mb-4">Populer Products</h4>
                </div>
                  {
                    data_product.map((elem)=>{
                      return  <div key={elem.id} className="col-md-3">
                        <Link onClick={window.scrollTo(0,0)} className='link' to={`/product/${elem.id}`}>
                      <div  className="product-card">
                          <div className="product-card-img">
                              <img src={elem.image} alt=""/>
                          </div>
                          <div className="product-card-body">
                              <h5 className="product-name">
                                <Link to={`/product/${elem.id}`}>
                                    {elem.name}
                                </Link>
                              </h5>
                              <div>
                                  <span className="selling-price">${elem.new_price}</span>
                                  <span className="original-price">${elem.old_price}</span>
                              </div>
                              <div className="mt-2">
                                  {/* <Link to={`/cart/${elem.id}`} className="btn btn1"><i className="fa fa-shopping-cart"></i>Add To Cart</Link> */}
                                  {/* <Link href="" className="btn btn1"> <i className="fa fa-heart"></i> </Link> */}
                                  {/* <Link to={`/product/${elem.id}`} className="btn btn1"><i className="fa-solid fa-eye"></i> View </Link> */}
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
  )
}

export default Populer
