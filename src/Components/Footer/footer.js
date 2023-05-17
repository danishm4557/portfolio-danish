import React, { Component } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
	return (
		<>
			<div className="d-flex flex-column flex-md-row justify-content-between align-items-end mt-3 txt-3 pb-3 pb-md-0">
				<div className="col-12 col-md-4 text-center mb-sm-4 mb-md-0">
					© 2023 by Danish Mohiuddin
				</div>
				<div className="col-12 d-block d-sm-none my-3">
					<div className="d-flex row mx-auto justify-content-center font-weight-600 mb-1 mb-md-3">Email</div>
					<div className="d-flex row mx-auto justify-content-center pt-1 text-break"><a href="mailto:danishm4557@gmail.com" className="text-white text-decoration-underline text-center">danishm4557@gmail.com</a></div>
				</div>
				<div className="col-12 col-md-8">
					<div className="d-flex row-mx-auto justify-content-evenly align-items-end text-center txt-3">
						<div className="col-4">
							<div className="d-flex row justify-content-center font-weight-600 mb-1 mb-md-3">Cell</div>
							<div className="d-flex row justify-content-center pt-1">(773) 441-4557</div>
						</div>
						<div className="col-4 d-none d-sm-block ">
							<div className="d-flex row justify-content-center font-weight-600 mb-1 mb-md-3">Email</div>
							<div className="d-flex row justify-content-center pt-1 text-break"><a href="mailto:danishm4557@gmail.com" className="text-white text-decoration-underline text-center">danishm4557@gmail.com</a></div>
						</div>
						<div className="col-8 col-sm-4">
							<div className="d-flex row mx-auto justify-content-center font-weight-600 mb-1 mb-md-3">Follow</div>
							<div className="row mx-auto pt-1">
								<div className="col-12 pr-0">
									<div className="row mx-auto">
										<div className="col-4 border-right-white">
											<div className="row">
												<a href="https://github.com/danishm4557" target="_blank" className="text-white social-link"><FaGithub className="txt-5 px-0" /></a>
											</div>
										</div>
										<div className="col-4 border-right-white">
											<div className="row">
												<a href="https://www.linkedin.com/in/danishmohiuddin/" target="_blank" className="text-white social-link"><FaLinkedin className="txt-5 px-0" /></a>
											</div>
										</div>
										<div className="col-4">
											<div className="row">
												<a href="https://www.instagram.com/natureintel/" target="_blank" className="text-white social-link"><FaInstagram className="txt-5 px-0" /></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer;