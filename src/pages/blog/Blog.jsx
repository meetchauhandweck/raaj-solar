import BlogCards from "../../components/blogCards/BlogCards";
import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
import PageTitle from "../../components/pageTitle/PageTitle";
import bannerImage from "../../images/blogBannerImage.png";

const Blog = () => {
  return (
    <>
    <PageTitle pageTitle={"Raaj Solar - Blogs"} />
      <InnerPageBanner heading={"Blogs"} image={bannerImage} />
      <BlogCards />
    </>
  );
};
export default Blog;
