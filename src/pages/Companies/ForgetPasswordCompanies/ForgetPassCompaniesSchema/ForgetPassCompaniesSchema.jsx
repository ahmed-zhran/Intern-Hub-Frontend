import * as yup from "yup";

const ForgetPassCompaniesSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
});

export default ForgetPassCompaniesSchema;
