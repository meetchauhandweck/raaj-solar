import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Company from "./pages/company/Company";
import Products from "./pages/products/Products";
import Experience from "./pages/experience/Experience";
import Center from "./pages/center/Center";
import Blog from "./pages/blog/Blog";
import ContactUs from "./pages/contactUs/ContactUs";
import Layout from "./components/layout/Layout";
import AboutUs from "./pages/aboutUs/AboutUs";
import Management from "./pages/management/Management";
import { useEffect, useRef } from "react";
// import LocomotiveScroll from "locomotive-scroll";
import PolyCrystalline from "./pages/products/productsInnerPages/polyCrystalline/PolyCrystalline";
import MonoPerc from "./pages/products/productsInnerPages/monoPerc/MonoPerc";
import MonoBiFacial from "./pages/products/productsInnerPages/monoBiFacial/MonoBiFacial";

function App() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/products" element={<Products />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/center" element={<Center />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/management" element={<Management />} />
        <Route path="/poly-crystalline" element={<PolyCrystalline />} />
        <Route path="/mono-perc" element={<MonoPerc />} />
        <Route path="/mono-bi-facial" element={<MonoBiFacial />} />
      </Routes>
    </Layout>
  );
}

export default App;
