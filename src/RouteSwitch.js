import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Content from './components/Content'
import Contact from './components/Contact'

export default function RouteSwitch() {
    return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Content/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
    )
}
