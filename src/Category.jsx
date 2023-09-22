import React from 'react'

const Category = ({set, filterItems}) => {



    
  return (
    <div>
         <div>

{set.map((category)=>{
  return (
    <button   className='btn' >{category}</button>
  )
})}
</div>
    </div>
  )
}

export default Category