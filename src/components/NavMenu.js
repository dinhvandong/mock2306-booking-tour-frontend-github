import { Link } from "react-router-dom";
import { airplane } from "ionicons/icons";
import { home } from "ionicons/icons";
import { business } from "ionicons/icons";
import { car } from "ionicons/icons";
import { bus } from "ionicons/icons";
import { cog } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
const NavigationMenu = () => {
  return (
    <nav className="flex w-[60%] text-white font-medium mt-3">
      <ul className="flex space-x-4">
        <li>
          <Link to="/">
            {" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                flexDirection: "row",
              }}
            >
              <IonIcon icon={business} />
              <div style={{ marginLeft: "5px" }}>Stays</div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/about">
            {" "}
            <div
              style={{
                marginLeft: "20px",
                display: "flex",
                alignItems: "center",
                color: "white",
                flexDirection: "row",
              }}
            >
              <IonIcon icon={airplane} />
              <div style={{ marginLeft: "5px" }}>Flights</div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/services">
            {" "}
            <div
              style={{
                marginLeft: "20px",
                display: "flex",
                alignItems: "center",
                color: "white",
                flexDirection: "row",
              }}
            >
              <IonIcon icon={car} />
              <div style={{ marginLeft: "5px" }}>Flight+Hotel</div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            {" "}
            <div
              style={{
                marginLeft: "20px",
                display: "flex",
                alignItems: "center",
                color: "white",
                flexDirection: "row",
              }}
            >
              <IonIcon icon={home} />
              <div style={{ marginLeft: "5px" }}>Car Rentals</div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            {" "}
            <div
              style={{
                marginLeft: "20px",
                display: "flex",
                alignItems: "center",
                color: "white",
                flexDirection: "row",
              }}
            >
              <IonIcon icon={cog} />
              <div style={{ marginLeft: "5px" }}>Attractions</div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            {" "}
            <div
              style={{
                marginLeft: "20px",
                display: "flex",
                alignItems: "center",
                color: "white",
                flexDirection: "row",
              }}
            >
              <IonIcon icon={bus} />
              <div style={{ marginLeft: "5px" }}>Airport Taxis</div>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
