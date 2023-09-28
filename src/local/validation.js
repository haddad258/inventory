import * as Yup from "yup";

// https://github.com/jquense/yup
export const validationSchema = Yup.object().shape({
  local: Yup.string().required("local is required"),
  codeLocal: Yup.string().required("codeLocal is required"),
 

});
