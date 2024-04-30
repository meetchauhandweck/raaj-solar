// import { useFormik } from "formik";
// import "./form.scss";
// import Select from "react-select";
// import { FormSchemas } from "../../schemas";
// import { useState } from "react";
// const Form = () => {
//   const [resetSelect, setResetSelect] = useState(null);
//   const initialValue = {
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     // contactSelect: "",
//   };
//   const options = [
//     { value: "business inquiry", label: "Business Inquiry" },
//     { value: "feedback", label: "Feedback" },
//     { value: "other", label: "Other" },
//   ];
//   // const baseUrl = "http://localhost:8000";
//   const { values, errors, touched, handleChange, handleSubmit } = useFormik({
//     initialValues: initialValue,
//     // validationSchema: FormSchemas,
//     onSubmit: (value, action) => {
//       console.log("value", value);
//       setResetSelect(null);
//       const sendEmail = async () => {
//         const formData = new FormData();
//         formData.append("contactName", values.name);
//         formData.append("contactEmail", values.email);
//         formData.append("contactPhone", values.phone);
//         // formData.append("select", value.select);
//         formData.append("contactMessage", values.message);
//         console.log(formData);

//         const res = await fetch(`http://localhost:8000/sendSecondMail`, {
//           method: "POST",
//           body: formData,
//         });
//         console.log("formData: " + formData);
//         console.log("responsive", res);
//       };
//       sendEmail();
//       action.resetForm();
//     },
//   });
//   console.log(values);
//   return (
//     <div className="contact_form">
//       <div className="contact_form_wrapper">
//         <h2 style={{ color: "#0D4292" }}>HOW TO REACH US</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form_wrapper">
//             <div className="field">
//               {/* <label htmlFor="fullName">Name</label> */}
//               <input
//                 type="name"
//                 name="name"
//                 onChange={handleChange}
//                 value={values.fullName}
//                 placeholder="Full Name"
//               />
//               {touched.fullName && errors.fullName && (
//                 <p className="error">{errors.fullName}</p>
//               )}
//             </div>
//             <div className="field">
//               {/* <label htmlFor="email">Email</label> */}
//               <input
//                 type="email"
//                 name="email"
//                 onChange={handleChange}
//                 value={values.email}
//                 placeholder="Email"
//               />
//               {touched.email && errors.email && (
//                 <p className="error">{errors.email}</p>
//               )}
//             </div>
//             <div className="field">
//               {/* <label htmlFor="phone">Phone</label> */}
//               <input
//                 type="text"
//                 name="phone"
//                 onChange={handleChange}
//                 value={values.phone}
//                 placeholder="Phone Number"
//               />
//               {touched.phone && errors.phone && (
//                 <p className="error">{errors.phone}</p>
//               )}
//             </div>
//             <div className="field">
//               <Select
//                 options={options}
//                 values={resetSelect}
//                 onChange={(option) => {
//                   let event = {
//                     target: {
//                       name: "contactSelect",
//                       label: option.label,
//                       value: option.label,
//                     },
//                   };
//                   setResetSelect(event.target);
//                   handleChange(event);
//                 }}
//                 theme={(theme) => ({
//                   ...theme,
//                   borderRadius: 0,
//                   colors: {
//                     ...theme.colors,
//                     primary25: "#d1d1d1",
//                     primary: "#d1d1d1",
//                   },
//                 })}
//               />
//             </div>
//             {errors.color && (
//               <div className="input-feedback">{errors.color}</div>
//             )}

//             <div className="field">
//               <input
//                 type="text"
//                 name="message"
//                 onChange={handleChange}
//                 value={values.message}
//                 placeholder="Message"
//                 // style={{ paddingTop: "70px" }}
//                 className="message_field"
//               />
//               {touched.message && errors.message && (
//                 <p className="error">{errors.message}</p>
//               )}
//             </div>
//           </div>
//           <div className="common_button_outer2">
//             <button type="submit" className="submit_btn">
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default Form;

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";

const ContactForm = () => {
  const [resetSelect, setResetSelect] = useState(null);
  const [fieldValue, setFieldValue] = useState(null);
  // const validationSchema = Yup.object().shape({
  //   email: Yup.string()
  //     .email("Invalid email address")
  //     .required("Email is required"),
  //   name: Yup.string().required("Name is required"),
  //   phone: Yup.number().required("Phone number is required"),
  //   message: Yup.string().required("Message is required"),
  //   image: Yup.mixed().required("File is required"),
  // });
  const options = [
    { value: "business inquiry", label: "Business Inquiry" },
    { value: "feedback", label: "Feedback" },
    { value: "other", label: "Other" },
  ];
  const handleSelectChange = (selectedOption) => {
    setResetSelect(selectedOption);
    setFieldValue("select", selectedOption.value); // Update the formik field value
  };

  return (
    <>
      <div className="form-section">
        <h2 className="contactformtitle">How To Reach US</h2>

        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            message: "",
          }}
          // validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              const formData = new FormData();
              formData.append("name", values.name);
              formData.append("email", values.email);
              formData.append("phone", values.phone);
              // formData.append("select", values.select);
              formData.append("message", values.message);

              const response = await fetch(
                "http://localhost:8000/sendSecondMail",
                {
                  method: "POST",
                  body: formData,
                }
              );
              console.log(formData);
              console.log(values);
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
            }
          }}
        >
          {({ isSubmitting }) => (
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
                  name="email"
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
                {/* <Select
                  options={options}
                  values={resetSelect}
                  onChange={(option) => {
                    let event = {
                      target: {
                        name: "select",
                        label: option.label,
                        value: option.label,
                      },
                    };
                    setResetSelect(event.target);
                    // handleChange(event);
                  }}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: "#d1d1d1",
                      primary: "#d1d1d1",
                    },
                  })}
                /> */}
                {/* <Field name="select">
                  {({ field }) => (
                    <Select
                      {...field}
                      options={options}
                      value={resetSelect}
                      onChange={handleSelectChange}
                      theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                          ...theme.colors,
                          primary25: "#d1d1d1",
                          primary: "#d1d1d1",
                        },
                      })}
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="select"
                  component="div"
                  className="text-danger"
                /> */}
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
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ContactForm;
