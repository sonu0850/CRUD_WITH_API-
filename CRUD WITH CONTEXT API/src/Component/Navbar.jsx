import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-end  ">
  <div className="navbar-brand" href="#">
    <img src="https://cdn-icons-png.flaticon.com/512/3845/3845731.png" alt="" />
  </div>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <div className="nav-link" href="#">
         <NavLink to="/"> Home </NavLink>
        </div>
      </li>
      
      <li className="nav-item dropdown">
        <div
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
        <NavLink to="/SavedData"> Saved </NavLink>
        </div>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <div className="dropdown-item" href="#">
            Action
          </div>
          <div className="dropdown-item" href="#">
            Another action
          </div>
          <div className="dropdown-divider" />
          <div className="dropdown-item" href="#">
            Something else here
          </div>
        </div>
      </li>
     
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
     
    </form>
  </div>
</nav>

    </div>
  )
}

export default Navbar
