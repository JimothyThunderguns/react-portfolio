const Header = props => {
    return (
        <header>
            <h1>Ryan Jackson</h1>
            {props.children}
        </header>
    )
}

export default Header