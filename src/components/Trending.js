/* eslint-disable no-unused-vars */
import React from "react";

const Trending = () => {

    const arrayImage = ["https://th.bing.com/th/id/R.112922105e78d9aa0867d6cc5c50fc21?rik=ajlkITgObXkEdg&riu=http%3a%2f%2fheavenlytraveltours.com%2fwp-content%2fuploads%2f2016%2f11%2faa-1.jpg&ehk=mwUE24ex%2fytZLvEXdo%2bVYYiS4f3Pd8JeBhc289IvFfo%3d&risl=&pid=ImgRaw&r=0",
    "https://www.wallpaperup.com/uploads/wallpapers/2014/02/01/244470/f2ea3b64f92931a83c811e79693194ba-700.jpg",
    "https://www.brides.com/thmb/oBGySNS1RsH_WQk_0x19JHiSRrQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__brides__public__brides-services__production__2019__02__04__5c586db0c7f8d82cfb6ee4bb_GettyImages-932696132-797a0c7ea2a24f57978cdab55ed27344.jpg",
    "https://www.brides.com/thmb/oBGySNS1RsH_WQk_0x19JHiSRrQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__brides__public__brides-services__production__2019__02__04__5c586db0c7f8d82cfb6ee4bb_GettyImages-932696132-797a0c7ea2a24f57978cdab55ed27344.jpg",
    "https://www.brides.com/thmb/oBGySNS1RsH_WQk_0x19JHiSRrQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__brides__public__brides-services__production__2019__02__04__5c586db0c7f8d82cfb6ee4bb_GettyImages-932696132-797a0c7ea2a24f57978cdab55ed27344.jpg"];
  return (

    <div style={{ alignItems:'center',   marginTop:'50px', width:'100%', display:'flex', flexDirection:'column' }}>
        
        <div className="flex flex-col w-[60%] h-auto">
      <div>Trending destinations</div>
      <div>Most popular choices for travellers from Vietnam</div>
      <div className="flex h-[250px] flex-row items-center  justify-between">
        <div style={{ backgroundImage: `url(${arrayImage[0]})` }}  className="bg-cover bg-center w-[49.5%] h-[98%] bg-green-600" ></div>
        <div style={{ backgroundImage: `url(${arrayImage[1]})` }}  className="bg-cover bg-center w-[49.5%] h-[98%] bg-yellow-600"></div>
      </div>
      <div className="flex  h-[250px] flex-row items-center justify-between">
        <div style={{ backgroundImage: `url(${arrayImage[0]})` }}  className="bg-cover bg-center w-[33%] h-[98%] bg-green-600"></div>
        <div style={{ backgroundImage: `url(${arrayImage[0]})` }}  className=" bg-cover bg-center w-[33%] h-[98%] bg-yellow-600"></div>
        <div style={{ backgroundImage: `url(${arrayImage[0]})` }}  className=" bg-cover bg-center w-[33%] h-[98%] bg-yellow-600"></div>

      </div>
    </div>
    </div>
    
  );
};

export default Trending;
