import React from 'react'
import Header1 from './Header1'
import Header2 from './Header2'

const Header = () => {
  return (
    <div style={{ alignItems:'center', alignContent:'center', justifyItems:'center', width:'100%', display:'flex', flexDirection:'column', backgroundColor:'#003B95', height:'150px' }}>
        
        <Header1/>
        <Header2/>
    </div>
  )
}

export default Header