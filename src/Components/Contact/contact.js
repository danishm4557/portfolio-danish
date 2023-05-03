import React, { Component, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {

	const [emailSent, setEmailSent] = useState(false);

	const [sendersFirstName, setSendersFirstName] = useState('');

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAIL_PUBLIC_KEY);
		setEmailSent(prev => !prev);
		setSendersFirstName(e.target[0].value)
	}


	return (
		<>
			<div style={{ backgroundColor: 'rgba(230, 218, 206, 1)' }}>
				<div className="row mx-auto">
					<div className="col-12">
						<div className="d-flex justify-content-center row mx-auto txt-8 font-weight-800 mt-5 mb-3 py-3">
							LET'S CONNECT
						</div>
					</div>
				</div>
				<form onSubmit={sendEmail} className={`${emailSent ? "d-none" : ""}`}>
					<div className="row mx-auto justify-content-center mt-3 pb-5">
						<div className="col-11 col-md-8 bg-white py-3 mb-5 shadow-lg rounded">
							<div className="form-row mx-auto py-3">
								<div className="form-group col-md-6">
									<label htmlFor="firstName" className="pl-1">First Name <span className="text-primary">*</span></label>
									<input type="text" name="firstName" id="firstName" className="form-control" placeholder="First Name" />
								</div>
								<div className="form-group col-md-6">
									<label htmlFor="lastName" className="pl-1">Last Name <span className="text-primary">*</span></label>
									<input type="text" name="lastName" id="lastName" className="form-control" placeholder="Last Name" />
								</div>
							</div>
							<div className="form-row mx-auto pb-3">
								<div className="form-group col-12 col-md-8">
									<label htmlFor="email" className="pl-1">Email <span className="text-primary">*</span></label>
									<input type="email" name="email" id="email" className="form-control" placeholder="johndoe@gmail.com" />
								</div>
							</div>
							<div className="form-row mx-auto pb-3">
								<div className="form-group col-12 col-md-8">
									<label htmlFor="subject" className="pl-1">Subject</label>
									<input type="text" name="subject" id="subject" className="form-control" placeholder="New Software Engineering Role at [Company Name]" />
								</div>
							</div>
							<div className="form-row mx-auto pb-3">
								<div className="form-group col-12 col-md-8">
									<label htmlFor="message" className="pl-1">Message</label>
									<textarea type="textbox" name="message" id="message" className="form-control" placeholder="Type a message.." rows="3" />
								</div>
							</div>
							<div className="form-row justify-content-center pb-3">
								<button type="submit" className="btn btn-primary w-95 w-sm-25" style={{ fontSize: '20px' }}>Send</button>
							</div>
						</div>
					</div>
				</form>
				<div className={`${emailSent ? "" : "d-none"}`}>
					<div className="row mx-auto justify-content-center mt-3 pb-5">
						<div className="col-10 col-md-8 mx-auto bg-white py-5 mb-5 px-5 shadow-lg rounded">
							<h3 className="text-center pb-4">Thank you for reaching out!</h3>
							<h5>Hi {sendersFirstName},
								<br />
								<br />
								Thank you for connecting with me. You took the initiative to look over my portfolio and submit this form to connect futher. That means a lot to me.
								<br />
								<br />
								I have received your email and will get back to you soon!
								<br />
								<br />
								Please look out for an email from <span className="font-weight-700">danishm4557@gmail.com</span>.
								<br />
								<br />
								Thank you,
								<br />
								<br />
								Danish Mohiuddin
							</h5>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact