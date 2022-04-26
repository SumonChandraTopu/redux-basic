import React from 'react'
import { useSelector } from 'react-redux'
import  {saveAllProduct}  from './mobileSlice'

function Mobile() {
    const mobiles = useSelector(saveAllProduct)
    console.log(mobiles);
  return (
    <div>
        
    </div>
  )
}

export default Mobile