import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Fights = () => {
    return (
        <div className=' h-full overflow-y-auto' style={{ width:'100%', display:'flex',
         flexDirection:'column'  }}>
    
            <Header/>
            
            <Footer/>
    
    
        </div>
      )
    }

export default Fights