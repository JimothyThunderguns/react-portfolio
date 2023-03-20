import Navbar from "./Navbar"

const Header = ({ view, setView }) => {
  return (
    <nav className="navbar navbar-expand-lg p-4">
      <div className="container mx-auto">
        <h1 className="name">Ryan Jackson</h1>
        <Navbar
          view={view}
          setView={setView}
        />
      </div>
    </nav>
  )
}

export default Header
