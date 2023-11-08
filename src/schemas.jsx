import * as Yup from "yup";
export const FormSchemas = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  message: Yup.string().required("Message is required"),
  email: Yup.string().email().required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  selectOption: Yup.string().required("Required"),
});

export const ProductFormSchemas = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  message: Yup.string().required("Message is required"),
  email: Yup.string().email().required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  selectOption: Yup.string().required("Required"),
});

export const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string()
    .min(10, "Phone number too short!")
    .required("Phone number is required"),
  subject: Yup.string().required("Subject is required"),
  // message: Yup.string().min(5, "Message too short!").required("Required"),
});
