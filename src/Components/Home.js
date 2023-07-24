import React from 'react';
import Navbar from '../Navbar/navbar';
import book from '../Images/book.jpg';
import book2 from '../Images/book2.jpg';
import book3 from '../Images/book3.jpg'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item" aria-current="page">
                  <Link
                    to="/"
                    className="custom-link text-primary fw-bold text-decoration-none"
                  >
                    Home
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </nav>
      </header>
      <main>
        <div className="container">
          <h1 className="text-center mt-5">Turn your Expertise into revenue with online courses!</h1>
          <Carousel className="mt-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={book3}
                alt="First slide"
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3 className="">Introduction</h3>
                <p className="fw-bold">Lets know what we can teach you!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={book}
                alt="Second slide"
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3 className="">Lectures</h3>
                <p className="fw-bold">More than 500+ videos,pdfs etc</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={book2}
                alt="Second slide"
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3 className="">Test yourself</h3>
                <p className="fw-bold">More than 20+ tests , quizs and more. </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
