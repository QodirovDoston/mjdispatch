"use client";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { Formik, Form, Field, ErrorMessage } from "formik";
// import { useMutation } from "@tanstack/react-query";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
// import { Toaster } from "sonner";

const index = () => {
  // const mutation = useMutation((values) =>
  // axios.post("https://e1ce8c79c1e6d66b.mokky.dev/post", values)
  // axios.post("https://jsonplaceholder.typicode.com/posts", values)
  // );

  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(values);
    // try {
    //   await mutation.mutateAsync(values);
    //   alert("Form submitted successfully");
    // } catch (error) {
    //   alert("An error occurred while submitting the form: " + error);
    // } finally {
    //   setSubmitting(false);
    // }
  };

  return (
    <div>
      <div className="px-7 mt-20 shadow-2xl">
        {/* <Toaster richColors position="top-right" /> */}
        <h1 className="text-center text-4xl font-bold py-6 text-gray-700">
          Contact Us
        </h1>
        <p className="text-xl text-text-color">"*" indicates required fields</p>
        <div className="px-1 py-10">
          <Formik
            initialValues={{
              // firstName: '',
              // lastName: '',
              // email: '',
              // phone: '',
              // visitors:'',
              // agree1: false
            }}
            validationSchema={Yup.object(
              {
                firstName: Yup.string().required('Name is required'),
                lastName: Yup.string().required('Last name is required'),
                email: Yup.string().email('Invalid email address').required('Email is required'),
                visitors: Yup.string().required('Last visitors is required'),
                phone: Yup.string().required('Phone number is required'),
              }
            )}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) =>
              <Form>
                <div className="mb-4 ">
                <label className="ms-2 text-sm font-bold text-text-color">
                FirstName *  <br />
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
                <div className="mb-4 ">
                <label className="ms-2 text-sm font-bold text-text-color">
                Last Name *  <br />
                  </label>
                  <Field
                    type="text"
                    className="border focus:caret-primary caret-green-300  text-gray-900 text-sm rounded-[4px] block w-full p-2.5"
                    placeholder="Last Name"
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
                  <label className="ms-2 text-sm font-bold text-text-color">
                    Email *  <br />
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
                <div className="mb-4 ">
                <label className="ms-2 text-sm font-bold text-text-color">
                Phone Number* <br />
                  </label>
                  <Field type="tel" id="phone" name="phone">
                    {({ field, form }) =>
                      <div>
                        <PhoneInput
                          defaultCountry="US"
                          className="px-2 py-3 border border-gray-300 focus:bg-white text-gray-900 text-sm rounded-[4px]"
                          {...field}
                          placeholder="Enter phone number"
                          onChange={value =>
                            form.setFieldValue(field.name, value)}
                          onBlur={() => form.setFieldTouched(field.name, true)}
                        />
                        <ErrorMessage
                          className="text-[12px] text-red-600"
                          name="phone"
                          component="div"
                        />
                      </div>}
                  </Field>
                  <div className="my-4 ">
                  <label className="ms-2 text-sm font-bold text-text-color">
                    Email Me Future Opportunities <br />
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
                <div className="my-3">
                <label className="ms-2 text-sm font-bold text-text-color">
                CAPTCHA <br />
                  </label>
                  <ReCAPTCHA
                  className='w-full'
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={onChange}
                  />
                </div>  
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white rounded-[22px] bg-green-700 duration-150 transition hover:bg-primary-dark font-medium text-lg  px-5 py-2.5 text-center"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </Form>}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default index;
