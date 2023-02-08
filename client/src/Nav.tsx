import React from 'react'

export const Nav = () => {
  return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm p-3 mb-4 bg-white rounded">
                    <div className="container-fluid">
                        <button className="btn btn-primary" id="sidebarToggle">Toggle Menu</button>
                        <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-lg">🔎</span>
                            </div>
                            <input type="text" className="form-control form-control-nav" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                        </div>
                    </div>
                </nav>
  )
}
