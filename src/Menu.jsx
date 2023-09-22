import React from 'react'
import MenuItem from './MenuItem'

const Menu = ({data}) => {
  return (
    <div className='menu-container'>
{data.map((list)=>{
return (
    <div>
<MenuItem key={list.id} {...list} />
    </div>
)
})}
    </div>

  )
}

export default Menu