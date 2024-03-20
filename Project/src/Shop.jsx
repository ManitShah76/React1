import React from 'react'
import Populer from './Populer/Populer'
import NewCollection from './NewCollection/NewCollection'
import hero_banner from './Images/hero_banner.png'
 
function Shop() {
  return (
    <div>
      <img src={hero_banner} alt="" height="600px" width="100%" />
      <Populer/>
      <NewCollection/>
    </div>
  )
}

export default Shop
