const Navbar = ({ view, setView }) => {
  return (
    <ul className="navbar-nav fs-3 mx-auto">
      <li className="nav-item">
        <a 
          onClick={() => setView('about')}
          className={`nav-link m-2 ${view === 'about' ? 'active fw-bold text-decoration-underline' : ''}`}  
          href="#"
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a 
          onClick={() => setView('portfolio')}
          className={`nav-link m-2 ${view === 'portfolio' ? 'active fw-bold text-decoration-underline' : ''}`} 
          href="#"
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a 
          onClick={() => setView('contact')}
          className={`nav-link m-2 ${view === 'contact' ? 'active fw-bold text-decoration-underline' : ''}`} 
          href="#"
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a 
          onClick={() => setView('resume')}
          className={`nav-link m-2 ${view === 'resume' ? 'active fw-bold text-decoration-underline' : ''}`} 
          href="#"
        >
          Resume
        </a>
      </li>
    </ul>
  )
}

export default Navigation