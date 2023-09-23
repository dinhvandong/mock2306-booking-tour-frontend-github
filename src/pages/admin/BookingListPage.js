import React from 'react'
import HeaderAdmin from '../../components/admin/HeaderAdmin'
import CustomerList from '../../components/admin/CustomerList'
import Footer from '../../components/Footer'
import BookingList from '../../components/admin/BookingList'

const BookingListPage = () => {
  return (
<div
      className=" h-full overflow-y-auto"
      style={{ width: "100%", display: "flex", flexDirection: "column" }}
    >
      <HeaderAdmin menu={"menu2"} title={"Booking"} sub={"List Booking"} />
      <BookingList />
      <Footer />
    </div>  )
}

export default BookingListPage