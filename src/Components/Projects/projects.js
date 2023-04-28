import React, { Component } from 'react'
import travelLogicImg from '../../Assets/Images/travelLogic-portfolio-img.jpg'
import crimeFlix from '../../Assets/Images/crimeFlix.jpg'
import './projects.css';

const Projects = () => {
	return (
		<>
			<div style={{ backgroundColor: 'rgba(230, 218, 206, 1)' }}>
				<div class="row mx-auto">
					<div class="col-12">
						<div class="d-flex justify-content-center row mx-auto txt-8 font-weight-800 mt-5 mb-3 py-3">
							PROJECTS
						</div>
					</div>
				</div>
				<div class="row mx-auto">
					<div class="col-12 col-md-8 px-3 mx-auto text-center">
						<div class="d-flex row mx-auto justify-content-center mb-4 pb-4 lh-lg">
							Listed below are some applications I have built from scratch. In these projects, I applied both my front-end and back-end knowledge. My biggest asset in these projects has been working with JavaScript/React and successfully problem solving my way through to getting things to function properly. Working in the back-end has also been a common endeavor which I have managed to tackle my way through many times. Currently, I'm developing another MERN stack application which will be included here once it is fully functioning!
						</div>
					</div>
				</div>
				{/* TravelLogic */}
				<div class="d-flex justify-content-center align-items-center align-items-md-start mx-auto pb-5">
					<div class="col-12 col-sm-10 col-md-12 col-lg-10">
						<div class="d-flex flex-column flex-md-row justify-content-center mx-auto">
							<div class="col-12 col-md-6 bg-white shadowCss">
								<div class="txt-6 font-weight-700 text-primary py-2">TravelLogic</div>
								<div class="d-flex">
									<a href="https://github.com/danishm4557/TravelLogic-Frontend1" target="_blank" class="text-black font-weight-600" style={{ textDecoration: 'underline' }}>View on Github</a>
									<a href="https://travel-logic-frontend.herokuapp.com/" target="_blank" class="text-black mx-3 font-weight-600 link-offset-1" style={{ textDecoration: 'underline' }}>Deployed Application</a>
								</div>
								<div class="d-flex py-3 lh-lg">
									Planning a vacation can be stressful at times. First, you may not know which places to visit in a new city. Once you have that figured out, then you're challenged with another task; planning out an order of places to visit. Using MERN and a few APIs, I was able to create a full-stack CRUD application which allows automation of this tedious task. User can simply type in a city name and length of their stay, and TravelLogic returns a time-blocked schedule with POI's in the area as well as each POI's useful details.
								</div>
							</div>
							<div class="col-12 col-md-4 px-0 shadowCss">
								<img src={travelLogicImg} className="w-100 h-100" />
							</div>
						</div>
					</div>
				</div>
				{/* CrimeFlix */}
				<div class="d-flex justify-content-center align-items-center align-items-md-start mx-auto pb-5">
					<div class="col-12 col-sm-10 col-md-12 col-lg-10">
						<div class="d-flex flex-column flex-md-row justify-content-center mx-auto">
							<div class="col-12 col-md-6 bg-white shadowCss">
								<div class="txt-6 font-weight-700 text-primary py-2">CrimeFlix</div>
								<div class="d-flex">
									<a href="https://github.com/danishm4557/crimeFlix" target="_blank" class="text-black font-weight-600" style={{ textDecoration: 'underline' }}>View on Github</a>
									<a href="https://crimeflix.herokuapp.com/" target="_blank" class="text-black mx-3 font-weight-600 link-offset-1" style={{ textDecoration: 'underline' }}>Deployed Application</a>
								</div>
								<div class="d-flex py-3 lh-lg">
									Too many times I have been asked if I have watched a certain crime movie or tv show and have had to respond with a denial. Crime Flix is inspired by all the crime genre movies and tv shows which I have NOT watched due to only having a subscription to Netflix. I decided to tackle this issue by building a brand new platform using a JavaScript, EJS and incorporating that within an MVC pattern. Currently, I only have trailers on my webpage and not full movies due to CopyRight issues.
								</div>
							</div>
							<div class="col-12 col-md-4 px-0 shadowCss">
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