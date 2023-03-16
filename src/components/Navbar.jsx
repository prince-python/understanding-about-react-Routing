import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a className="navbar-brand" href="/">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className='nav-link' to={"/"}>Home</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to={"/about"}>About</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to={"/contact"}>Contact</Link>
        </li>  
        <li class="nav-item">
        <Link className='nav-link' to={"/service"}>Service</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar