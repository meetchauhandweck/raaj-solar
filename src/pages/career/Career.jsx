import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
import bannerImage from "../../images/contactBanner.png";
import { useFormik } from "formik";
import { ContactSchema } from "../../schemas";
import arrow from "../../images/submitArrow.svg";
import "../../components/contactUsForm/contactUsForm.scss";
import "./career.scss";
import { useState } from "react";
import PageTitle from "../../components/pageTitle/PageTitle";

const Career = () => {
  const initialValue = {
    name: "",
    email: "",
    phone: "",
    message: "",
    file: "",
  };

  const baseUrl = "http://localhost:8000";

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: ContactSchema,
    onSubmit: (value, action) => {
      action.resetForm();
      console.log("value", value);

      const sendEmail = async () => {
        const res = await fetch(`${baseUrl}/email/sendEmail`, {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }).then((res) => {
          console.log(res);
          if (res.status > 199 && res.status < 300) {
            alert("Send Successfully !");
          }
        });
      };
      sendEmail();
    },
  });

  return (
    <>
      <PageTitle pageTitle={"Ahmedabad - Solar Panel Manufacturing Company | Raaj Solar"} />
      <div className="career">
        <InnerPageBanner heading={"Career"} image={bannerImage} />
        <div className="contactUsForm">
          <div className="form-section">
            <form onSubmit={handleSubmit}>
              <h2 className="contactformtitle">How To Reach US</h2>
              <div className="contactFormField">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                  value={values.name}
                />
                {errors.name && touched.name ? (
                <div className="error">{errors.name}</div>
              ) : null}
              </div>
              <div className="contactFormField">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={values.email}
                  required
                />
                {errors.Mail && touched.Mail ? (
                <div className="error">{errors.Mail}</div>
              ) : null}
              </div>
              <div className="contactFormField">
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  value={values.phone}
                />
                {errors.phone && touched.phone ? (
                <div className="error">{errors.phone}</div>
              ) : null}
              </div>
              {/* <div className="contactFormField">
                  <Field
                    name="subject"
                    type="text"
                    placeholder="Subject: I Would Like to Discuss"
                  />
                  {errors.subject && touched.subject ? (
                    <div className="error">{errors.subject}</div>
                  ) : null}
                </div> */}
              <div className="fileField">
                <input
                  name="file"
                  type="file"
                  placeholder="Message"
                  onChange={handleChange}
                  value={values.file}
                />
                {/* {errors.file && touched.file ? (
                <div className="error">{errors.file}</div>
              ) : null} */}
              </div>
              <div className="contactFormField">
                <input
                  type="textarea"
                  name="messages"
                  placeholder="Message"
                  onChange={handleChange}
                  value={values.message}
                />
                {/* {errors.message && touched.message ? (
                    <div className="error">{errors.message}</div>
                  ) : null} */}
              </div>
              <button type="submit">
                Send Message <img src={arrow} alt="submitArrow" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Career;
