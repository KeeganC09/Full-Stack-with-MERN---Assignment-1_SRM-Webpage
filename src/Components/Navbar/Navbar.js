import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
        <div className='navbar'>
            <ul className='navbar-items'>
                <div className='item'><li>Home</li></div>
                <div className='item'><li>Career Center</li></div>
                <div className='item'><li>Placement</li></div>
                <div className='item'><li>Recruiters</li></div>
                <div className='item'><li>Super Dream & Dream Offers</li></div>
                <div className='item'><li>CDC</li></div>
                <div className='item'><li>Contacts</li></div>
            </ul>
        </div>
    </>
  )
}

export default Navbar