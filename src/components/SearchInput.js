import React from 'react'
import 'bootstrap/dist/css/bootstrap.css' 
import {Form, Button, DropdownButton, Dropdown} from 'react-bootstrap'



export default function SearchInput() {
    return (
        <div className='search-container'>
    
            <div className='title-container'>
                <h1 className='text-light'>Let's Explore Your Awesome City</h1>
                <h5 className='text-light'>Find great places to stay, eat, shop, or visit from local experts</h5>
            </div>

            <div className='form-container'>
                <Form.Control type="text" placeholder="Search Interest" />
                <br />
                <Form.Control type="text" placeholder="Search Location" />
                <br />
                {/* drop down */}
                <DropdownButton size="lg" id="dropdown-basic-button" title="All Categories" variant="light">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                <br />
                {/* search button */}
                <Button className='search-btn w-100' variant="primary" size="lg">
                    Search 
                </Button>
            </div>

        </div>
    )
}
