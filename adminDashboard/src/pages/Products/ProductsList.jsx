import React from 'react'
import { Outlet } from 'react-router-dom'

function ProductsList() {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default ProductsList