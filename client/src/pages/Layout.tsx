import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Nav } from '../components/Nav'
import { SideNav } from '../components/SideNav'

const Layout = () => {

    const navigate = useNavigate();

    const [token, setToken] = useState<string>('')

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            setToken(token);

        }
        if (token === null) {
            navigate('/login', { replace: true });
        } else {
            navigate('/dashboard', { replace: true });
        }
    }, [])
    
    return (
        <>
            <div className="sb-sidenav-toggled">
                <div className="d-flex" id="wrapper">
                    <SideNav/>
                    <div className="bg-bone" id="page-content-wrapper">
                    <Nav/>
                    <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Layout;