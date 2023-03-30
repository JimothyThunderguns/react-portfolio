onst Header = ({ page, setPage }) => {
    return (
        <header className="display-flex align-items-center">

            <a onClick={() => setPage('home')}>
                <h1>Ryan Jackson</h1>
            </a>

            <nav>
                <a onClick={() => setPage('home')}>About Me</a>
                <a onClick={() => setPage('portfolio')}>Portfolio</a>
                <a onClick={() => setPage('resume')}>Resume</a>
                <a onClick={() => setPage('contact')}>Contact</a>
            </nav>

        </header>
    )
}

export default Header