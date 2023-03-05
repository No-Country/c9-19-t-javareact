import { Container, Navbar, Nav as Topnav, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { resetUser, selectName, selectRol } from '../app/states/user';
import { removeTokenFromLocalStorage } from '../helpers';
import { PrivateRoutes, PublicRoutes } from '../routes';
import { SideNav } from './SideNav';

export const Nav = () => {
    const dispatch = useDispatch();
    const useName = useAppSelector(selectName)
    const useRol = useAppSelector(selectRol)

    const logout = () => {
        dispatch(resetUser()),
        removeTokenFromLocalStorage()
    }

    return (
        <Navbar expand={'sm'} collapseOnSelect className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm bg-white rounded animate__animated animate__slideInDown animate__delay-0.5s p-0">
            <Container fluid>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'sm'}`} />
                <Navbar.Offcanvas className={"position-absolute"}
                    id={`offcanvasNavbar-expand-${'sm'}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${'sm'}`}
                    placement="start"
                    style={{ width: 'fit-content', border: 'none', background: "transparent" }}
                >
                    <SideNav />
                </Navbar.Offcanvas>
                <Topnav className="flex-shrink-0 dropdown" style={{ marginLeft: "auto" }}>
                    <NavDropdown
                        title={
                            <img
                                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" width="32" height="32"
                                className="rounded-circle"
                                alt="Current user"
                            />
                        }
                        id={`offcanvasNavbarDropdown-expand-${'sm'}`}
                    >
                        <NavDropdown.Item as={Link} to={"#"} disabled>
                        {`${useName} ${useRol}`}
                        </NavDropdown.Item>

{ useRol === "ADMINISTRATOR"      &&                   <NavDropdown.Item
                            as={Link}
                            to={`${PrivateRoutes.SINGLEUSERINFO}`}
                        >
                            Mi perfil
                        </NavDropdown.Item>}
                        <NavDropdown.Divider />
                        <NavDropdown.Item
                            as={Link}
                            to={PublicRoutes.LOGIN}
                            onClick={logout}
                        >
                            Cerrar sesión
                        </NavDropdown.Item>
                    </NavDropdown>
                </Topnav>
            </Container>
        </Navbar>
    )
}
