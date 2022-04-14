import React from 'react'

import { ContactUsForm } from '../Components/ContactUsForm';
import { ContactUs } from '../Components/ContactUs';

export const Footer = () => {
  return (
    <>
        <section id='contact' className='mt-4 bg-dark'>
          <div className='row container-fluid justify-content-center'>
            <div className='col-md-5'>
              <ContactUs/>
            </div>
            <div className='col-md-5'>
              <ContactUsForm/>
            </div>
          </div>
         </section>
    </>
  )
}
