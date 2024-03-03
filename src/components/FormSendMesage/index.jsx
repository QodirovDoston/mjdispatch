import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMutation } from "@tanstack/react-query";
import * as Yup from "yup";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
// import { Toaster } from "sonner";

const index = () => {
  const mutation = useMutation((values) =>
  // axios.post("https://e1ce8c79c1e6d66b.mokky.dev/post", values)
  axios.post("https://jsonplaceholder.typicode.com/posts", values)
);

const handleSubmit = async (values, { setSubmitting }) => {
  console.log(values);
  try {
    await mutation.mutateAsync(values);
    alert("Form submitted successfully");
  } catch (error) {
    alert("An error occurred while submitting the form: " + error);
  } finally {
    setSubmitting(false);
  }
};

  return (
    <div>
      <div className='p-20 '>
      {/* <Toaster richColors position="top-right" /> */}
      <h1 className="text-center text-4xl font-bold py-6 text-gray-700">Contact Us</h1>
      <div className="px-5 py-3">
        <Formik
             initialValues={{
              // firstName: '',
              // lastName: '',
              // email: '',
              // phone: '',
              // visitors:'',
              // agree1: false
            }}
            validationSchema={Yup.object({
              // firstName: Yup.string().required('Name is required'),
              // lastName: Yup.string().required('Last name is required'),
              // email: Yup.string().email('Invalid email address').required('Email is required'),
              // visitors: Yup.string().required('Last visitors is required'),
              // phone: Yup.string().required('Phone number is required'),
            })}
            onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
                <Field
                    type="number"
                    className="border focus:caret-primary caret-green-300  text-gray-900 text-sm rounded-lg 0 block w-full p-2.5"
                    placeholder="userId"
                    id="userId"
                    name="userId"
                  />
                    <Field
                    type="text"
                    className="border focus:caret-primary caret-green-300  text-gray-900 text-sm rounded-lg 0 block w-full p-2.5"
                    placeholder="title"
                    id="title"
                    name="title"
                  />
                    <Field
                    type="text"
                    className="border focus:caret-primary caret-green-300  text-gray-900 text-sm rounded-lg 0 block w-full p-2.5"
                    placeholder="Body"
                    id="body"
                    name="body"
                  />
              {/* <div className="grid gap-4 mb-4 md:grid-cols-2">
                <div>
                  <Field
                    type="text"
                    className="border focus:caret-primary caret-green-300  text-gray-900 text-sm rounded-lg 0 block w-full p-2.5"
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
                <div>
                  <Field
                    type="text"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    placeholder="Last name"
                    id="lastName"
                    name="lastName"
                  />
                  <ErrorMessage
                    className="text-[12px] text-red-600"
                    name="lastName"
                    component="div"
                  />
                </div>
              </div> */}
              {/* <div className="mb-4">
                <Field
                  type="email"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
              <div className="grid gap-4 mb-4 md:grid-cols-2">
                  <Field
                  type="tel"
                  id="phone"
                  name="phone"
                  >
                  {({ field, form }) => (
                    <div
                    >
                      <PhoneInput
                      defaultCountry="US"
                      className="px-2 py-3 border border-gray-300 focus:bg-white text-gray-900 text-sm rounded-lg "
                        {...field}
                        placeholder="Enter phone number"
                        onChange={(value) =>
                          form.setFieldValue(field.name, value)
                        }
                        onBlur={() => form.setFieldTouched(field.name, true)}
                      />
                      <ErrorMessage
                        className="text-[12px] text-red-600"
                        name="phone"
                        component="div"
                      />
                    </div>
                  )}
                
                </Field>
                <div>
                  <Field
                    type="text"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Home Zip"
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
              <div className="flex items-start mb-4 gap-4">
                <div className="flex items-center h-5">
                  <Field
                    type="checkbox"
                    name="agree1"
                    className="w-4 h-4 border border-gray-300 rounded focus:ring-3 "
                  />
                </div>
                <label className="ms-2 text-sm font-bold text-gray-900">
                  Email Me Future Opportunities <br />
                  <span className=" text-xs font-medium text-gray-900">
                    Yes, I agree .
                  </span>
                </label>
              </div> */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-white rounded-b-[22px] bg-green-700 duration-150 transition hover:bg-primary-dark font-medium text-lg w-full  px-5 py-2.5 text-center"
              >
               {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
         )}
        </Formik>
      </div>
    </div>
    </div>
  )
}

export default index