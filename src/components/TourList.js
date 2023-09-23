import React from 'react'
import TourItem from './TourItem'

const TourList = ({tourList}) => {
  
  return (
    <div className="flex overflow-x-auto scroll-smooth">
    {tourList.map((tour, index) => (
        <TourItem key={index} tour = {tour}/>
    ))}
  </div>
  )
}

export default TourList