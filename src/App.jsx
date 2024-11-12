import { Route, Routes } from "react-router-dom";
import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Signup from "./pages/sigup";

function App() {
  
  return(
  <> 
  <Navbar/>
  <HeroSection/>
  <Routes>
    <Route path="/" index element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/signup" element={<Signup/>}/>
  </Routes>
  </>
  )
}

export default App;
