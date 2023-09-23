import { Link } from "react-router-dom";
import { airplane } from "ionicons/icons";
import { home } from "ionicons/icons";
import { business } from "ionicons/icons";
import { car } from "ionicons/icons";
import { bus } from "ionicons/icons";
import { cog } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
const NavAdmin = ({menu}) => {
  return (
    <nav className="flex w-[60%]  mt-3">
      <ul className="flex space-x-4">
        <li className=  {menu==='menu1'?" text-orange-600 font-bold border-2 p-2 rounded-xl":"text-white font-light"}>
          <Link to="/admin/customer">
            {" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <IonIcon icon={business} />
              <div style={{ marginLeft: "5px" }}>Customers</div>
            </div>
          </Link>
        </li>
        <li className=  {menu==='menu2'?" text-orange-600 font-bold border-2 p-2 rounded-xl":"text-white font-light"}>
          <Link to="/admin/booking">
            {" "}
            <div
              style={{
                marginLeft: "20px",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <IonIcon icon={airplane} />
              <div style={{ marginLeft: "5px" }}>Bookings</div>
            </div>
          </Link>
        </li>
        <li className=  {menu==='menu3'?" text-orange-600 font-bold border-2 p-2 rounded-xl ":"text-white font-light"}>
          <Link to="/admin/booking">
            {" "}
            <div
              style={{
                marginLeft: "20px",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <IonIcon icon={car} />
              <div style={{ marginLeft: "5px" }}>Services</div>
            </div>
          </Link>
        </li>
        <li className=  {menu==='menu4'?" text-orange-600 font-bold border-2 p-2 rounded-xl":"text-white font-light"}>
          <Link to="/admin/taxi">
            {" "}
            <div
              style={{
                marginLeft: "20px",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <IonIcon icon={home} />
              <div style={{ marginLeft: "5px" }}>Report</div>
            </div>
          </Link>
        </li>
        <li className=  {menu==='menu5'?" text-orange-600 font-bold border-2 p-2 rounded-xl":"text-white font-light"}>
          <Link to="/admin/report">
            {" "}
            <div
              style={{
                marginLeft: "20px",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <IonIcon icon={cog} />
              <div style={{ marginLeft: "5px" }}>Blogs</div>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavAdmin;
