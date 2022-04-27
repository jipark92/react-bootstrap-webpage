import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <header className='header-container'>
            <Navbar className='bg-primary px-3' expand="md">
                <Navbar.Brand className='text-light'>
                    <img 
                        className='logo'
                        src="https://img.icons8.com/stickers/344/ios-photos.png"
                        alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className='nav-container justify-content-center'>
                        <Link to='/'>
                            <p className=' text-light'>Home</p>
                        </Link>
                        <Link to='/listing'>
                            <p className=' text-light'>Listing</p>
                        </Link>
                        <Link to='/about'>
                            <p className='text-light'>About</p>
                        </Link>
                        <Link to='/contact'>
                            <p className=' text-light'>Contact</p>   
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}
