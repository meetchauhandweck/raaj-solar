import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
import bannerImage from "../../images/contactBanner.png";
import arrow from "../../images/submitArrow.svg";
import PageTitle from "../../components/pageTitle/PageTitle";
import formImage from "../../images/careerFormImg.png"

// const Career = () => {
//   const initialValues = {
//     name: "",
//     email: "",
//     phone: "",
//     file: null,
//     message: "",
//   };

//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required("Name is required"),
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Email is required"),
//     phone: Yup.string().required("Phone number is required"),
//     file: Yup.mixed().required("File is required"),
//     message: Yup.string().required("Message is required"),
//   });

//   const handleSubmit = async (values, { setSubmitting }) => {
//     try {
//       const formData = new FormData();
//       formData.append("name", values.name);
//       formData.append("email", values.email);
//       formData.append("phone", values.phone);
//       formData.append("file", values.file);
//       formData.append("message", values.message);

//       const response = await fetch("http://localhost:8000/sendmail", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         alert("Email sent successfully!");
//       } else {
//         alert("Failed to send email.");
//       }
//     } catch (error) {
//       console.error("Error sending email:", error);
//       alert("An error occurred while sending email.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const {
//     values,
//     errors,
//     touched,
//     handleChange,
//     handleSubmit: submitForm,
//   } = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit: handleSubmit,
//   });

//   return (
//     <>
//       <PageTitle
//         pageTitle={"Ahmedabad - Solar Panel Manufacturing Company | Raaj Solar"}
//       />
//       <div className="career">
//         <InnerPageBanner heading={"Career"} image={bannerImage} />
//         <div className="contactUsForm">
//           <div className="form-section">
//             <form onSubmit={submitForm}>
//               <h2 className="contactformtitle">How To Reach US</h2>
//               <div className="contactFormField">
//                 <input
//                   name="name"
//                   type="text"
//                   placeholder="Name"
//                   onChange={handleChange}
//                   value={values.name}
//                 />
//                 {errors.name && touched.name && (
//                   <div className="error">{errors.name}</div>
//                 )}
//               </div>
//               <div>
//                 <input
//                   name="email"
//                   type="email"
//                   placeholder="Email"
//                   onChange={handleChange}
//                   value={values.email}
//                 />
//                 {errors.email && touched.email && (
//                   <div className="error">{errors.email}</div>
//                 )}
//               </div>
//               <div>
//                 <input
//                   name="phone"
//                   type="phone"
//                   placeholder="Phone"
//                   onChange={handleChange}
//                   value={values.phone}
//                 />
//                 {errors.phone && touched.phone && (
//                   <div className="error">{errors.phone}</div>
//                 )}
//               </div>
//               <div className="fileField">
//                 <input
//                   name="file"
//                   type="file"
//                   onChange={(event) => {
//                     handleChange(event);
//                     values.file = event.currentTarget.files[0];
//                   }}
//                 />
//                 {errors.file && touched.file && (
//                   <div className="error">{errors.file}</div>
//                 )}
//               </div>
//               <div>
//                 <input
//                   name="message"
//                   type="text"
//                   placeholder="Message"
//                   onChange={handleChange}
//                   value={values.message}
//                 />
//                 {errors.message && touched.message && (
//                   <div className="error">{errors.message}</div>
//                 )}
//               </div>
//               {/* Other fields */}
//               <button type="submit">
//                 Send Message <img src={arrow} alt="submitArrow" />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Career;

import { Formik, Form, Field, ErrorMessage } from "formik";
import "./career.scss"

const Career = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    name: Yup.string().required("Name is required"),
    phone: Yup.number().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
    image: Yup.mixed().required("File is required"),
  });

  return (
    <>
      <PageTitle
        pageTitle={"Ahmedabad - Solar Panel Manufacturing Company | Raaj Solar"}
      />
      <div className="career">
        <InnerPageBanner heading={"Career"} image={bannerImage} />
        <div className="careerForm">
        <div className="contactUsForm">
          <div className="form-section">
            <h2 className="contactformtitle">How To Reach US</h2>

            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                image: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                  const formData = new FormData();
                  formData.append("name", values.name);
                  formData.append("email", values.email);
                  formData.append("phone", values.phone);
                  formData.append("image", values.image);
                  formData.append("message", values.message);
                  console.log("Form Data",formData);
                  const response = await fetch(
                    "http://localhost:8000/sendmail",
                    {
                      method: "POST",
                      body: formData,
                    }
                  );

                  console.log(formData);
                  console.log("response", response);
                  // if (response.ok) {
                  //   alert("Email sent successfully!");
                  // } else {
                  //   alert("Failed to send email.");
                  // }
                } finally {
                  // catch (error) {
                  //   console.error("Error sending email:", error);
                  //   alert("An error occurred while sending email.");
                  // }
                  setSubmitting(false);
                  resetForm();
                  document.getElementById("formFile").value = "";
                }
              }}
            >
              {({ isSubmitting, setFieldValue }) => (
                <Form>
                  <div className="contactFormField">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="contactFormField">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="subject"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="contactFormField">
                    <Field
                      type="number"
                      name="phone"
                      placeholder="Phone"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="contactFormField">
                    <input
                      type="file"
                      name="image"
                      onChange={(event) => {
                        setFieldValue("image", event.currentTarget.files[0]);
                      }}
                      className=""
                      id="formFile"
                    />
                    <ErrorMessage
                      name="image"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="contactFormField">
                    <Field
                      type="text"
                      name="message"
                      placeholder="Message"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-block btn-danger"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                    <img src={arrow} alt="submitArrow" />
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="image">
          <img src={formImage} alt="careerFormImage" />
        </div>
        </div>
      </div>
    </>
  );
};

export default Career;
