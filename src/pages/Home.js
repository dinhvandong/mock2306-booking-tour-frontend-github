import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Trending from '../components/Trending'
import Explore from '../components/Explore'

const Home = () => {
  return (
    <div className=' h-full overflow-y-auto' style={{ width:'100%', display:'flex',
     flexDirection:'column'  }}>

        <Header/>
        <Trending/>
        <Explore/>
        <Footer/>


    </div>
  )
}

export default Home