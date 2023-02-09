import React from 'react'

export const Nav = () => {
  return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm p-3 mb-4 bg-white rounded">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-start">
                        <button className="btn bg-white me-4" id="sidebarToggle"><i className="fa-solid fa-bars fa-xl"></i></button>
                        <div className="input-group input-group-md">
                            <div className="input-group-prepend p-2">
                            <i className="fa-solid fa-magnifying-glass fa-xl bg-grey"></i>

                               {/*  <span className="input-group-text" id="inputGroup-sizing-lg">🔎</span> */}
                            </div>
                            <input type="text" className="form-control form-control-nav" placeholder="Busqueda" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
                        </div>
                        </div>
                        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button> */}
                        <div className="flex-shrink-0 dropdown">
                        <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
                        </a>
                        <ul className="dropdown-menu text-small shadow">
                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                        </div>
                        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                <li className="nav-item active"><a className="nav-link" href="#!">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#!">Action</a>
                                        <a className="dropdown-item" href="#!">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#!">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </nav>
  )
}
