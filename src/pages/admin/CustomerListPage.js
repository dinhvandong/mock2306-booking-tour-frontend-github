import React from "react";
import HeaderAdmin from "../../components/admin/HeaderAdmin";
import Footer from "../../components/Footer";
import CustomerList from "../../components/admin/CustomerList";

const CustomerListPage = () => {
  return (
    <div
      className=" h-full overflow-y-auto"
      style={{ width: "100%", display: "flex", flexDirection: "column" }}
    >
      <HeaderAdmin menu={"menu1"} title={"Customer"} sub={"List Customer"} />
      <CustomerList />
      <Footer />
    </div>
  );
};

export default CustomerListPage;
