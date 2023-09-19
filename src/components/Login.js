import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const Login=()=>{
    const navigate=useNavigate();
    function handleNavigate(values)
    {
        alert(values);
        setTimeout(()=>{navigate(-1);},0)
    }
  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          handleNavigate(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className=" login flex flex-col 
   overflow-hidden ">
            <div className="overflow-hidden flex justify-center bg-purple-500 max-w-[380px] text-center rounded-xl ml-[500px] mt-[30px] pt-[25px] pr-[40px] relative">
           {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form className="block m-4 p-4 " noValidate onSubmit={handleSubmit}>
                <span className="mb-[25px] text-2xl block">Login</span>
              {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input className="w-[100%] shadow-xl border border-gray m-2 p-4"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id / username"
                  
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                 {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="w-[100%] shadow-xl border border-gray m-2 p-4"
                />
                 {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                <button className=" bg-blue-400 p-4 m-2 cursor-pointer outline-0 rounded-full text-xl " type="submit">Login</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default Login;