import React from 'react'
import Header1 from '../Header1'
import NavAdmin from './NavAdmin'


const HeaderAdmin = () => {
  return (
    <div style={{ alignItems:'center',   width:'100%', display:'flex', flexDirection:'column', backgroundColor:'#003B95', height:'350px' }}>
        
        <Header1/>
        <NavAdmin/>
    </div>
  )
}

export default HeaderAdmin