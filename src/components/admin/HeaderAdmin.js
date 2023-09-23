import React from 'react'
import Header1 from '../Header1'
import NavAdmin from './NavAdmin'
import Header3 from '../Header3'


const HeaderAdmin = ({menu, title, sub}) => {
  return (
    <div style={{ alignItems:'center',   width:'100%', display:'flex', flexDirection:'column', backgroundColor:'#003B95', height:'350px' }}>
        
        <Header1/>
        <NavAdmin menu={menu}/>
        <Header3 title={title} sub={sub}/>
    </div>
  )
}

export default HeaderAdmin