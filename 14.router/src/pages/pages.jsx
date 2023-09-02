import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <h1>[Company Website]</h1>
      </div>
      <div id="detail">
        <Outlet />
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

const About = () => {
  return (
    <div>
      <h1>[About]</h1>
    </div>
  )
}

const Events = () => {
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  )
}

const Products = () => {
  return (
    <div>
      <h1>[Products]</h1>
    </div>
  )
}

const Contact = () => {
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  )
}

export { Home, About, Events, Products, Contact }