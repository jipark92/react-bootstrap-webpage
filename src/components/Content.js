import React from 'react'
import Accordions from './Accordion'
import Carousels from './Carousels'
import 'bootstrap/dist/css/bootstrap.css' 


export default function Content() {
    return (
        <div className='content-container bg-success'>
            <Carousels/>
            <Accordions/>
        </div>
    )
}
