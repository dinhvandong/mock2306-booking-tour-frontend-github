import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CarRental from './pages/CarRental';
import Stays from './pages/Stays';
import Taxi from './pages/Taxi';
import Hotel from './pages/Hotel';
import Fights from './pages/Fights';
import Attractions from './pages/Attractions';
import Login from './pages/Login';
import Dashboard from './pages/admin/Dashboard';
import CustomerListPage from './pages/admin/CustomerListPage';
import BookingListPage from './pages/admin/BookingListPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/car-rental" element={<CarRental />} /> 
      <Route path="/home" element={<Home />} /> 
      <Route path="/attraction" element={<Attractions />} /> 
      <Route path="/fight" element={<Fights />} /> 
      <Route path="/hotel" element={<Hotel />} /> 
      <Route path="/taxi" element={<Taxi />} /> 
      <Route path="/stay" element={<Stays />} /> 
      <Route path="/" element={<Home />} /> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/admin/dashboard" element={<Dashboard />} /> 
      <Route path="/admin/customer" element={<CustomerListPage />} /> 
      <Route path="/admin/booking" element={<BookingListPage />} /> 
      <Route path="/admin/taxi" element={<Dashboard />} /> 
      <Route path="/admin/report" element={<Dashboard />} /> 
      <Route path="/admin/service" element={<Dashboard />} /> 
      <Route path="/admin" element={<CustomerListPage />} /> 

    </Routes>
    </BrowserRouter>
  );
}

export default App;
