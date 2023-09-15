import React from "react";

const TourItem = ({tour}) => {
  return (
    <div className="w-[200px] h-[250px] flex flex-col ml-10  ">
      <div style={{ backgroundImage: `url(${tour.image})` }}  className=" rounded-lg w-[200px] h-[200px] bg-cover bg-center">
        {/* <img src={props.image} alt="tour" /> */}
      </div>
      <div>{tour.address}</div>
      <div>{tour.properties }</div>
    </div>
  );
};

export default TourItem;
