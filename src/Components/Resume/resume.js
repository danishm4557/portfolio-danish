import React, { Component, useState } from 'react';
import { FaDownload, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resumePdf from '../../Assets/resume.pdf'
import "react-pdf/dist/esm/Page/TextLayer.css";
import './resume.css'

const Resume = () => {
	return (
		<>
			<div style={{ backgroundColor: 'rgba(230, 218, 206, 1)' }}>
				<div className="row mx-auto">
					<div className="col-4">
						<div className="d-flex justify-content-center row mx-auto txt-8 font-weight-800 mt-5 mb-3 py-3"></div>
					</div>
					<div className="col-4">
						<div className="d-flex justify-content-center row mx-auto txt-8 font-weight-800 mt-5 mb-3 py-3">
							RESUME
						</div>
					</div>
					<div className="col-3 col-md-2 ml-auto">
						<div className="d-flex justify-content-center align-items-center row mx-auto txt-8 font-weight-800 mt-5 mb-3 pb-3" style={{ paddingTop: '1.27rem' }}>
							<span className="d-none d-md-block btn btn-primary download-btn">Download CV</span>
							<span className="d-flex d-md-none justify-content-center btn btn-primary resume-btn"><FaDownload className="txt-5" /></span>
						</div>
					</div>
				</div>
				<div className="row mx-auto mt-4 pb-4">
					<div className="col-12 d-flex justify-content-center mx-auto pb-5">
						<Document file={resumePdf}>
							<Page pageNumber={1} renderTextLayer={false} />
						</Document>
					</div>
				</div>
			</div>
		</>
	)
}

export default Resume