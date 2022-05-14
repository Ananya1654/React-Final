import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import taj1 from "./taj.jpeg"
import taj2 from "./taj2.jpeg"
import taj3 from "./taj3.jpeg"
import taj4 from "./taj4.jpeg"
import taj5 from "./taj5.jpeg"
import taj6 from "./taj6.jpeg"
import taj20 from "./taj20.jpeg"
import taj21 from "./taj20.jpeg"


const Home=()=>{
    return(
        <>
       <div className="grid container">
      <img src={taj1} alt="taj"/>  
      <img src={taj2} alt="taj"/>  
      <img src={taj3} alt="taj"/> 
      <img src={taj4} alt="taj"/>
      <img src={taj5} alt="taj"/> 
      <img src={taj6} alt="taj"/>
      <img src={taj20} alt="taj"/>
      <img src={taj21} alt="taj"/> 
      </div>
        </>
    )
}
export default Home