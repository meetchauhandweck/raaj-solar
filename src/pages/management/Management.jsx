import FourCards from "../../components/foutCards/FourCards";
import ImageWithForm from "../../components/imageWithForm/ImageWithForm";
import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
import MeetOurDirector from "../../components/meetOurDirector/MeetOurDirector";
import OurTeam from "../../components/ourTeam/OurTeam";
import image from "../../images/management_banner.png";
import formBannerImage from "../../images/managementFormImage.png";

const Management = () => {
  return (
    <>
      <InnerPageBanner image={image} heading={"Management"} />
      <MeetOurDirector />
      <OurTeam />
      <FourCards />
      <ImageWithForm image={formBannerImage} />
    </>
  );
};

export default Management;
