import React from 'react'
import Header from './Components/Header/Header'
import Footer from "./Components/Footer/Footer"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import SuprisePlannerHome from './Components/SuprisePlannerHome/SuprisePlannerHome'
import SuprisePInnerPage from './Components/SuprisePInnerPage/SuprisePInnerPage'
import BookingConfirmation from './Components/Bookingconfirm/BookingConfirmation'
import BookingForm from './Components/Booking/BookingForm'
import PaymentPage from './Components/PaymentPage/PaymentPage'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<SuprisePlannerHome/>}/>
      <Route path="/product-details" element={<SuprisePInnerPage/>}/>
      <Route path="/booking" element={<BookingForm/>} />
      <Route path="/confirmation" element={<BookingConfirmation/>} />
      <Route path="/payment" element={<PaymentPage/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App