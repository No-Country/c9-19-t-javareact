import React from 'react'
import { Nav } from './Nav'
import { SideNav } from './SideNav'
export const Home = () => {
  return (
  < div className="sb-sidenav-toggled">
    <div className="d-flex" id="wrapper">
        <SideNav/>
        <div className="bg-bone " id="page-content-wrapper">
          <Nav/>
        </div>
    </div>
    </div>
  )
}
