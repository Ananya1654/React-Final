import React from "react";
function Contact(){
    return(
        <>
        <h4 align='center'>Your mail will be reverted to in less than 12Hrs</h4>
        <hr/>
         <div align="center" >
        <from> 
           <label>First Name:</label><br/>
           <input type="text" placeholder="FirstName"/>
           <br/>
           <label>Enter your Email:</label><br/>
           <input type="email" placeholder="xyz@gmail.com"/><br/>
           <input type="Submit"/>
       </from>
       </div>
       <hr/>
       <div align="center" >
       <h2>Feel free to give feedback</h2>
       <input type={"box"} align="center" ></input><br/>
       <input type="Submit" align="center"/>
       </div>
        </>
    )
}
export default Contact