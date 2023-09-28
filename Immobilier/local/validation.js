import * as Yup from "yup";

// https://github.com/jquense/yup
export const validationSchema = Yup.object().shape({
  codeLocal: Yup.string().required("code Category is required"),
 

});
