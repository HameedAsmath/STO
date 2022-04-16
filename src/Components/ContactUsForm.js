import React from 'react'
import axios from 'axios'
import { useState } from 'react';

//Formik and Yup
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Importing toastify module
import {toast} from 'react-toastify'
 
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css'


export const ContactUsForm = () => {
    const [loading, setLoading] = useState(false)
    let options = ["Donor", "Volunteer", "Mentoring", "NeedSupport"];
    toast.configure()
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    

    //Form validation
    const ContactSchema = Yup.object().shape({
        Email: Yup.string()
        
          // Format Validation
          .email("Invalid email address format")
        
          // Required Field Validation
          .required("Email is required"),

        Name: Yup.string()
        
          //Minimum Character Validation
          .min(6, "Name must be 6 characters at minimum")
          .max(25,"Name is too long")
          .required("Name is required"),

        Number: Yup.string()
            .min(10,"Phone Number must be 10 digits")
            .max(10,"Phone Number shouldnot exceed 10 digits")
            .required("Phone Number is Required")
            .matches(phoneRegExp, 'Phone number is not valid'),

        Query: Yup.string()
            .max(100)
            .min(10)
            .required("Query Field is Required")
        
      });

  return (
    <>
        {/* Enquiry Form */}
        <div className='container-fluid justify-content-center'>
          <Formik 
            initialValues={{ Email: "", Name: "", Number: "", Query: "", Radio: "" }}
            validationSchema={ContactSchema}
            onSubmit={(values,{ resetForm }) => {
                const data = {
                    Email: values.Email,
                    Name: values.Name,
                    Number: values.Number,
                    Message: values.Query,
                    Radio: values.Radio,
                    Date: date
                }

            setLoading(true)      
            axios.post('https://sheet.best/api/sheets/78ac90ee-7d8b-4b86-8f4a-d25958fb89bb', data).then((response) => {
                setLoading(false)
                console.log(response.statusText)
                if (response.statusText == "OK" || response.statusText == "") {
                    toast.success("Form Submitted Successfully")
                }else{
                    toast.error("Kindly Check Your Internet Connection or Try Again Later")
                }
                resetForm()
            })

                
            }}
            >
            {({errors, touched}) => 
            
                (
                 <Form>
                    <p className='lead fw-bold text-center mt-2 text-light'>Get In Touch with Us</p>
                    
                    <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
                        <Field type="email" className={`form-control shadow-none ${touched.Email && errors.Email ? "is-invalid" : ""}`} name="Email" placeholder="YOUR EMAIL" aria-describedby="emailHelp"/>
                        <ErrorMessage
                            component="div"
                            name="Email"
                            className="invalid-feedback"
                            />
                    </div>

                    
                    <div className="input-group mt-2">
                        <span className="input-group-text" ><i className="bi bi-person-fill"></i></span>
                        <Field type="text" className={`form-control shadow-none ${touched.Name && errors.Name ? "is-invalid" : ""}`} name="Name" placeholder="YOUR NAME"/>
                        <ErrorMessage
                            component="div"
                            name="Name"
                            className="invalid-feedback"
                            />
                    </div>

                    
                    <div className="input-group mt-2">
                        <span className="input-group-text"><i className="bi bi-phone-fill"></i></span>
                        <Field type="text" className={`form-control shadow-none ${touched.Number && errors.Number ? "is-invalid" : ""}`} name="Number" placeholder="YOUR NUMBER" />
                        <ErrorMessage
                            component="div"
                            name="Number"
                            className="invalid-feedback"
                            />
                    </div>

                {/* Radio */}
                    <h6 className='text-light mt-1'>Iam interested in*</h6>
                            {
                                options.map(option => (
                                    <div className='form-check form-check-inline' key={option}>
                                        <Field className="form-check-input" type="radio" value={option} name="Radio"/>
                                        <label className="form-check-label text-white">
                                            {option}
                                        </label>
                                    </div>

                                ))
                            }
                    
                    <div className="mt-2">
                        <Field className={`form-control shadow-none ${touched.Query && errors.Query ? "is-invalid" : ""}`} component="textarea" name="Query" rows="3" placeholder="YOUR QUERY"></Field>
                        <ErrorMessage
                            component="div"
                            name="Query"
                            className="invalid-feedback"
                            />
                    </div>

                    <div className='text-center my-2'>
                      {!loading &&   <button type='submit' className='btn btn-outline-primary shadow-none'>Submit</button>}
                      {loading &&   <button  className='btn btn-outline-secondary disabled'>Loading...</button>}
                    </div>

                </Form>
             )
            
            }
         </Formik>
        
        </div>
    </>
  )
}
