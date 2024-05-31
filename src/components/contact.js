import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Contact() {
  return (
    <div>
      <div>
        <h1>CONTACT US</h1>
        </div>
    
     <div style={{display:"flex",alignItems:"center",width:"100%",height:"700px"}}>
      <div style={{width:"100%",height:"500px"}}>{<EmailIcon/>}
      <h3>EMAIL</h3>
      <h5>shreya@gmail.com</h5></div>
     
     <div style={{width:"100%",height:"500px"}}>
      {<LocationOnIcon/>}
      <h3>ADDRESS</h3>
      <h5>ujire,Mangalore</h5></div>
      <div style={{width:"100%",height:"500px"}}>
      {<SmartphoneIcon/>}
      <h3>PHONE</h3>
      <h5>9087698090</h5></div>
      </div>
    </div>
  )
}

