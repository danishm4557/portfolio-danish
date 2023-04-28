import React, { Component } from 'react'
import travelLogicImg from '../../Assets/Images/travelLogic-portfolio-img.jpg'
import crimeFlix from '../../Assets/Images/crimeFlix.jpg'
import './contact.css';

const Contact = () => {
	return (
		<>
			<div style={{ backgroundColor: 'rgba(230, 218, 206, 1)' }}>
				<div class="row mx-auto">
					<div class="col-12">
						<div class="d-flex justify-content-center row mx-auto txt-8 font-weight-800 mt-5 mb-3 py-3">
							LET'S CONNECT
						</div>
					</div>
				</div>
				<form>
					<div class="row justify-content-center mt-3 pb-5">
						<div class="col-10 col-md-8 bg-white py-3 shadow-lg rounded">
							<div class="form-row mx-auto py-3">
								<div class="form-group col-md-6">
									<label for="firstName" className="pl-1">First Name <span class="text-primary">*</span></label>
									<input type="text" class="form-control" placeholder="First Name" />
								</div>
								<div class="form-group col-md-6">
									<label for="lastName" className="pl-1">Last Name <span class="text-primary">*</span></label>
									<input type="text" class="form-control" placeholder="Last Name" />
								</div>
							</div>
							<div class="form-row mx-auto pb-3">
								<div class="form-group col-12 col-md-8">
									<label for="email" className="pl-1">Email <span className="text-primary">*</span></label>
									<input type="email" class="form-control" placeholder="johndoe@gmail.com" />
								</div>
							</div>
							<div class="form-row mx-auto pb-3">
								<div class="form-group col-12 col-md-8">
									<label for="subject" className="pl-1">Subject</label>
									<input type="text" class="form-control" placeholder="New Software Engineering Role at [Company Name]" />
								</div>
							</div>
							<div class="form-row mx-auto pb-3">
								<div class="form-group col-12 col-md-8">
									<label for="message" className="pl-1">Message</label>
									<textarea type="textbox" class="form-control" placeholder="Type a message.." rows="3" />
								</div>
							</div>
							<div class="form-row justify-content-center pb-3">
								<button type="submit" class="btn btn-primary w-25" style={{ fontSize: '20px' }}>Send</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}

export default Contact