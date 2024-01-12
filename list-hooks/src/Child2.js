import React, { useContext } from 'react'
import { prop } from './UseContext'

function Child2() {
  const property = useContext(prop)
  return (
    <div>

        CHILD 2 has also {property}
      
    </div>
  )
}

export default Child2


