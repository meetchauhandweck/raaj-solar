import ContactUsForm from "../../components/contactUsForm/ContactUsForm";
import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
import bannerImage from "../../images/contactBanner.png";

const ContactUs = () => {
  return (
    <>
      <InnerPageBanner heading={"CONTACT US"} image={bannerImage} />
      <ContactUsForm />
    </>
  );
};
export default ContactUs;
