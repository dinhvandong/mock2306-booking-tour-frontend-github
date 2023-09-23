import React from 'react'
import Header1 from './Header1'
import Header3 from './Header3'
import NavigationMenu from './NavMenu'

const Header = () => {
  return (
    <div style={{ alignItems:'center',   width:'100%', display:'flex', flexDirection:'column', backgroundColor:'#003B95', height:'350px' }}>
        
        <Header1/>
        <NavigationMenu/>
        <Header3 title={"Where to next, Đinh Văn?"} sub={"Find exclusive Genius rewards in every corner of the world!"}/>
    </div>
  )
}

export default Header