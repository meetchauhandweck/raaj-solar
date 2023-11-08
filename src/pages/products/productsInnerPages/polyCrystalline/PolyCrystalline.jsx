import ProductInnerCards from "../../../../components/productInnerCards/ProductInnerCards";
import ProductInnerLogos from "../../../../components/productInnerLogos/ProductInnerLogos";
import ProductLinkCards from "../../../../components/productLinkCards/ProductLinkCards";
import ProductModule from "../../../../components/productModule/ProductModule";
import ProductsPageBanner from "../../../../components/productsPageBanner/ProductsPageBanner";
import ReachOut from "../../../../components/reachOut/ReachOut";
import Table from "../../../../components/table/Table";
import Warranty from "../../../../components/warranty/Warranty";
import bannerImage from "../../../../images/productImage1.png";
import moduleImage from "../../../../images/productImage2.png";

const productModuleData = {
  title: "OTHER PRODUCT MONO PERC PV MODULES",
  images: [
    {
      src: moduleImage,
      caption: "R325P",
      link: "/mono-perc",
    },
    {
      src: moduleImage,
      caption: "R330P",
      link: "/mono-perc",
    },
    {
      src: moduleImage,
      caption: "R335P",
      link: "/mono-perc",
    },
  ],
};

const PolyCrystalline = () => {
  return (
    <>
      <ProductsPageBanner
        image={bannerImage}
        heading={"POLY Crystalline"}
        text={
          "With the development of Technology Poly Modules efficiency has increased up to 18% , where we can make Modules up to 345 WP.Poly Modules are ideally used for Ground Mounted , Industrial ,Commercial , Residential , Water Pumping system &…"
        }
        link={"/"}
      />
      <Table />
      <ProductInnerCards />
      <Warranty />
      <ProductModule
        title={productModuleData.title}
        images={productModuleData.images}
      />
      <ProductLinkCards />
      <ProductInnerLogos />
      <ReachOut />
    </>
  );
};
export default PolyCrystalline;
