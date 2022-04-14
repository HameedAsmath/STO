import React from 'react'
import { Navbar } from '../Components/Navbar';
import BannerImage from '../assets/Sample1.jpg';
import { AboutUs } from '../Sections/AboutUs';
import { Services } from '../Sections/Services';
import { Scholarship } from '../Sections/Scholarship';
import { Footer } from '../Sections/Footer';

export const Home = () => {
  return (
    <div className='mt-3'>
      
        {/* Navbar */}
        <Navbar/>

        {/* Below div is used to give width to the entire website without navbar.That is all the contents of the website is inside that container */}
        <div className='container p-md-5 p-1'>

        {/* Banner Image */}
        <div className='container-fluid' data-aos="fade-up">
            <div className="col-lg-12 mx-auto d-block mt-3">
            <img src={BannerImage} className="img-fluid img-thumbnail" alt="image here"></img>
            </div>
        </div>

        {/* AboutUs */}
        <AboutUs/>

        {/* Services */}
        <Services/>

        {/* Enquiry
        <Enquiry/> */}

        {/* Scholarship */}
        <Scholarship/>

        </div>

         {/* Footer*/}
         <Footer/>

    </div>
  )
}
