import BlogCards from "../../components/blogCards/BlogCards";
import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
import bannerImage from "../../images/blogBannerImage.png";

const Blog = () => {
  return (
    <>
      <InnerPageBanner heading={"Blogs"} image={bannerImage} />
      <BlogCards />
    </>
  );
};
export default Blog;
