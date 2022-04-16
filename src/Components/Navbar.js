import React from 'react'
import Logo from "../assets/STOlogo.png"

export const Navbar = () => {
  return (
    <div className='container-sm mb-1' >
        <nav className="navbar navbar-expand-lg  navbar-light bg-light fixed-top">
    <div className="container-md container-sm">
    <a className="navbar-brand" href="/">
      <img src={Logo} alt="" width="50" height="44"/>
    </a>
      <a className="navbar-brand fw-bolder text-primary" href="#">Step To Oppurtunities</a>
      <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active text-primary" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-primary" href="#about">Who we are</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-primary" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item" href="#services">Talk Shop</a></li>
              <li><a className="dropdown-item" href="#services">Work Shop</a></li>
              <li><a className="dropdown-item" href="#services">Carrer Guidance</a></li>
            </ul>
          </li>
          <li className="nav-item d-md-none">
            <a className="nav-link text-primary" href="#scholarship">Scholarships</a>
          </li>
          <li className="nav-item d-none d-md-inline ms-2 ">
            <a className="btn btn-primary text-light" href="#scholarship">Scholarships</a>
          </li>
          <li className="nav-item ms-2 d-none d-md-inline ">
            <a type="button" className="btn btn-outline-secondary px-4" href='#contact'>Contact Us</a>
          </li>
          <li className="nav-item d-md-none">
            <a type="button" className="nav-link text-primary" href='#contact'>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </div>
  )
}
