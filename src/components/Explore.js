import React from "react";
import TourList from "./TourList";

const Explore = () => {
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
        <TourList tourList={tourList} />
      </div>
    </div>
  );
};

export default Explore;
