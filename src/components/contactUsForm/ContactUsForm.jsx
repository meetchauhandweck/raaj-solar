import { Formik, Form, Field } from "formik";
import "./contactUsForm.scss";
import { ContactSchema } from "../../schemas";
import arrow from "../../images/submitArrow.svg";

function ContactUsForm() {
  return (
    <div className="contactUsForm">
      <div className="contact-container">
        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5245785603574!2d72.54985357418265!3d23.041222015634084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8462fff0ff31%3A0x89da65f3475f0be8!2sRaajratna%20Ventures%20Ltd.!5e0!3m2!1sen!2sin!4v1698835371896!5m2!1sen!2sin"
            title="Location Map"
            className="mapframe"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="form-section">
          <Formik
            initialValues={{
              name: "",
              email: "",
              phoneNumber: "",
              subject: "",
              message: "",
            }}
            validationSchema={ContactSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <h2 className="contactformtitle">How To Reach US</h2>
                <div className="contactFormField">
                  <Field name="name" type="text" placeholder="Name" />
                  {errors.name && touched.name ? (
                    <div className="error">{errors.name}</div>
                  ) : null}
                </div>
                <div className="contactFormField">
                  <Field name="email" type="email" placeholder="Email" />
                  {errors.email && touched.email ? (
                    <div className="error">{errors.email}</div>
                  ) : null}
                </div>
                <div className="contactFormField">
                  <Field
                    name="phoneNumber"
                    type="tel"
                    placeholder="Phone Number"
                  />
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <div className="error">{errors.phoneNumber}</div>
                  ) : null}
                </div>
                <div className="contactFormField">
                  <Field
                    name="subject"
                    type="text"
                    placeholder="Subject: I Would Like to Discuss"
                  />
                  {errors.subject && touched.subject ? (
                    <div className="error">{errors.subject}</div>
                  ) : null}
                </div>
                <div className="contactFormField">
                  <Field as="textarea" name="message" placeholder="Message" />
                  {/* {errors.message && touched.message ? (
                    <div className="error">{errors.message}</div>
                  ) : null} */}
                </div>
                <button type="submit">
                  Send Message <img src={arrow} alt="submitArrow" />
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default ContactUsForm;
