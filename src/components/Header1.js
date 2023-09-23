/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import { IonIcon } from '@ionic/react'
import {helpCircleOutline} from 'ionicons/icons';
import React from 'react'
import { useNavigate } from 'react-router-dom';


const Header1 = () => {
  const navigate = useNavigate();
  const  handleSignIn = ()=>{
    navigate('/login');
  }
  return (
    <div style={{ 
     alignContent:'center', color:'white', alignItems:'center', height:'60px', width:'60%',display:'flex' , flexDirection:'row', justifyContent:'space-between' }}>

        <div style={{ fontSize:'20px', color:'white', fontWeight:'bold', alignItems:'center' }}>
            Booking.com
        </div>

        <div style={{ width:'550px', alignItems:'center',  
             marginBlockEnd:'10px', display:'flex', flexDirection:'row', justifyContent:'flex-end' }}>

            <button style={{borderWidth:'0px', color:'white', marginRight:'10px', backgroundColor:'transparent', height:'30px' }}>VND</button>
            <div style={{ height:'30px', marginRight:'10px', backgroundColor:'transparent' }}> <img style={{ width:'30px', height:'30px' }} src='../assets/flag-usa.png' alt='flag-usa' /></div>
            <div style={{ height:'50px',marginRight:'10px', backgroundColor:'transparent', color:'white', fontSize:'35px' }} ><IonIcon icon={helpCircleOutline}/></div>
            <button style={{ color:'white',marginRight:'10px',  backgroundColor:'transparent',height:'30px', borderColor:'white' }}>List your property</button>
            <button style={{marginRight:'10px', height:'30px' }}>Register</button>
            <button onClick={handleSignIn} style={{ height:'30px' }}>SignIn</button>

        </div>
    </div>
  )
}

export default Header1