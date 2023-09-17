import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Hotel = () => {
    return (
        <div className=' h-full overflow-y-auto' style={{ width:'100%', display:'flex',
         flexDirection:'column'  }}>
    
            <Header/>
            
            <Footer/>
    
    
        </div>
      )
}

export default Hotel