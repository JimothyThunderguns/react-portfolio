const Footer = props => {
  return (
    <footer className="mt-5">
      <div className="d-flex justify-content-center mt-3 pt-3 pb-1">
        <a href="https://github.com/JimothyThunderguns" target="_blank" rel="noreferrer">
          <i className="bi bi-github m-3 fs-2"></i>
        </a>
        <a href="https://www.linkedin.com/in/ryan-jackson-9a419a250/" target="_blank" rel="noreferrer">
          <i className="bi bi-linkedin m-3 fs-2"></i>
        </a>
        <a href="mailto:rcjackson96@gmail.com">
          <i className="bi bi-envelope-at-fill m-3 fs-2"></i>
        </a>
        <a href="tel:17153474664">
          <i className="bi bi-telephone-fill m-3 fs-2"></i>
        </a>
      </div>
      <p className="ms-3">&copy; Ryan Jackson 2023</p>
    </footer>
  )
}

export default Footer