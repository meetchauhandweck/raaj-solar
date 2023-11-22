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
import { useEffect } from "react";
// import LocomotiveScroll from "locomotive-scroll";
import PolyCrystalline from "./pages/products/productsInnerPages/polyCrystalline/PolyCrystalline";
import MonoPerc from "./pages/products/productsInnerPages/monoPerc/MonoPerc";
import MonoBiFacial from "./pages/products/productsInnerPages/monoBiFacial/MonoBiFacial";
// import BlogSingleItem from "./components/blogSingleItem/BlogSingleItem";
import BlogSingle from "./pages/blog/blogSingle/BlogSingle";

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
        <Route exact path="/raaj-solar" element={<Home />} />
        <Route path="/raaj-solar/company" element={<Company />} />
        <Route path="/raaj-solar/products" element={<Products />} />
        <Route path="/raaj-solar/experience" element={<Experience />} />
        <Route path="/raaj-solar/center" element={<Center />} />
        <Route path="/raaj-solar/blog" element={<Blog />} />
        <Route path="/raaj-solar/blog/:name" element={<BlogSingle />} />
        <Route path="/raaj-solar/contact-us" element={<ContactUs />} />
        <Route path="/raaj-solar/about-us" element={<AboutUs />} />
        <Route path="/raaj-solar/management" element={<Management />} />
        <Route
          path="/raaj-solar/poly-crystalline"
          element={<PolyCrystalline />}
        />
        <Route path="/raaj-solar/mono-perc" element={<MonoPerc />} />
        <Route path="/raaj-solar/mono-bi-facial" element={<MonoBiFacial />} />
      </Routes>
    </Layout>
  );
}

export default App;
