const project = ({ project, hovered, setHovered, projectID, setProjectID }) => {
  const { id, img, title, description, tech, deployed_url, github } = project

  let cardBodyClass
  let imgClass

  if (hovered && projectID === id) {
    cardBodyClass = 'card-body position-absolute top-0 start-0 h-100 w-100 p-2'

    imgClass = "card-img-top position-relative h-100 faded"

  } else {
    cardBodyClass = 'card-body position-absolute top-0 start-0 hidden'

    imgClass = "card-img-top position-relative h-100"
  }
  
  return (
    <div className="col p-1">
      <div 
        className="card col-11 col-xl-10 mx-auto text-center projects"
        onMouseEnter={() => {
          setHovered(true)
          setProjectID(id)
        }}
        onMouseLeave={() => {
          setHovered(false)
        }}
      >
        <img 
          id={id} 
          src={img} 
          className={imgClass}
          alt={title}
        />
        <div 
          id={id}
          className={cardBodyClass}
        >
          <div className="project-links">
            <a className="card-title fs-1 me-3 mb-0" href={deployed_url} target="_blank"  rel="noreferrer">{title}</a>
            <a href={github} target="_blank"  rel="noreferrer">
              <i className="bi bi-github fs-1"></i>
            </a>
          </div>
          <div>
            <h3 className="card-text fw-bold fs-4">Description:</h3>
            <p className="card-text fs-5">{description}</p>
            <h3 className="card-text fw-bold fs-4">Technologies Used:</h3>
            <p className="card-text fs-5">{tech}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default project