import React from 'react'

const MenuItem = ({ img, price,desc, title}) => {
  return (
    <div className='menu-card'>
     <div className='image'>
        <img src={img}/>
     </div>
     <div className='text' >
        <h3>{title}</h3>
        <h3>{price}</h3>
     </div>
     <div className='desc'>
        <p>{desc}</p>
     </div>
    </div>
  )
}

export default MenuItem