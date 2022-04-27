import React from 'react'
import SearchInput from './SearchInput'
import Cards from './Cards'
import Accordions from './Accordion'
import Carousels from './Carousels'
import 'bootstrap/dist/css/bootstrap.css' 


export default function Content() {
    return (
        <div className='content-container bg-success'>
            <SearchInput/>
            <Cards/>
            {/* <div className='img-acc-container'>
                <Carousels/>
                <Accordions/>
            </div> */}
        </div>
    )
}
