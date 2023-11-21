import ReachOut from "../../../../components/reachOut/ReachOut";
import ProductsPageBanner from "../../../../components/productsPageBanner/ProductsPageBanner";
import bannerImage from "../../../../images/productImage4.png";
import Table from "../../../../components/table/Table";
import ProductInnerCards from "../../../../components/productInnerCards/ProductInnerCards";
import Warranty from "../../../../components/warranty/Warranty";
import ProductInnerLogos from "../../../../components/productInnerLogos/ProductInnerLogos";
import ProductLinkCards from "../../../../components/productLinkCards/ProductLinkCards";
import moduleImage from "../../../../images/productImage1.png";
import ProductModule from "../../../../components/productModule/ProductModule";
import Table2 from "../../../../components/table2/Table2";
import file from "../../../../files/product-bi-facial.pdf";

const productModuleData = {
  title: "OTHER PRODUCT Poly Crystalline PV MODULES",
  images: [
    {
      src: moduleImage,
      caption: "R325P",
      link: "/poly-crystalline",
    },
    {
      src: moduleImage,
      caption: "R330P",
      link: "/poly-crystalline",
    },
    {
      src: moduleImage,
      caption: "R335P",
      link: "/poly-crystalline",
    },
  ],
};

const MonoBiFacial = () => {
  return (
    <>
      <ProductsPageBanner
        image={bannerImage}
        heading={"MONO BI-Facial"}
        text={
          "Assembled with MBB PERC cells, the half-cell configuration of the modules offers the advantages of higher power output, better temperature-dependent performance, reduced shading effect on the energy generation, lower risk of hot spot, as well as enhanced tolerance for mechanical…"
        }
        link={file}
      />
      <Table />
      <Table2 />
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
export default MonoBiFacial;
