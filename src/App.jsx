import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import Home from "./pages/Home";
import Films from "./pages/Films";
import Photos from "./pages/Photos";
import ScrollToHash from "./components/ScrollToHash";
import ExtendedBrands from "./pages/ExtendedBrands";
import Services from "./pages/Services";
// import TestimonialsPage from "./pages/TestimonialsPage";
import Contact from "./pages/Contact";


export default function App() {
  return (
    <BrowserRouter>
    <ScrollToHash />
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/films" element={<Films />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/brands" element={<ExtendedBrands />} />
        <Route path="/services" element={<Services />} />
         {/* <Route path="/testimonials" element={<TestimonialsPage />} />
        
          */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}