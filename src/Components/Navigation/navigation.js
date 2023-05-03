import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from 'react-router-dom';
import OutsideClick from './outsideClick';
import "./navigation.css"


const Navigation = (props) => {

	const [navbarOpen, setNavbarOpen] = useState(false)
	const navRef = useRef(null);
	const navOutsideClick = OutsideClick(navRef);

	const handleToggle = () => {
		setNavbarOpen(prev => !prev)
	}

	const closeMenu = () => {
		setNavbarOpen(false);
	}

	const pathname = useLocation().pathname;

	return (
		<>
			<div className="d-flex justify-content-between w-100">

				{/* Left Side of Nav */}
				<div className="col-6 text-start">
					<div className="row txt-5 mx-3">
						<div className="nameNav col-12 col-sm-5 col-md-4 col-lg-3 font-weight-800">
							<Link className="text-white text-decoration-none" to="/">Danish <br /> Mohiuddin</Link>
						</div>
						<div className="jobTitleNav mx-0 mx-sm-3 mx-xl-0 col-12 col-sm-5 col-md-4 col-lg-3 txt-3 d-flex align-items-center text-nowrap">
							<Link className="text-white text-decoration-none" to="/">/ SOFTWARE ENGINEER</Link>
						</div>
					</div>
				</div>

				{/* Right Side of Nav */}
				<div className="col-6 d-flex align-items-center justify-content-end">
					<div className="row txt-5 mx-3">

						{/* Medium and Larger Screens */}
						<div className="col-12 d-none d-md-flex">
							<Link className={`nav-link px-3 txt-3 text-nowrap border-right-white ${pathname == '/' ? "active" : ""}`} to="/">ABOUT ME</Link>
							<Link className={`nav-link px-3 txt-3 border-right-white ${pathname == '/resume' ? "active" : ""}`} to="/resume">RESUME</Link>
							<Link className={`nav-link px-3 txt-3 border-right-white ${pathname == '/projects' ? "active" : ""}`} to="/projects">PROJECTS</Link>
							<Link className={`nav-link px-3 txt-3 ${pathname == '/contact' ? "active" : ""}`} to="/contact">CONTACT</Link>
						</div>

						{/* Smaller Screens */}
						<div className="col-12 d-flex d-md-none">
							<button className="btn btn-link txt-7 text-white" onClick={handleToggle}>{navbarOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}</button>
						</div>

					</div>
				</div>
			</div >

			<ul className={`d-block d-md-none menuNav pl-0 ${navbarOpen ? " showMenu" : ""}`} ref={navRef}>
				<Link to="/" className="txt-3 nav-link text-center" onClick={handleToggle}><li>ABOUT ME</li></Link>
				<Link to="/resume" className="txt-3 nav-link text-center" onClick={handleToggle}><li>RESUME</li></Link>
				<Link to="/projects" className="txt-3 nav-link text-center" onClick={handleToggle}><li>PROJECTS</li></Link>
				<Link to="/contact" className="txt-3 nav-link text-center" onClick={handleToggle}><li>CONTACT</li></Link>
			</ul>
		</>
	)
}

export default Navigation;