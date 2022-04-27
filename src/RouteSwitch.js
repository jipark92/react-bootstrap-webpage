import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Content from './components/Content'
import Contact from './components/Contact'
import Listing from './components/Listing'
import About from './components/About'

export default function RouteSwitch() {
    return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Content/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/listing" element={<Listing/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    </BrowserRouter>
    )
}
