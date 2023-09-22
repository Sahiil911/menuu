import { useState } from "react";
import Buttons from "./Buttons";
import Menu from "./Menu";
import Title from "./Title";
import menu from "./data";
const App = () => {


  const [data,setData]= useState(menu)



  return(
    <div className="main-container">
    <Title/>
    <Buttons/>
    <Menu data={data} />
    </div>
  )
};
export default App;
