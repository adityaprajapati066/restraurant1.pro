import { BrowserRouter,Route,Routes } from "react-router-dom"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact"
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Order from "./components/Order";
import MyOrders from "./pages/MyOrders";
import AboutDetails from "./components/AboutDetails";
import AdminContect from "./pages/AdminContect";
import Cart from "./components/Cart";
import Register from "./components/Register";
import Login from "./components/Login";


function App() {
 

  return (
    <>
       <BrowserRouter>
      <Navbar />

      <Routes>  
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/orders" element={<MyOrders/>}/>
        <Route path="/about-details" element={<AboutDetails/>}/>
        <Route path="/admin/contacts" element={<AdminContect/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
       
      </Routes>

      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
