"use client";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-phone-number-input/style.css";

const BrokerPacketForm = () => {
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
       <div className="px-7 bg-white shadow-xl hover:shadow-2xl pt-10 duration-500 gap-9">
        <h1 className="text-text-color text-4xl font-bold text-center ">Broker Packet Form</h1>
        <p className="text-text-color text-2xl text-center py-5 font-bold">Contact Us for more information about Broker Packets:</p>
        <p className="text-text-color ">Thank you for your interest in <span className="text-green-700 cursor-pointer"> M&J Dispatch, LLC.</span></p>

        <p className="text-text-color  py-4">We’re here to assist you in taking your small trucking business to new heights.</p>
        <p className="text-text-color">Please use the contact form below to get in touch with us.</p>
        <h1 className="text-gray-800 text-2xl  py-4 font-bold">How Can We Help You?</h1>
        <p className="text-gray-800 py-4">Let us know how we can assist you.</p>
        <p className="text-text-color " >Whether you’re seeking information about our dispatch services, or need guidance on industry-related matters, we’re here to provide the answers you need.</p>

        
        {/* <Toaster richColors position="top-right" /> */}
        <p className="text-xl text-text-color text-start mt-4">
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
                  
                  <div className="mb-4 ">
                    <label className="ms-2 text-sm font-bold text-text-color">
                      LastName * <br />
                    </label>
                    <Field
                      type="text"
                      className="border focus:caret-primary caret-green-300  text-gray-900 text-sm rounded-[4px] block w-full p-2.5"
                      placeholder="Last Name"
                      id="LastName"
                      name="LastName"
                    />
                    <ErrorMessage
                      className="text-[10px] text-red-600"
                      name="LastName"
                      component="div"
                    />
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
                  Address * <br />
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
                  Street Address <br />
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
                  Address Line 2.  City<br />
                  </label>
                  <Field
                    type="text"
                    className="border focus:caret-primary caret-green-300  text-gray-900 text-sm rounded-[4px] block w-full p-2.5"
                    placeholder="City"
                    id="City"
                    name="City"
                  />
                  <ErrorMessage
                    className="text-[10px] text-red-600"
                    name="City"
                    component="div"
                  />
                </div>
                <div className="mb-4 ">
                  <label className="ms-2 text-sm font-bold text-text-color">
                  State / Province / Region <br />
                  </label>
                  <Field
                    type="text"
                    className="border focus:caret-primary caret-green-300  text-gray-900 text-sm rounded-[4px] block w-full p-2.5"
                    placeholder="State"
                    id="state"
                    name="state"
                  />
                  <ErrorMessage
                    className="text-[10px] text-red-600"
                    name="state"
                    component="div"
                  />
                </div>
                <div className="mb-4 ">
                  <label className="ms-2 text-sm font-bold text-text-color">
                  ZIP / Postal Code <br />
                  </label>
                  <Field
                    type="text"
                    className="border focus:caret-primary caret-green-300  text-gray-900 text-sm rounded-[4px] block w-full p-2.5"
                    placeholder="ZIP"
                    id="zip"
                    name="zip"
                  />
                  <ErrorMessage
                    className="text-[10px] text-red-600"
                    name="zip"
                    component="div"
                  />
                </div>
                <div className="mb-4 ">
                  <label className="ms-2 text-sm font-bold text-text-color">
                    Company Name * <br />
                  </label>
                  <Field
                    type="text"
                    className="border focus:caret-primary caret-green-300  text-gray-900 text-sm rounded-[4px] block w-full p-2.5"
                    placeholder="Company Name"
                    id="company"
                    name="company"
                  />
                  <ErrorMessage
                    className="text-[10px] text-red-600"
                    name="company"
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
                  <div className="mb-4">
                  <div className="my-4 ">
                    <label className="ms-2 text-sm font-bold text-text-color">
                      Testimonial * <br />
                    </label>
                    <Field
                      as="textarea"
                      type="text"
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
              
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white rounded-[22px] bg-green-700 duration-150 transition hover:bg-text-color duration-500 font-medium text-lg  px-5 py-2.5 text-center"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </Form>}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default BrokerPacketForm;