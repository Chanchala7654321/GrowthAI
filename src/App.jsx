import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
// import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Referral from "./pages/Referral";
import MarketTrends from "./pages/MarketTrends";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Home /> */}
      {/* <Pricing /> */}
      {/* <Referral /> */}
      {/* <MarketTrends /> */}
      {/* <Contact /> */}
      <Login />
      <Register />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/referral" element={<Referral />} />
        <Route path="/market-trends" element={<Trends />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;