import React from "react";
import pic1 from './Food1.jpeg'
import pic2 from './Food2.jpeg'
import pic3 from './Food3.jpeg'
import pic4 from './Food4.jpeg'
import pic5 from './Food5.jpeg'
import pic6 from './Food6.jpeg'
import pic7 from './Food7.jpeg'
import pic8 from './Food8.jpeg'
import pic9 from './Food9.jpeg'
import pic10 from './Food10.jpeg'
import pic11 from './Food11.jpeg'
import pic12 from './Food12.jpeg'
import pic13 from './Food13.jpeg'
import pic14 from './Food14.jpeg'
import pic15 from './Food15.jpeg'
import "./Services.css"
function Services (){
    return(
        <>
        <h1 className="h1">Select From Our Menu</h1>
        <hr/>
        
       <div className="container">
         <div className="card" style={{"width": "20%" }} class="row">
  <img src={pic1} class="card-img-center" alt="image1"/>
  <div className="card-body">
    <h5 className="card-title">Tandoori Chicken</h5>
    <p className="card-text"> Chicken legs marinated in lemon juice, yogurt, and aromatic spices, grilled in a tandur oven.</p>
    <a href="image" className="btn btn-primary">Order</a>
  </div>
</div>
       
<div className="card" style={{"width" : "20%"}} class="row">
  <img src={pic2} className="card-img-right" alt="image2"/>
  <div className="card-body">
    <h5 className="card-title">Kadhai Paneer</h5>
    <p className="card-text">Kadai Paneer is a vibrant, tangy, deeply spiced paneer recipe that is perfect for enjoying all year round. Made with Indian pantry staples like onions, tomatoes, capsicum (green bell peppers) and Indian spices.</p>
    <a href="image" className="btn btn-primary">Order</a>
  </div>
</div>
<div className="card" style={{"width" : "20%"}}>
  <img src={pic3} className="card-img-top" alt="image3"/>
  <div className="card-body">
    <h5 className="card-title">Mini Lunch for two.</h5>
    <p className="card-text">Brinjal pepper kuzhambu, Mixed vegetable kootu, Paruppu rasam with garlic , Paruppu thogaiyal, instant mango pickle</p>
    <a href="image" className="btn btn-primary">Order</a>
  </div>
</div>
<div>
<div className="card" style={{"width" : "20%"}}>
  <img src={pic4} className="card-img-top" alt="image4"/>
  <div className="card-body">
    <h5 className="card-title">Poridge</h5>
    <p className="card-text">Porridge[1] is a food made by heating or boiling ground, crushed or chopped starchy plants, typically grain, in milk or water.</p>
    <a href="image" className="btn btn-primary">Order</a>
  </div>
</div>
<div className="card" style={{"width" : "20%"}}>
  <img src={pic5} className="card-img-top" alt="image5"/>
  <div className="card-body">
    <h5 className="card-title">Masala Dhosa</h5>
    <p className="card-text">Masala dosa are crispy, soft, savory and healthy crepes made with a rice and lentil batter. The dosa are gluten-free and dairy-free, with a sturdy yet soft texture that’s great for holding a hearty homemade potato filling.</p>
    <a href="image" className="btn btn-primary">Order</a>
  </div>
</div>
<div className="card" style={{"width" : "20%"}}>
  <img src={pic6} className="card-img-top" alt="image6"/>
  <div className="card-body">
    <h5 className="card-title">Idli Sambhar</h5>
    <p className="card-text">
    Idli Sambar is a hearty, satisfying, comforting and a healthy meal of soft fluffy idlis served with savory, spiced and lightly tangy sambar – a vegetable stew made with lentils and assorted vegetables. It is a winning combination made for each other</p>
    <a href="image" className="btn btn-primary">Order</a>
  </div>
</div>
</div>
<div className="card" style={{"width" : "20%"}}>
  <img src={pic7} className="card-img-top" alt="image7"/>
  <div className="card-body">
    <h5 className="card-title">Laal Maans</h5>
    <p className="card-text">a meat curry from Rajasthan, India. It is a mutton curry prepared in a sauce of yoghurt and hot spices such as red Mathania chillies. </p>
    <a href="image" className="btn btn-primary">Order</a>
  </div>
</div>
<div className="card" style={{"width" : "20%"}}>
  <img src={pic8} className="card-img-top" alt="image8"/>
  <div className="card-body">
    <h5 className="card-title">Thepla</h5>
    <p className="card-text">This soft flatbread is part of the main meal, but is often consumed as breakfast or a snack with a hot beverage</p>
    <a href="image" className="btn btn-primary">Order</a>
  </div>
</div>
<div className="card" style={{"width" : "20%"}}>
  <img src={pic9} className="card-img-top" alt="image9"/>
  <div className="card-body">
    <h5 className="card-title">Chole Puri</h5>
    <p className="card-text">Chole is prepared by cooking chickpeas and adding spices such as cumin, coriander seeds, turmeric powder, and chili powder. Onion, garlic, and ginger are also added for additional flavor. Puri is prepared by combining flour, salt, and oil, and kneading the dough. The dough is rolled out into circles and deep-fried until the puri puff up.</p>
    <a href="image" className="btn btn-primary">Order</a>
  </div>
</div>
<div className="card" style={{"width" : "20%"}}>
  <img src={pic10} className="card-img-top" alt="image10"/>
  <div className="card-body">
    <h5 className="card-title">Paapdi chaat</h5>
    <p className="card-text">Papdi chaat is a popular North Indian street food snack filled with a variety of mouth-watering textures and flavors. Papri Chaat includes chickpeas, potatoes, various chutneys, yogurt, papdi, curd, sev and is garnished with coriander. s</p>
    <a href="image" className="btn btn-primary">Order</a>
  </div>
</div>
<div className="card" style={{"width" : "20%"}}>
  <img src={pic11} className="card-img-top" alt="image11"/>
  <div className="card-body">
    <h5 className="card-title">Chicken curry with rice combo</h5>
    <p className="card-text"> Indian chicken curry typically starts with whole spices, heated in oil. A sauce is then made with onions, ginger, garlic, and tomatoes, and powdered spices. Bone-in pieces of chicken are then added to the sauce, and simmered until cooked through.[1] In south India, coconut and curry leaves are also common ingredients.[2] Chicken curry is usually garnished with coriander leaves, and served with rice .</p>
    <a href="image" className="btn btn-primary">Order</a>
  </div>
</div>
<div className="card" style={{"width" : "20%"}}>
  <img src={pic12} className="card-img-top" alt="image12"/>
  <div className="card-body">
    <h5 className="card-title">Chicken Masala</h5>
    <p className="card-text">Chicken masala is a simple Indian dish made with chicken, spices, herbs, onions and tomatoes. Serve with rice, naan, roti or paratha.</p>
    <a href="image" className="btn btn-primary">Order</a>
  </div>
</div>
<div className="card" style={{"width" : "20%"}}>
  <img src={pic13} className="card-img-top" alt="image13"/>
  <div className="card-body">
    <h5 className="card-title">Chicken jwalamukhi</h5>
    <p className="card-text">In this easy Indian chicken curry chicken breasts are slowly simmered in a spicy curry sauce with yogurt, tomatoes, onion, garlic, and ginger.</p>
    <a href="image" className="btn btn-primary">Order</a>
  </div>
</div>
<div className="card" style={{"width" : "20%"}}>
  <img src={pic14} className="card-img-top" alt="image14"/>
  <div className="card-body">
    <h5 className="card-title">Paneer Butter Masala</h5>
    <p className="card-text">Paneer butter masala, also known as butter paneer is a rich & creamy curry made with paneer, spices, onions, tomatoes, cashews and butter.</p>
    <a href="image" className="btn btn-primary">Order</a>
  </div>
</div>
<div className="card" style={{"width" : "20%"}}>
  <img src={pic15} className="card-img-top" alt="image15"/>
  <div className="card-body">
    <h5 className="card-title">Champaran Mutton</h5>
    <p className="card-text">Champaran meat, also known as ahuna, handi meat or batlohi, is a dish with its root from Champaran,[1][2][3][4][5]a district of Bihar. Meat is marinated in a mix of mustard oil and ghee, garlic, onions, ginger with the paste of spices. [1][2][3][5] The mouth of the handi (earthenware pot) is sealed with kneaded flour.[1] [2][3][4] It is cooked slowly on a low flame of a wood fire and tossed continuously while cooking.</p>
    <a href="image" className="btn btn-primary">Order</a>
  </div>
</div>
</div>
       
        </>
    )
}
export default Services