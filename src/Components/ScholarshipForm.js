import React from 'react'
import { useState } from 'react'
import axios from 'axios';

//Formik and Yup
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

//Header
import { Header } from "./Header"

// Importing toastify module
import {toast} from 'react-toastify';
 
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';


export const ScholarshipForm = () => {
    const [loading, setLoading] = useState(false)
    let genders = ["Male", "Female", "Others"]
    let firstGraduate = ["Yes", "No"]
    toast.configure()
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

    //Validations
    const ScholarshipSchema = Yup.object().shape({
        Name: Yup.string()
        .min(6, "Name must be 6 characters at minimum")
        .max(25,"Name is too long")
        .required("Name is required"),

        Email: Yup.string()
          .email("Invalid email address format")
          .required("Email is required"),

        FatherName: Yup.string()
            .min(6, "Father Name must be 6 characters at minimum")
            .max(25,"Father Name is too long")
            .required("Father Name is Required"),

        Qualification: Yup.string()
            .max(25,"Education Qualification is too long")
            .required("Education Qualification is Required"),
        
        Community: Yup.string()
            .max(25,"Community is too long")
            .required("Community is Required"),

        TenthMark: Yup.number()
            .max(1000,"10th Mark is too long")
            .required("10th Mark is Required"),

        TwelvethMark: Yup.number()
            .max(2000,"12th Mark is too long")
            .required("12th Mark is Required"),

        Whatsapp: Yup.string()
            .min(10,"Whatsapp Number must be 10 digits")
            .max(10,"Whatsapp Number shouldnot exceed 10 digits")
            .required("Whatsapp Number is Required")
            .matches(phoneRegExp, 'Whatsapp number is not valid'),

        Contact: Yup.string()
        .min(10,"Contact Number must be 10 digits")
        .max(10,"Contact Number shouldnot exceed 10 digits")
        .required("Contact Number is Required")
        .matches(phoneRegExp, 'Contact number is not valid'),

        District: Yup.string()
            .min(4,"Enter Valid District Name")
            .max(25, "District is too Long")
            .required("District is Required"),

        Aadhar: Yup.string()
            .min(12,"Aadhar Number should have 12 digits")
            .max(12,"Aadhar Number shouldnot exceed 12 digits")
            .required("Aadhar Number is Required"),

        GroupName: Yup.string()
            .max(25,"Group Name is too long")
            .required("Group Name is Required"),

        WhatsNext: Yup.string()
            .max(200,"WhatsNext after 12th is too long")
            .required("WhatsNext after 12th is Required"),

        Reference: Yup.string()
            .max(25,"Reference after 12th is too long")
            .required("Reference is Required"),

        AreaofStudy: Yup.string()
            .max(50,"Interested Area of Study")
            .required("Interested Area of Study is Required"),
            
      });  
    
        
  return (
    <>
           <section id='scholarship' className='mt-5'>

            {/* Header */}
            <Header heading="Scholarship"/>

             <div className='container-fluid col-md-11 mt-3 card shadow-lg' data-aos="zoom-in">
                <Formik
                initialValues={{ Name: "", Gender: "", Email: "", FatherName: "",Qualification: "", Community: "", TenthMark: "", TwelvethMark: "", Whatsapp: "", Contact: "", FirstGraduate: "", District: "", GroupName: "", Aadhar: "", WhatsNext: "", Reference: "", AreaofStudy: ""}}
                validationSchema={ScholarshipSchema}
                onSubmit={(values, {resetForm}) => {
                    const data = {
                        Name: values.Name,
                        Gender: values.Gender,
                        Email: values.Email,
                        FatherName: values.FatherName,
                        Qualification: values.Qualification,
                        Community: values.Community,
                        TenthMark: values.TenthMark,
                        TwelvethMark: values.TwelvethMark,
                        WhatsApp: values.Whatsapp,
                        Contact: values.Contact,
                        FirstGraduate: values.FirstGraduate,
                        District: values.District,
                        Aadhar: values.Aadhar,
                        GroupName: values.GroupName,
                        WhatsNext: values.WhatsNext,
                        Reference: values.Reference,
                        AreaofStudy: values.AreaofStudy,
                        Date: date
                    }

                    //Posting data
                    setLoading(true)
                    axios.post('https://sheet.best/api/sheets/a291bcff-6f90-4751-8dcb-2d8ae343b56f', data).then((response) => {
                        if (response.statusText == "OK") {
                            setLoading(false)
                            toast.success("Form Submitted Successfully")
                        }else{
                            setLoading(false)
                            toast.error("Kindly Check Your Internet Connection or Try Again Later")
                        }
                    })
                    resetForm();  
                }}>
                {({touched, errors}) => (
                    <Form className='col-md-12 py-3'>
                        <div className="row mb-3 justify-content-center">
                        <div className='col-6'>
                            <Field type="text" className={`form-control border-0 border-bottom shadow-none ${touched.Name && errors.Name ? "is-invalid" : ""}`}  placeholder="Name" name="Name"/>
                            <ErrorMessage
                            component="div"
                            name="Name"
                            className="invalid-feedback"
                            />
                        </div>
                        <div className='col-4'>
                            <Field type="email" className={`form-control border-0 border-bottom shadow-none ${touched.Email && errors.Email ? "is-invalid" : ""}`}  placeholder="Email id" name="Email"/>
                            <ErrorMessage
                            component="div"
                            name="Email"
                            className="invalid-feedback"
                            />
                        </div>
                        </div>

                         <div className="row mb-3 justify-content-center">
                        <div className='col-6'>
                        <Field type="text" className={`form-control border-0 border-bottom shadow-none ${touched.Reference && errors.Reference ? "is-invalid" : ""}`}  placeholder="Reference" name="Reference"/>
                        <ErrorMessage
                         component="div"
                         name="Reference"
                         className="invalid-feedback"
                         />
                        </div>
                        <div className='col-4'>
                            <Field type="text" className={`form-control border-0 border-bottom shadow-none ${touched.FatherName && errors.FatherName ? "is-invalid" : ""}`}  placeholder="Father Name" name="FatherName"/>
                            <ErrorMessage
                            component="div"
                            name="FatherName"
                            className="invalid-feedback"
                            />
                        </div>
                        </div>
                        

                        <div className="row mb-3 justify-content-center">
                        <div className='col-6'>
                            <Field type="text" className={`form-control border-0 border-bottom shadow-none ${touched.Qualification && errors.Qualification ? "is-invalid" : ""}`}  placeholder="Education Qualification" name="Qualification"/>
                            <ErrorMessage
                            component="div"
                            name="Qualification"
                            className="invalid-feedback"
                            />
                        </div>
                        <div className='col-4'>
                            <Field type="text" className={`form-control border-0 border-bottom shadow-none ${touched.Community && errors.Community ? "is-invalid" : ""}`}  placeholder="Community" name="Community"/>
                            <ErrorMessage
                            component="div"
                            name="Community"
                            className="invalid-feedback"
                            />
                        </div>
                        </div>

                        <div className="row mb-3 justify-content-center">
                        <div className='col-6'>
                            <Field type="text" className={`form-control border-0 border-bottom shadow-none ${touched.TenthMark && errors.TenthMark ? "is-invalid" : ""}`}  placeholder="10th Mark" name="TenthMark"/>
                            <ErrorMessage
                            component="div"
                            name="TenthMark"
                            className="invalid-feedback"
                            />
                        </div>
                        <div className='col-4'>
                            <Field type="text" className={`form-control border-0 border-bottom shadow-none ${touched.TwelvethMark && errors.TwelvethMark ? "is-invalid" : ""}`}  placeholder="12th Mark" name="TwelvethMark"/>
                            <ErrorMessage
                            component="div"
                            name="TwelvethMark"
                            className="invalid-feedback"
                            />
                        </div>
                        </div>

                        <div className="row mb-3 justify-content-center">
                        <div className='col-6'>
                            <Field type="text" className={`form-control border-0 border-bottom shadow-none ${touched.Whatsapp && errors.Whatsapp ? "is-invalid" : ""}`}  placeholder="Whatsapp Number" name="Whatsapp"/>
                            <ErrorMessage
                            component="div"
                            name="Whatsapp"
                            className="invalid-feedback"
                            />
                        </div>
                        <div className='col-4'>
                            <Field type="text" className={`form-control border-0 border-bottom shadow-none ${touched.Contact && errors.Contact ? "is-invalid" : ""}`}  placeholder="Contact Number" name="Contact"/>
                            <ErrorMessage
                            component="div"
                            name="Contact"
                            className="invalid-feedback"
                            />
                        </div>
                        </div>

                        <div className="row mb-3 justify-content-center">
                        <div className='col-6'>
                        <Field type="text" className={`form-control border-0 border-bottom shadow-none ${touched.GroupName && errors.GroupName ? "is-invalid" : ""}`}  placeholder="Group Name"name="GroupName" />
                            <ErrorMessage
                            component="div"
                            name="GroupName"
                            className="invalid-feedback"
                            />
                        </div>
                        <div className='col-4'>
                            <Field type="text" className={`form-control border-0 border-bottom shadow-none ${touched.District && errors.District ? "is-invalid" : ""}`}  placeholder="District" name="District"/>
                            <ErrorMessage
                            component="div"
                            name="District"
                            className="invalid-feedback"
                            />
                        </div>
                        </div>

                        <div className="row mb-3 justify-content-center">
                        <div className='col-6'>
                            <Field type="text" className={`form-control border-0 border-bottom shadow-none ${touched.Aadhar && errors.Aadhar ? "is-invalid" : ""}`}  placeholder="Aadhar" name="Aadhar"/>
                            <ErrorMessage
                            component="div"
                            name="Aadhar"
                            className="invalid-feedback"
                            />
                        </div>
                        <div className='col-4'>
                        <Field type="text" className={`form-control border-0 border-bottom shadow-none ${touched.AreaofStudy && errors.AreaofStudy ? "is-invalid" : ""}`}  placeholder="Interested Area of Study" name="AreaofStudy"/>
                            <ErrorMessage
                            component="div"
                            name="AreaofStudy"
                            className="invalid-feedback"
                            />
                        </div>
                        </div>

                        <div className="row mb-3 justify-content-center">
                        <div className='col-10'>
                            <Field type="text" className={`form-control border-0 border-bottom shadow-none ${touched.WhatsNext && errors.WhatsNext ? "is-invalid" : ""}`}  placeholder="After 12th what next" name="WhatsNext" />
                            <ErrorMessage
                            component="div"
                            name="WhatsNext"
                            className="invalid-feedback"
                            />

                        </div>
                    </div> 

                    {/* Radio */}
                    <div className="row mb-3  justify-content-center text-muted">
                        <div className='col-6'>
                        <p>Gender</p>
                            {
                                genders.map(gender => (
                                    <div className='form-check form-check-inline' key={gender}>
                                        <Field className="form-check-input" type="radio" value={gender} name="Gender" />
                                        <label className="form-check-label">
                                            {gender}
                                        </label>
                                    </div>

                                ))
                            }
                            </div>
                            <div className='col-4'>
                            <p>Are you a First Graduate</p>
                            {
                                firstGraduate.map(option => (
                                    <div className='form-check form-check-inline' key={option}>
                                        <Field className="form-check-input" type="radio" value={option} name="FirstGraduate" />
                                        <label className="form-check-label">
                                            {option}
                                        </label>
                                    </div>

                                ))
                            }
                            </div>
                        </div>

                        <div className='text-center'>
                           {!loading &&  <button type='submit' className='btn btn-outline-primary btn-lg'>Submit</button>}
                           {loading &&  <button type='submit' className='btn btn-outline-secondary disabled btn-lg'>Loading...</button>}
                        </div>
                    </Form>
                )}

                </Formik>
                
            </div>

        </section>
    </>
  )
}
