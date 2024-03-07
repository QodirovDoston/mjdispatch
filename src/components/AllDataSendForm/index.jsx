"use client";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { Formik, Form, Field, ErrorMessage } from "formik";
// import { useMutation } from "@tanstack/react-query";
import * as Yup from "yup";
import "react-phone-number-input/style.css";
// import { Toaster } from "sonner";

const index = () => {
  // const mutation = useMutation((values) =>
  // axios.post("https://e1ce8c79c1e6d66b.mokky.dev/post", values)
  // axios.post("https://jsonplaceholder.typicode.com/posts", values)
  // );

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(values);
    try {
      const formData = new FormData();
      formData.append("file", values.file);
      formData.append("firstName", values.firstName);
      formData.append("lastName", values.lastName);
      formData.append("email", values.email);
      formData.append("visitors", values.visitors);
      const response = await axios.post("YOUR_UPLOAD_ENDPOINT", formData);

      console.log("Form submitted successfully", response.data);
      alert("Form submitted successfully");
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
      alert("An error occurred while submitting the form: " + error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="px-7 mt-20  overflow-hidden">
        {/* <Toaster richColors position="top-right" /> */}
        <p className="text-xl text-text-color text-start">
          "*" indicates required fields
        </p>
        <div className="px-1 py-10">
          <Formik
            initialValues={{
              // firstName: '',
              // lastName: '',
              // email: '',
              // phone: '',
              // visitors:'',
              // agree1: false,
              file: null
            }}
            validationSchema={Yup.object({
              firstName: Yup.string().required("Name is required"),
              lastName: Yup.string().required("Last name is required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              visitors: Yup.string().required("Last visitors is required"),
              phone: Yup.string().required("Phone number is required"),
              file: Yup.mixed().required("File is required")
            })}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) =>
              <Form>
                <div>
                  <div className="mb-4 ">
                    <label className="ms-2 text-sm font-bold text-text-color">
                      FirstName * <br />
                    </label>
                    <Field
                      type="text"
                      className="border focus:caret-primary caret-green-300  text-gray-900 text-sm rounded-[4px] block w-full p-2.5"
                      placeholder="First name"
                      id="firstName"
                      name="firstName"
                    />
                    <ErrorMessage
                      className="text-[10px] text-red-600"
                      name="firstName"
                      component="div"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="ms-2 text-sm font-bold text-text-color">
                      Email * <br />
                    </label>
                    <Field
                      type="email"
                      className="border border-gray-300 text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Email"
                      id="email"
                      name="email"
                    />
                    <ErrorMessage
                      className="text-[12px] text-red-600"
                      name="email"
                      component="div"
                    />
                  </div>
                </div>
                <div className="mb-4 ">
                  <label className="ms-2 text-sm font-bold text-text-color">
                    Company Name * <br />
                  </label>
                  <Field
                    type="text"
                    className="border focus:caret-primary caret-green-300  text-gray-900 text-sm rounded-[4px] block w-full p-2.5"
                    placeholder="Company Name"
                    id="lastName"
                    name="lastName"
                  />
                  <ErrorMessage
                    className="text-[10px] text-red-600"
                    name="lastName"
                    component="div"
                  />
                </div>

                <div className="mb-4 ">
                  <label className="ms-2 text-sm font-bold text-text-color">
                    Company Website * <br />
                  </label>
                  <Field
                    type="text"
                    className="border focus:caret-primary caret-green-300  text-gray-900 text-sm rounded-[4px] block w-full p-2.5"
                    placeholder="Company Name"
                    id="lastName"
                    name="lastName"
                  />
                  <ErrorMessage
                    className="text-[10px] text-red-600"
                    name="lastName"
                    component="div"
                  />
                </div>

                <div className="mb-4 ">
                  <label className="ms-2 text-sm font-bold text-text-color">
                    Heading * <br />
                  </label>
                  <Field
                    type="text"
                    className="border focus:caret-primary caret-green-300  text-gray-900 text-sm rounded-[4px] block w-full p-2.5"
                    placeholder="Company Name"
                    id="lastName"
                    name="lastName"
                  />
                  <ErrorMessage
                    className="text-[10px] text-red-600"
                    name="lastName"
                    component="div"
                  />
                </div>

                <div className="mb-4">
                  <div className="my-4 ">
                    <label className="ms-2 text-sm font-bold text-text-color">
                      Testimonial * <br />
                    </label>
                    <Field
                      as="textarea"
                      // type="text"
                      className="border border-gray-300 text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Message"
                      id="visitors"
                      name="visitors"
                    />
                    <ErrorMessage
                      className="text-[12px] text-red-600"
                      name="visitors"
                      component="div"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="ms-2 text-sm font-bold text-text-color">
                    Photo * <br />
                  </label>
                  <Field
                    type="file"
                    onChange={event => {
                      setFieldValue("file", event.currentTarget.files[0]);
                    }}
                    className="text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    id="file"
                    name="file"
                  />
                  <label className="ms-2 text-sm text-text-color">
                    Max. file size: 32 MB. <br />
                  </label>
                  <ErrorMessage
                    className="text-[12px] text-red-600"
                    name="file"
                    component="div"
                  />
                </div>
                <div className="my-3">
                  <label className="ms-2 text-sm font-bold text-text-color">
                    CAPTCHA <br />
                  </label>
                  <ReCAPTCHA
                    className="max-w-[200px]"
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={value => alert("Captcha value:", value)}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white rounded-[22px] bg-green-700 duration-150 transition hover:bg-primary-dark font-medium text-lg  px-5 py-2.5 text-center"
                >
                  {isSubmitting ? "Submitting..." : "Add Testimon"}
                </button>
              </Form>}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default index;
