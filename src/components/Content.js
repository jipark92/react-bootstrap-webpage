import React from 'react'
import SearchInput from './SearchInput'
import Cards from './Cards'
import 'bootstrap/dist/css/bootstrap.css' 

export default function Content() {
    return (
        <div className='content-container bg-success'>
            <SearchInput/>
            <Cards/>
        </div>
    )
}