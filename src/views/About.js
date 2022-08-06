import {Link} from 'react-router-dom'

function About() {

  return (
    <div className="about">
      <h1>About page here</h1>
      <h3>Shop adress</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore deserunt facilis delectus suscipit sit debitis maxime repellendus quos eius nam amet, quidem ullam accusantium aspernatur porro similique quam modi voluptatum!
      </p>
      <Link to="/">Main Page</Link>
    </div>
  )
}

export default  About