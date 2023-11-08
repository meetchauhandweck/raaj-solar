import { useFormik } from "formik";
import "./productFormItem.scss";
import Select from "react-select";
import { ProductFormSchemas } from "../../schemas";
const ProductFormItem = () => {
  const initialValue = {
    fullName: "",
    email: "",
    phone: "",
    message: "",
    checkbox: false,
  };
  const options = [
    { value: "business inquiry", label: "Business Inquiry" },
    { value: "feedback", label: "Feedback" },
    { value: "other", label: "Other" },
  ];
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: ProductFormSchemas,
    onSubmit: (value, action) => {
      action.resetForm();
      console.log("value", value);
    },
  });
  console.log(values);
  return (
    <div className="product_form">
      <div className="product_form_wrapper">
        <h1 style={{ color: "#0D4292" }}>HOW TO REACH US</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            {/* <label htmlFor="fullName">Name</label> */}
            <input
              type="name"
              name="fullName"
              onChange={handleChange}
              value={values.fullName}
              placeholder="Full Name :"
            />
            {touched.fullName && errors.fullName && (
              <p className="error">{errors.fullName}</p>
            )}
          </div>
          <div className="field">
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              placeholder="Email :"
            />
            {touched.email && errors.email && (
              <p className="error">{errors.email}</p>
            )}
          </div>
          <div className="field">
            {/* <label htmlFor="phone">Phone</label> */}
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              value={values.phone}
              placeholder="Phone Number :"
            />
            {touched.phone && errors.phone && (
              <p className="error">{errors.phone}</p>
            )}
          </div>
          <div className="dropdown">
            <Select
              options={options}
              placeholder="Business Inquiry"
              className="border"
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
          </div>
          {errors.color && <div className="input-feedback">{errors.color}</div>}

          <div className="field">
            <input
              type="text"
              className="message_field"
              name="message"
              onChange={handleChange}
              value={values.message}
              placeholder="Message"
            />
            {touched.message && errors.message && (
              <p className="error">{errors.message}</p>
            )}
          </div>
          <div className="field submit_btn_field">
            <div className="common_button_outer2">
              <button type="submit" className="submit_btn">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductFormItem;
