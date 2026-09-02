import { useEffect, useState } from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faSquareInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Departments from './pages/Departments/Departments.jsx';
import logo from './utils/images/lg.png';
import { NavDropdown } from 'react-bootstrap';

function App() {
  const [newDate, setNewDate] = useState('');
  useEffect(() => {
    let todayDate = new Date();
    let todayYear = todayDate.getFullYear();
    setNewDate([todayYear])
  }, []);
  
  return (
  <div className="app-layout">

    <Navbar expand="lg" className="navbar">
      <Container>

        <Navbar.Brand>
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center"
            style={{ color: "#dc3545", fontWeight: "bolder", fontSize: "20px" }}
          >
            <img
              src={logo}
              alt="Suba South TVC logo"
              className="sstvc-logo me-2"
              style={{ width: '80px', height: 'auto' }}
            />

            Suba South
            <br />
            Technical & Vocational College
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="bg-light"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown
              title="Admissions"
              id="admissions-dropdown"
            >
              <NavDropdown.Item as={Link} to="/courses">
                Apply
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/courses">
                Our Courses
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="About Us"
              id="aboutus-dropdown">
                <NavDropdown.Item as={Link} to="/about">
                  Who We Are
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/about">
                  Leadership
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/departments">
                  Departments
                </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              Get in touch
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>


    <main className="app-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/departments" element={<Departments />} />
      </Routes>
    </main>


    <footer>
      {/* your existing footer */}
    </footer>

  </div>
);
}

export default App;
