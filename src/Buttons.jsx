import React, { useState } from 'react'
import menu from './data'
import Category from './Category';



const Buttons = () => {

const filterItems=(category)=>{
  console.log(category);
}

const newSet= new Set();
menu.map((items)=>{
  newSet.add(items.category) 
})

const newArr= Array.from(newSet)
const[set,setSet]= useState(newArr)



  return (
    <div className='btn-container'>
     <Category  set={set}  filterItems={filterItems}/>
</div>
  )
}

export default Buttons