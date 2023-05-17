import React, { Component } from 'react'
// import Helmet from 'react-helmet';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import travelLogicImg from '../../Assets/Images/travelLogic-portfolio-img.jpg'
import crimeFlix from '../../Assets/Images/crimeFlix.jpg'
import SLAndBridge from '../../Assets/Images/SLandBridge.jpg'
import pocketGuru from '../../Assets/Images/pocketGuru.jpg'
import './projects.css';

const Projects = () => {
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>Projects - Danish Mohiuddin</title>
					<meta name="description" content="CodeWithDanish is the website name of Danish Mohiuddin's Software Engineering portfolio showcasing many web dev projects and updated resume. Get in touch today using the contact form." />
					<meta name="theme-color" content="#008f68" />
				</Helmet>
			</HelmetProvider>
			<div style={{ backgroundColor: 'rgba(230, 218, 206, 1)' }}>
				<div className="row mx-auto">
					<div className="col-12">
						<div className="d-flex justify-content-center row mx-auto txt-8 font-weight-800 mt-5 mb-3 py-3">
							PROJECTS
						</div>
					</div>
				</div>
				<div className="row mx-auto">
					<div className="col-12 col-md-8 px-3 mx-auto text-center">
						<div className="d-flex row mx-auto justify-content-center mb-4 pb-4 lh-lg font-weight-600">
							Listed below are some applications I have built from scratch. In these projects, I applied both my front-end and back-end knowledge. My biggest asset in these projects has been working with JavaScript/React and successfully problem solving my way through to getting things to function properly. Working in the back-end has also been a common endeavor which I have managed to tackle my way through many times. Currently, I'm developing another MERN stack application which will be included here once it is fully functioning!
						</div>
					</div>
				</div>
				{/* Bridge ShopLocal */}
				<div className="d-flex justify-content-center align-items-center align-items-md-start mx-auto pb-5">
					<div className="col-12 col-sm-10 col-md-12 col-lg-10">
						<div className="d-flex flex-column flex-md-row justify-content-center mx-auto">
							<div className="col-12 col-md-6 bg-white shadowCss">
								<div className="txt-6 font-weight-700 text-primary pt-2">Bridge Shop Local</div>
								<div className="pb-2">Current Position</div>
								<div className="d-flex">
									<a href="https://shoplocal.org" target="_blank" className="text-black font-weight-600" style={{ textDecoration: 'underline' }}>Sales Site</a>
									<a href="https://bridge.myshoplocal.com" target="_blank" className="text-black mx-3 font-weight-600 link-offset-1" style={{ textDecoration: 'underline' }}>Bridge SL Platform</a>
								</div>
								<div className="d-flex flex-column py-3 lh-lg">
									<li>Being part of a small team, I was required to wear many hats at work. Worked in both front-end (utilized Bootstrap and JQuery) and back-end (utilized MySQL).</li>
									<li>With no prior experience using ColdFusion, I was required to learn ColdFusion very quickly on the job. My seniors were impressed with how quickly I was able to learn the language and effectively contribute to our codebase.</li>
									<li>Completed 600 tasks to date (05/3/2023). Every task was designed to be responsive. Confirmed every new feature I implement looked excellent on both mobile and desktop. When I noticed other previously built features which did not look great on mobile or desktop, I always went out of my way to fix it so it looks as expected on all viewports.</li>
									<li>With some prior experience using PostgreSQL, I had no issues transitioning to MySQL. Worked with a large database of customers, retailers, brands, sales reps, etc.</li>
									<li>Continuous communication with seniors, other teammates, and CEO of company. Also participated in a Developer's meeting every Monday morning where I shared with the team what tasks I had been working on and what new features should be implement to improve the software. As a team, we also enjoyed a lot of football conversations.</li>
								</div>
							</div>
							<div className="col-12 col-md-4 px-0 shadowCss">
								<img src={SLAndBridge} className="w-100 h-100" />
							</div>
						</div>
					</div>
				</div>
				{/* PocketGuru */}
				<div className="d-flex justify-content-center align-items-center align-items-md-start mx-auto pb-5">
					<div className="col-12 col-sm-10 col-md-12 col-lg-10">
						<div className="d-flex flex-column flex-md-row justify-content-center mx-auto">
							<div className="col-12 col-md-6 bg-white shadowCss">
								<div className="txt-6 font-weight-700 text-primary py-2">Pocket Guru</div>
								<div className="d-flex">
									<a href="https://github.com/danishm4557/PocketGuru" target="_blank" className="text-black font-weight-600" style={{ textDecoration: 'underline' }}>View on Github</a>
									<a href="https://travel-logic-frontend.herokuapp.com/" target="_blank" className="text-black mx-3 font-weight-600 link-offset-1" style={{ textDecoration: 'underline' }}>Deployed Application</a>
								</div>
								<div className="d-flex py-3 lh-lg">
									PocketGuru consists of a collection of simple mobile applications that include a calculator, weather app, news app, and others. For this project, I used React.js to create multiple components for each application. Each component has its own functionality and user interface. By breaking down each application into individual components, I was able to create a clean and modular codebase that can be easily extended and customized in the future.<br />Reason behind one project consisting of multiple small projects is so I can demonstrate my skills and ability to create a broad range of application from scratch.
								</div>
							</div>
							<div className="col-12 col-md-4 px-0 shadowCss">
								<img src={pocketGuru} className="w-100 h-100" />
							</div>
						</div>
					</div>
				</div>
				{/* TravelLogic */}
				<div className="d-flex justify-content-center align-items-center align-items-md-start mx-auto pb-5">
					<div className="col-12 col-sm-10 col-md-12 col-lg-10">
						<div className="d-flex flex-column flex-md-row justify-content-center mx-auto">
							<div className="col-12 col-md-6 bg-white shadowCss">
								<div className="txt-6 font-weight-700 text-primary py-2">Travel Logic</div>
								<div className="d-flex">
									<a href="https://github.com/danishm4557/TravelLogic-Frontend1" target="_blank" className="text-black font-weight-600" style={{ textDecoration: 'underline' }}>View on Github</a>
									<a href="https://travel-logic-frontend.herokuapp.com/" target="_blank" className="text-black mx-3 font-weight-600 link-offset-1" style={{ textDecoration: 'underline' }}>Deployed Application</a>
								</div>
								<div className="d-flex py-3 lh-lg">
									Planning a vacation can be stressful at times. First, you may not know which places to visit in a new city. Once you have that figured out, then you're challenged with another task; planning out an order of places to visit. Using MERN and a few APIs, I was able to create a full-stack CRUD application which allows automation of this tedious task. User can simply type in a city name and length of their stay, and TravelLogic returns a time-blocked schedule with POI's in the area as well as each POI's useful details.
								</div>
							</div>
							<div className="col-12 col-md-4 px-0 shadowCss">
								<img src={travelLogicImg} className="w-100 h-100" />
							</div>
						</div>
					</div>
				</div>
				{/* CrimeFlix */}
				<div className="d-flex justify-content-center align-items-center align-items-md-start mx-auto pb-5">
					<div className="col-12 col-sm-10 col-md-12 col-lg-10 pb-3">
						<div className="d-flex flex-column flex-md-row justify-content-center mx-auto">
							<div className="col-12 col-md-6 bg-white shadowCss">
								<div className="txt-6 font-weight-700 text-primary py-2">CrimeFlix</div>
								<div className="d-flex">
									<a href="https://github.com/danishm4557/crimeFlix" target="_blank" className="text-black font-weight-600" style={{ textDecoration: 'underline' }}>View on Github</a>
									<a href="https://crimeflix.herokuapp.com/" target="_blank" className="text-black mx-3 font-weight-600 link-offset-1" style={{ textDecoration: 'underline' }}>Deployed Application</a>
								</div>
								<div className="d-flex py-3 lh-lg">
									Too many times I have been asked if I have watched a certain crime movie or tv show and have had to respond with a denial. Crime Flix is inspired by all the crime genre movies and tv shows which I have NOT watched due to only having a subscription to Netflix. I decided to tackle this issue by building a brand new platform using a JavaScript, EJS and incorporating that within an MVC pattern. Currently, I only have trailers on my webpage and not full movies due to CopyRight issues.
								</div>
							</div>
							<div className="col-12 col-md-4 px-0 shadowCss">
								<img src={crimeFlix} className="w-100 h-100" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Projects