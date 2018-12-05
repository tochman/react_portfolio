import React from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="header">
            <h1 className="header-title">
                <Link className="text-white hover:text-grey no-underline" to='/'>My Portfolio</Link>
            </h1>
            <ul className="list-reset flex">
                <li className="mr-6"><NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/about'>About Me</NavLink></li>
                <li className="mr-6"><NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/projects'>My Projects</NavLink></li>
            </ul>
        </nav>
    )
}

const About = () => (
    <div className="content-wrapper">
        <h1>About Me</h1>
        <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    </div>
);

const Projects = () => (
    <div className="content-wrapper">
        <h1>My Projects</h1>
        <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    </div>
);


export default Header