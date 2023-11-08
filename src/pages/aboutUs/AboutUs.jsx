import AboutExperience from "../../components/aboutExperience/AboutExperience";
import AboutUsBanner from "../../components/aboutUsBanner/AboutUsBanner";
import AboutUsCard from "../../components/aboutUsCard/Aboutuscard";
import OurCommitment from "../../components/commitment/Commitment";
import ImageWithForm from "../../components/imageWithForm/ImageWithForm";
import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
// import NewTimeLine from "../../components/newTimeline/NewTimeline";
import TimelineComponent from "../../components/timeline/Timeline";
import aboutInnerFormImage from "../../images/aboutInnerImage.png";
import bannerImage from "../../images/aboutUsBanner.png";

const AboutUs = () => {
  return (
    <>
      {/* <AboutUsBanner /> */}
      <InnerPageBanner heading={"About us"} image={bannerImage} />
      <AboutExperience />
      <AboutUsCard />
      <TimelineComponent />
      {/* <NewTimeLine /> */}
      <OurCommitment />
      <ImageWithForm image={aboutInnerFormImage} />
    </>
  );
};

export default AboutUs;
