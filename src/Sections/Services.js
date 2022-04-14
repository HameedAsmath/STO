import React from 'react'
import { Header } from '../Components/Header'

export const Services = () => {
  return (
    <>
        <section id='services' className='mt-4'>

          {/* header */}
          <Header heading="Services"/>

          {/* cards */}
          <div className='container-fluid row justify-content-center' data-aos = "flip-right">

          {/* col 1 */}
          <div className='col-md-4 mt-4 d-flex align-items-stretch'>
          <div className="card text-center shadow-lg">
          <div className="card-header bg-light text-primary fs-3 fw-bold">
            Talkshop
          </div>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted fw-bold fs-5">Expert Talk</h6>
              <p className="card-text lh-lg">The STO will conduct expert talk through free webinars for the parents, teachers and students to know in detail about different profession.
              <br/>
              <span className='card-text fw-bold text-muted'>Wise will gain knowledge from the expert’s experience.</span>
              </p><br/>
              <h6 className="card-subtitle mb-2 text-muted fw-bold fs-5">Expert Meet</h6>
              <p className="card-text lh-lg">The STO gives unique opportunity for the individuals to Interact with the experts and get guidance through online.</p>
            </div>
          </div>
            </div>

            {/* col 2 */}
            <div className='col-md-4 mt-4 d-flex align-items-stretch' data-aos = "flip-left">
            <div className="card text-center shadow-lg">
            <div className="card-header bg-light text-primary fs-3 fw-bold">
             Workshop
            </div>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted fw-bolder">Know thoroughly about your domain before take it as profession</h6>
              <p className="card-text lh-lg">The STO will provide opportunity, through workshops on advanced technologies to cater the needs of  21st century skills required for various profession. This workshop will provide <span className='text-muted fw-bolder'>real time industry experience</span> to the participant to learn practically to know in depth about your choice of profession. This will enhance the participant to take their choice of profession like doctors, engineers,charted accountant,lawyer,IAS officer, Astronaut,  etc with confidence and which is suitable for them.
              </p>
            </div>
          </div>
            </div>

            {/* col 3 */}
            <div className='col-md-4 mt-4 d-flex align-items-stretch' data-aos = "flip-up">
            <div className="card text-center shadow-lg">
            <div className="card-header bg-light text-primary fs-3 fw-bold">
               Career guidance
             </div>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted fw-bolder">Choose your career with confidence and clarity.</h6>
              <p className="card-text lh-lg">If the parents or the students are still confused with two or more option to choose their career.
              <br/><br/>
              The STO will provide one to one career counseling to the students / parents and help them to choose their career scientifically .
              </p>
              <p className='text-center fw-bold text-muted lh-lg'>Decide your future with informed decision.<br/>
              Know yourself and select your course.<br/>
              To know who you are take up our career discovery test.
              </p>
             
            </div>
          </div>
            </div>
          </div>
        </section>
    </>
  )
}
