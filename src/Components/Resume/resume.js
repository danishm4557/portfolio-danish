import React, { Component, useState } from 'react';
import { FaDownload, FaLinkedin, FaInstagram } from 'react-icons/fa';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resumePdf from '../../Assets/Resume - Danish Mohiuddin2.pdf'
// import "react-pdf/dist/esm/Page/TextLayer.css";
import './resume.css'
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {

	const resumeDownloadLink = 'https://drive.google.com/uc?id=1rJQh05C6w_5E-shIgbXaUcMEY8rO0JWA&export=download';

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
					<div className="col-3 col-lg-2 ml-auto ml-md-0">
						<div className="d-flex justify-content-center align-items-center row mx-auto txt-8 font-weight-800 mt-5 mb-3 pb-3" style={{ paddingTop: '1.27rem' }}>
							<a href={resumeDownloadLink} className="px-0 text-decoration-none"><span className="d-none d-md-block btn btn-primary download-btn">Download CV</span></a>
							<a href={resumeDownloadLink} className="px-0 text-decoration-none"><span className="d-flex d-md-none justify-content-center btn btn-primary resume-btn"><FaDownload className="txt-5" /></span></a>
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
			</div >
		</>
	)
}

export default Resume