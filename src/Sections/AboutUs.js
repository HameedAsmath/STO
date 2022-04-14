import React from 'react'
import AboutImage from '../assets/AboutUsImage.jpg'
import { Header } from '../Components/Header'

export const AboutUs = () => {
  
  return (
    <>
        <section id='about' className='mt-5'>

          {/* Header */}
          <Header heading="Who we are"/>
          
         <div className='container-fluid row justify-content-start'>
            <div className='col-md-6 text-start' data-aos="fade-right">
                  <p className='text-wrap fw-light lh-lg py-2'>
                    <span className='fw-bold text-muted'>Our aim is to spread success and happiness in your profession and life.</span>
                    <br></br>
                    The Step to opportunities is founded by a team of experienced professionals from various fields like Medicine, Engineering, science, Law, CA, Psychology and Industry Experts etc. We have come together with a Moto to spread success and happiness to the digital native generation. We will help the parents and their wards to choose the right career for their success scientifically. We have a well structured systematic approach to find the suitable course and career for your successful life. We strongly believe that the parents of present generation and their wards are smart enough to choose their career by themselves if they get the complete information about their choice of career.  The STO is the unique and Indias no.1 platform for the parents and students to get correct information from the experts directly.
                    The STO provide opportunity to share the expert knowledge through:
                  </p>
            </div>
            <div className='col-md-6 text-center p-md-3 align-self-center' data-aos="fade-left">
              <img src={AboutImage} className="img-fluid img-thumbnail rounded" alt="image here"></img>
            </div>
          </div>
        </section>
    </>
  )
}
