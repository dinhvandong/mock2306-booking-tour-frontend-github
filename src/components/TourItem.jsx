import React, { useEffect, useState } from "react";

const TourItem = ({tour}) => {

  // const [url, setUrl] = useState('');

  // useEffect(()=>{
  //   setUrl(tour.url);
  //   console.log("url:", url);
  // })

  return (
    <div className="w-[200px] h-[250px] flex flex-col ml-10  ">
      <div style={{ backgroundImage: `url(${tour.url})` }}  className=" rounded-lg w-[200px] h-[200px] bg-cover bg-center">
        {/* <img src={props.image} alt="tour" /> */}
      </div>
      <div>{tour.bookingName}</div>
      <div>{tour.price }</div>
    </div>
  );
};

export default TourItem;
