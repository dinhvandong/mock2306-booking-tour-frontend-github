import React from "react";
import { airplane } from "ionicons/icons";
import { home } from "ionicons/icons";
import { business  } from "ionicons/icons";
import { car } from "ionicons/icons";
import { bus } from "ionicons/icons";
import { cog } from "ionicons/icons";

import { IonIcon } from "@ionic/react";

const Header2 = () => {
  return (
    <div
      style={{
        height: "60px",
        alignItems: "center",
        width: "60%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div style={{ display: "flex", alignItems:'center', color: "white", flexDirection: "row" }}>
        <IonIcon icon={business} />
        <div style={{ marginLeft:'5px' }}>Stays</div>
      </div>
      <div style={{ marginLeft:'20px', display: "flex",alignItems:'center', color: "white", flexDirection: "row" }}>
        <IonIcon icon={airplane} />
        <div style={{ marginLeft:'5px' }}>Flights</div>
      </div>
      <div style={{marginLeft:'20px', display: "flex",alignItems:'center', color: "white", flexDirection: "row" }}>
        <IonIcon icon={car} />
        <div style={{ marginLeft:'5px' }}>Flight+Hotel</div>
      </div>

      <div style={{marginLeft:'20px', display: "flex",alignItems:'center', color: "white", flexDirection: "row" }}>
        <IonIcon icon={home} />
        <div style={{ marginLeft:'5px' }}>Car Rentals</div>
      </div>

      <div style={{marginLeft:'20px', display: "flex", alignItems:'center',color: "white", flexDirection: "row" }}>
        <IonIcon icon={cog} />
        <div style={{ marginLeft:'5px' }}>Attractions</div>
      </div>
      <div style={{marginLeft:'20px', display: "flex", alignItems:'center', color: "white", flexDirection: "row" }}>
        <IonIcon icon={bus} />
        <div style={{ marginLeft:'5px' }}>Airport Taxis</div>
      </div>
    </div>
  );
};

export default Header2;
