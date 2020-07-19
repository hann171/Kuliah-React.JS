import React, { useState,useContext } from 'react';
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import { CartContext } from '../../CartContext';
import {NavLink} from 'react-router-dom'

const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const {value, setValue} = useContext(CartContext)

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/" className='nav-link'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/about" className='nav-link'>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/mahasiswa" className='nav-link'>Mahasiswa</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/kelas" className='nav-link'>Kelas</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/hooks" className='nav-link'>Hooks</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/useeffects" className='nav-link'>Hooks Effect</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/product" className='nav-link'>Product</NavLink>
                        </NavItem>
                    </Nav>

                    <NavbarText>
                        <Button color="danger">
                            <i className="fa fa-shopping-cart"></i>
                            <span className="badge badge-light">{value}</span>
                        </Button>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComp;