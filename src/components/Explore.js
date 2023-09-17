import React, { useEffect, useState } from "react";
import TourList from "./TourList";
import api from "../features/api/api";

const Explore = () => {


  const [tours, setTours] = useState([]);
  // localhost:8080/api/bookings

  const fetchData = async () => {
    try {
      const response = await api.get('/bookings');
      // Handle the response data
      console.log(response.data.data);
      setTours(response.data.data);
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };

  useEffect(()=>{

    fetchData();

  },[]);

  const tourList = [
    {
      image:
        "https://www.wallpaperup.com/uploads/wallpapers/2014/02/01/244470/f2ea3b64f92931a83c811e79693194ba-700.jpg",
      address: "Ha Noi",
      properties: "123213 properties",
    },
    {
      image:
        "https://www.wallpaperup.com/uploads/wallpapers/2014/02/01/244470/f2ea3b64f92931a83c811e79693194ba-700.jpg",
      address: "Ha Noi",
      properties: "123213 properties",
    },
    {
      image:
        "https://www.wallpaperup.com/uploads/wallpapers/2014/02/01/244470/f2ea3b64f92931a83c811e79693194ba-700.jpg",
      address: "Ha Noi",
      properties: "123213 properties",
    },
    {
      image:
        "https://www.wallpaperup.com/uploads/wallpapers/2014/02/01/244470/f2ea3b64f92931a83c811e79693194ba-700.jpg",
      address: "Ha Noi",
      properties: "123213 properties",
    },
    {
      image:
        "https://www.wallpaperup.com/uploads/wallpapers/2014/02/01/244470/f2ea3b64f92931a83c811e79693194ba-700.jpg",
      address: "Ha Noi",
      properties: "123213 properties",
    },
    {
      image:
        "https://www.wallpaperup.com/uploads/wallpapers/2014/02/01/244470/f2ea3b64f92931a83c811e79693194ba-700.jpg",
      address: "Ha Noi",
      properties: "123213 properties",
    },
    {
      image:
        "https://www.wallpaperup.com/uploads/wallpapers/2014/02/01/244470/f2ea3b64f92931a83c811e79693194ba-700.jpg",
      address: "Ha Noi",
      properties: "123213 properties",
    },
    {
      image:
        "https://www.wallpaperup.com/uploads/wallpapers/2014/02/01/244470/f2ea3b64f92931a83c811e79693194ba-700.jpg",
      address: "Ha Noi",
      properties: "123213 properties",
    },
    {
      image:
        "https://www.wallpaperup.com/uploads/wallpapers/2014/02/01/244470/f2ea3b64f92931a83c811e79693194ba-700.jpg",
      address: "Ha Noi",
      properties: "123213 properties",
    },
    {
      image:
        "https://www.wallpaperup.com/uploads/wallpapers/2014/02/01/244470/f2ea3b64f92931a83c811e79693194ba-700.jpg",
      address: "Ha Noi",
      properties: "123213 properties",
    },
    {
      image:
        "https://www.wallpaperup.com/uploads/wallpapers/2014/02/01/244470/f2ea3b64f92931a83c811e79693194ba-700.jpg",
      address: "Ha Noi",
      properties: "123213 properties",
    },
    {
      image:
        "https://www.wallpaperup.com/uploads/wallpapers/2014/02/01/244470/f2ea3b64f92931a83c811e79693194ba-700.jpg",
      address: "Ha Noi",
      properties: "123213 properties",
    },
  ];
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent:"center",
        width: "100%",
        marginTop:'50px',
        display: "flex",
        height: "300px",
      }}
    >
      <div className="flex flex-row w-[60%]">
        <TourList tourList={tours} />
      </div>
    </div>
  );
};

export default Explore;
