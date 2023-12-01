import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
import LeftRightImageContent from "../../components/leftRightImageContent/LeftRightImageContent";
import ProductForm from "../../components/productForm/ProductForm";
import bannerImage from "../../images/productBanner.png";

const Products = () => {
  return (
    <>
      <InnerPageBanner
        subHeading={"INDIA'S MOST RELIABLE SOLAR PANELS MANUFACTURING COMPANY"}
        image={bannerImage}
      />
      <LeftRightImageContent />
      <ProductForm />
    </>
  );
};
export default Products;
