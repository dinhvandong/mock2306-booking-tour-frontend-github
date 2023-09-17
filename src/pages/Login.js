import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'

const Login = () => {
    return (
        <div className=' h-full overflow-y-auto ' style={{ width:'100%', display:'flex',
         flexDirection:'column', justifyItems:'center' , justifyContent:'center' , alignItems:'center'}}>
    
            <Header/>
            <LoginForm/>
            
            <Footer/>
    
    
        </div>
      )
}

export default Login