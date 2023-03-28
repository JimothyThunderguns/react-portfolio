port { useState } from "react"
import '../App.css'
import logo from '../assets/my-rt-logo.png'


const Navbar = ({view, setView}) => {
    const [projects, setProjects] = useState('header-link')
    const [resume, setResume] = useState('header-link')
    const [contact, setContact] = useState('header-link')

    return (
        <header className='header-outer'>
            <div 
                className="page-title"
                onClick={() => {
                    setView('home')
                    setProjects('header-link')
                    setResume('header-link')
                    setContact('header-link')
                }}
            >
                <img className='logo' src={logo}/>
            </div>
            <nav className="text-right">
                <div className='hamburgerMenu'>
                    <nav class="navbar navbar-dark fixed-top">
                        <div class="container-fluid">
                            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel"></h5>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <a class="nav-link active" onClick={() => setView('projects')} aria-current="page" href="#">Projects</a>
                                    </li>
                                    <li class="nav-item">
                                        <a onClick={() => setView('resume')} class="nav-link" href="#">Resume</a>
                                    </li>
                                    <li class="nav-item">
                                        <a onClick={() => setView('contact')} class="nav-link" href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <ul className='desktopNav'>
                    <li> 
                        <a  
                            className={projects} 
                            onClick={() => {
                                setView('projects')
                                setProjects('header-link2')
                                setResume('header-link')
                                setContact('header-link')
                            }}
                        >
                            Projects
                        </a> 
                    </li>
                    <li> 
                        <a 
                            className={resume}
                            onClick={() => {
                                setView('resume')
                                setResume('header-link2')
                                setProjects('header-link')
                                setContact('header-link')
                            }}
                        >
                            Resume
                        </a>
                        {/* <a href="https://docs.google.com/document/d/16u-dr_klaieE0MXW4yWEBs_BT5sip2-7XUtd1ce1sNY/edit#heading=h.5x0d5h95i329" 
                            className={style} 
                            >
                            Resume
                        </a>  */}
                    </li>
                    <li>
                        <a 
                            className={contact}
                            onClick={() => {
                                setView('contact')
                                setContact('header-link2')
                                setProjects('header-link')
                                setResume('header-link')
                            }}
                        >
                            Contact
                        </a> 
                    </li>
                </ul>
            </nav>
        </header>
    )
}


export default Navbar