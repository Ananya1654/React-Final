import React from "react"
import{BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Contact from './Contact'
import About from "./About"
import Services from "./Services"
import Home from "./Home"
import pic0 from './images(28)'
const ps={
    width:"500px"

}





function App(){
  return(
   
    
  <BrowserRouter>
 
<nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <div className="container-fluid">
    <a className="navbar-brand" href="Element" style={{fontFamily:"cursive"}}>Welcome to Taj</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="element" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><Link to="/Home" >Home</Link></li>
         <li><Link to="/Services" >Order Food</Link></li>
            <li><Link to="/About" >AboutUs</Link></li>
            <li><Link to="/Contact" >ContactUS</Link></li>
          </ul>
        </li>
        <li className="nav-item">
         
        </li>
      </ul>
      <form className="d-flex">
        
      </form>
    </div>
  </div>
</nav>
<img src={pic0} style={ps} alt="hotel"/><hr/>
  <Routes>
  <Route path='/Home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/Services' element={<Services/>}/>
    
    
  
  </Routes>

  </BrowserRouter>
  )

}



export default App