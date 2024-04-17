import React from 'react'
import '../assets/CSS/Navbar.css'
function Navbar() {
    return (
        <div>
            <nav className='navbar   navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid justify-content-between'>
                    <a className='header-color lead navbar-brand' href='/'>Charles Kasasira</a>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse justify-content-evenly' id='navbarNav'>
                        <div className='justify-content-center'>
                            <ul style={{ fontWeight: "500" }} className='navbar-nav'>
                                <li className='nav-item p-right-64px'>
                                    <a className='nav-link' href='/'>Home</a>
                                </li>
                                <li className='nav-item p-right-64px'>
                                    <a className='nav-link' href='/'>About</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='/'>Project</a>
                                </li>
                            </ul>
                        </div>
                        <div>

                        <button className='nav-button btn text-orange px-4 py-2 ms-3'>Resume</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar