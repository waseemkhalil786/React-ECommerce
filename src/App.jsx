
import Navbar from "./components/navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Signup from "./pages/signup";
import SignIn from "./pages/login";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
       
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<SignIn />}/>
     
      </Routes>
      <Footer />
    </>
  );
}

export default App;
