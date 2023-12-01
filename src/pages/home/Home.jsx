import Form from "../../components/form/Form";
import FourCards from "../../components/foutCards/FourCards";
import HeroBanner from "../../components/heroBanner/HeroBanner";
import HomePageVerticalSlider from "../../components/homePageVerticalSlider/HomePageVerticalSlider";
import LogoSlider from "../../components/logoSlider/LogoSlider";
import Map from "../../components/map/Map";
import ProductSlider from "../../components/productSlider/productSlider";
import SliderSection from "../../components/slider/Slider";
import Testimonials from "../../components/testimonials/Testimonials";
import Text from "../../components/text/Text";
import TextWithIcon from "../../components/textWithIcon/TextWithIcon";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Text
        text={"The Reliable Solar PV Module Manufacturing Company in India"}
        smallText={
          "“RAAJ” is a reliable MBB – Solar PV Module Manufacturer in India that specialises in Manufacturing MONO PERC Half Cut Cell (Bi-Facial / Mono Facial ) & Poly-crystalline solar panels and is headquartered in Ahmedabad , Gujarat . “RAAJ” has a fully automated state-of-the-art manufacturing line with a capacity of 300 MW and is expanding its manufacturing facility up to 500 MW by 2025 in TOP - CORN (N-Type) & HJT(Hytrojunction Technology)."
        }
      />
      <ProductSlider />
      <TextWithIcon />
      <LogoSlider />
      <HomePageVerticalSlider />
      <FourCards />
      {/* <Testimonials /> */}
      <SliderSection />
      <Map />
      <Form />
    </>
  );
};
export default Home;
