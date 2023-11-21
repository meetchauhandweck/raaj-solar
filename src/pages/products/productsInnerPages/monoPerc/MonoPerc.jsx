import ProductInnerCards from "../../../../components/productInnerCards/ProductInnerCards";
import ProductInnerLogos from "../../../../components/productInnerLogos/ProductInnerLogos";
import ProductLinkCards from "../../../../components/productLinkCards/ProductLinkCards";
import ProductModule from "../../../../components/productModule/ProductModule";
import ProductsPageBanner from "../../../../components/productsPageBanner/ProductsPageBanner";
import ReachOut from "../../../../components/reachOut/ReachOut";
import Table from "../../../../components/table/Table";
import Warranty from "../../../../components/warranty/Warranty";
import bannerImage from "../../../../images/productImage2.png";
import moduleImage from "../../../../images/productImage4.png";
import file from "../../../../files/product-mono.pdf"

const productModuleData = {
  title: "OTHER PRODUCT Mono Bi Facial PV MODULES",
  images: [
    {
      src: moduleImage,
      caption: "R540M",
      link: "/mono-bi-facial",
    },
    {
      src: moduleImage,
      caption: "R545M",
      link: "/mono-bi-facial",
    },
    {
      src: moduleImage,
      caption: "R550M",
      link: "/mono-bi-facial",
    },
  ],
};

const MonoPerc = () => {
  return (
    <>
      <ProductsPageBanner
        image={bannerImage}
        heading={"MONO PERC"}
        text={
          "Assembled with MBB PERC cells, the half-cell configuration of the modules offers the advantages of higher power output, better temperature-dependent performance, reduced shading effect on the energy generation, lower risk of hot spot, as well as enhanced tolerance for mechanical…"
        }
        link={file}
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
export default MonoPerc;
