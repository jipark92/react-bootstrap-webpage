import React from 'react'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

export default function NavBar() {
    return (
        <header className='header-container'>
            <Navbar className='bg-primary px-3 py-3' expand="md">

                <Navbar.Brand className='text-light'>
                    <img 
                        className='logo'
                        src="https://img.icons8.com/stickers/344/ios-photos.png"
                        alt="logo"
                    />
                </Navbar.Brand>


                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className='nav-container '>
                        {/* DropDown
                        <NavDropdown>
                            <NavDropdown.Item href="#">Tea</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#">Map</NavDropdown.Item>
                        </NavDropdown> */}
                        <Nav.Link href="/" className=' text-light'>Content</Nav.Link>
                        <Nav.Link href="/contact" className=' text-light'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>



            </Navbar>
        </header>
    )
}
