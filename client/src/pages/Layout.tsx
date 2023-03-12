import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Nav } from '../components/Nav'
import { SideNav } from '../components/SideNav'

const Layout = () => {
    return (
            <div className="sb-sidenav-toggled">
                <div className="d-flex">
                    <div className="bg-bone overflow-hidden" id="page-content-wrapper">
                        <Nav/>
                        <div className="overflow-box pt-5">
                            <Outlet />
                    </div>
                </div>
            </div>
        </div>   
    )
};

export default Layout