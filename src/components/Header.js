import React from 'react'
import Header1 from './Header1'
import Header3 from './Header3'
import NavigationMenu from './NavMenu'

const Header = () => {
  return (
    <div style={{ alignItems:'center',   width:'100%', display:'flex', flexDirection:'column', backgroundColor:'#003B95', height:'350px' }}>
        
        <Header1/>
        <NavigationMenu/>
        <Header3/>
    </div>
  )
}

export default Header