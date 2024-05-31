import React from 'react';
import myimage from '../2593065.jpg';

function About() {
  return (
    <div>
      <div style={{backgroundColor:"black",width:"100%",height:"70px",alignItems:"center"}}>
        <h1 style={{color:"white"}}>ABOUT US</h1>
      </div>
      <div style={{width:"100%",height:"800px",alignItems:"center",textAlign:"center" ,backgroundImage:"url('https://wallpaperaccess.com/full/2593065.jpg') "}}>
      {/* <img src={myimage} alt="shop" width="100%" height="100%"/> */}
        <h2>Discover the best product at unbeatable prices</h2>
        <h4>Twenty years ago, we began as a small online retailer that only sold kitchen accessories
          . Today, we still sell kitchen accessories-as well as clothing,handbags,beauty products and more.
          That "more" is providing the very best customer service, customer experience, and company culture.
          we aim to inspire the world by showing it's possible to simultaneously deliver happiness to customers
          employees, vendors, shareholders, and the community is a long-term, sustainable way
        </h4>
        <h5>thank you</h5>

      </div>
     
    </div>
  );
}

export default About;