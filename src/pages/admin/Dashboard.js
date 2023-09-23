import React from 'react'

import Footer from '../../components/Footer'
import HeaderAdmin from '../../components/admin/HeaderAdmin'
import CustomerList from '../../components/admin/CustomerList'


const Dashboard = () => {
  return (
    <div className=' h-full overflow-y-auto' style={{ width:'100%', display:'flex',
     flexDirection:'column'  }}>

        <HeaderAdmin menu={"menu1"}/>
        <CustomerList/>
      
        <Footer/>


    </div>
  )
}

export default Dashboard