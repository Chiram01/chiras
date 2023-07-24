import React from 'react';
import { Accordion, Col } from 'react-bootstrap';
import Footer from './Footer';
import Navbar from '../Navbar/navbar';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div>
      <Navbar />
      <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
               <li className="breadcrumb-item" aria-current="page">
                <Link to="/" className='text-dark text-primary custom-link text-decoration-none'>Home</Link>
              </li>
              <li className="breadcrumb-item active">
                <Link to="/about" className='custom-link text-primary fw-bold text-decoration-none'>About</Link>
              </li> 
            </ol>
          </nav>
      <br /><br /><br />
      <h2 className='text-center'>Company </h2>
      <div className='d-flex justify-content-center'>
        <Col xs={14} md={8} lg={12}>
          <Accordion defaultActiveKey="0" flush className='acc'>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h2 className='acchead'>Our Mission</h2>
              </Accordion.Header>
              <Accordion.Body className='text-center accon'>
                <strong>Learn - IT</strong>
                <p>Our mission is to help users learn programming more easily</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h2 className='acchead'>Privacy policy</h2>
              </Accordion.Header>
              <Accordion.Body className='text-center accon'>
                <p>
                  1.Links to other sites
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h2 className='acchead'>Contact</h2>
              </Accordion.Header>
              <Accordion.Body className='text-center accon'>
              Get in touch with us by dialing 8765492746
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <h2 className='acchead'>Terms and Conditons</h2>
              </Accordion.Header>
              <Accordion.Body className='text-center accon'>
              Programiz websites ("Websites") and mobile applications ("Apps") and related services (together with the Websites, the "Service") are operated by Parewa Labs Pvt. Ltd.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
