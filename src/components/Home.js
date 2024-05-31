import React from 'react';
import myimage from '../cartoon-online-shopping-vector-2153358.jpg';
function Home() {
  return (
    <div style={{display:"flex"}}>
      <div style={{width:"70%",height:"500px",alignItems:"center"}}>
        <h1>WELCOME TO OUR STORE🎁</h1><br></br>
        <h4>Discover the best product at unbeatable prices</h4>
      </div>
      <div style={{backgroundColor:"lightpink",width:"100%",height:"500px",alignItems:"center"}}>
        <img src={myimage} alt="shop" width="100%" height="100%"/>
        
      </div>
      
    </div>
  );
}

export default Home;