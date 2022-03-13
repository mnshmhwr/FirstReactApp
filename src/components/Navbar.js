import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


export default function Navbar(data) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${data.mode} bg-${data.mode}`}>
    <div className="container-fluid">
    <a className="navbar-brand" href="/">{data.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/about">{data.about}</a>
        </li> */}
      </ul>
      <div className={`form-check form-switch me-5 text-${data.mode === 'light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={data.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{data.modeText}</label>
      </div>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}



Navbar.propTypes = {
 title: PropTypes.string.isRequired,
 about : PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: 'title here',
    about: 'about here'
  };