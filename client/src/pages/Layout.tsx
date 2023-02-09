import { Outlet, Link } from "react-router-dom";
import { Nav } from '../components/Nav'
import { SideNav } from '../components/SideNav'

const Layout = () => {
  return (
    <>

        <div className="sb-sidenav-toggled">
            <div className="d-flex" id="wrapper">
                <SideNav/>
                <div className="bg-bone " id="page-content-wrapper">
                <Nav/>
                <Outlet />
                </div>
            </div>
        </div>
        {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
        </Routes> */}
          {/* <NavBar/> */}
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/usuarios">Usuarios</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}
    </>
  )
};

export default Layout;