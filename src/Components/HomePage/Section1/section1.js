import React, { useState, useEffect } from 'react'
import "./section1.css"
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
// import Background_4_f_Videvo from '../../../Assets/Images/Background_4_f_Videvo.mp4';
import headshot_pic from '../../../Assets/Images/headshot-profile-pic-200px.png'
import { Link, useLocation } from 'react-router-dom';



const Section1 = () => {
	return (
		<>
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossOrigin="anonymous"></script>
			<div className="row mx-auto" id="section1Container">
				{/* WVP */}
				<div className="d-none d-md-flex px-0">
					<div className="col-12 col-md-5 left-column-container">
						<div className="row mx-auto my-5 py-5">
							<div className="w-90 w-sm-75 w-lg-90 mx-auto profile-card px-0">
								<div className="row mx-auto pt-5">
									<div className="col-12 d-flex justify-content-center pb-4">
										<img src={headshot_pic} className="profile-pic" style={{ borderRadius: '50%' }} />
									</div>
									<div className="col-12 d-flex justify-content-center txt-8 font-weight-800 text-center pb-4" style={{ letterSpacing: '0.18vw' }}>
										Danish<br />Mohiuddin
									</div>
									<div className="col-2 mx-auto" style={{ borderBottom: '2px solid black' }}></div>
									<div className="col-12 d-flex justify-content-center text-center txt-5 py-4">
										SOFTWARE ENGINEER
									</div>
									<div className="col-12 d-flex justify-content-evenly align-items-center bg-white profile-card-social-links mt-4">
										<div className="row mx-auto d-flex align-items-center py-3">
											<div className="col-4">
												<a href="https://github.com/danishm4557" target="_blank" className="text-black social-link"><FaGithub className="txt-8 mx-3" /></a>
											</div>
											<div className="col-4">
												<a href="https://www.linkedin.com/in/danishmohiuddin/" target="_blank" className="text-black social-link"><FaLinkedin className="txt-8 mx-3" /></a>
											</div>
											<div className="col-4">
												<a href="https://www.instagram.com/natureintel/" target="_blank" className="text-black social-link"><FaInstagram className="txt-8 mx-3" /></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-7 right-column-container">
						<div className="row mx-auto w-80 w-lg-70 w-xl-60 my-5 py-5">
							<div className="col-12">
								<span className="font-weight-900 hello-text">Hello</span>
								<div className="mb-5 px-1 txt-5 font-weight-600">
									I build things for the web.
								</div>
								<div className="mb-5 px-1">
									<Link to="/resume" className="btn btn-primary resume-btn">RESUME</Link>
									<Link to="/projects" className="btn btn-outline-dark projects-btn mx-3">PROJECTS</Link>
								</div>
								<div className="mb-5 px-1 intro-div">
									I'm a Chicago-based software engineer who specializes in designing and building exceptional digital experiences. Currently, I'm freelancing various projects focused on accessible, human-centered products. I take pride in my work as it revolves around creating solutions for unnecessary problems and making each user's experience a pleasant one.
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* NVP */}
				<div className="d-block d-md-none px-0">
					<div className="row mx-auto">
						<div className="col-12 left-column-container">
							<div className="row mx-auto my-5">
								<div className="w-90 w-sm-75 w-lg-90 mx-auto profile-card px-0">
									<div className="row mx-auto pt-5">
										<div className="col-12 d-flex justify-content-center pb-4">
											<img src={headshot_pic} className="profile-pic" style={{ borderRadius: '50%' }} />
										</div>
										<div className="col-12 d-flex justify-content-center txt-8 font-weight-800 text-center pb-4" style={{ letterSpacing: '0.18vw' }}>
											Danish<br />Mohiuddin
										</div>
										<div className="col-2 mx-auto" style={{ borderBottom: '2px solid black' }}></div>
										<div className="col-12 d-flex justify-content-center txt-5 py-4">
											SOFTWARE ENGINEER
										</div>
										<div className="col-12 d-flex justify-content-evenly align-items-center bg-white profile-card-social-links mt-4">
											<div className="row mx-auto d-flex align-items-center py-3">
												<div className="col-4">
													<a href="https://github.com/danishm4557" target="_blank" className="text-black social-link"><FaGithub className="txt-8 mx-3" /></a>
												</div>
												<div className="col-4">
													<a href="https://www.linkedin.com/in/danishmohiuddin/" target="_blank" className="text-black social-link"><FaLinkedin className="txt-8 mx-3" /></a>
												</div>
												<div className="col-4">
													<a href="https://www.instagram.com/natureintel/" target="_blank" className="text-black social-link"><FaInstagram className="txt-8 mx-3" /></a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row mx-auto">
						<div className="col-12">
							<div className="row mx-auto mt-3 mb-5">
								<div className="col-12">
									<span className="font-weight-900 hello-text">Hello</span>
									<div className="mb-5 px-1 txt-5 font-weight-600">
										I build things for the web.
									</div>
									<div className="mb-5 px-1">
										<a href="/resume"><button className="btn btn-primary resume-btn">RESUME</button></a>
										<a href="/projects"><button className="btn btn-outline-dark projects-btn mx-3">PROJECTS</button></a>
									</div>
									<div className="px-1 intro-div">
										I'm a Chicago-based software engineer who specializes in designing and building exceptional digital experiences. Currently, I'm freelancing various projects focused on accessible, human-centered products. I take pride in my work as it revolves around creating solutions for unnecessary problems and making each user's experience a pleasant one.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div >
		</>
	)
}

export default Section1;