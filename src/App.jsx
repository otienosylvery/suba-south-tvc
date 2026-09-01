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
import logo from './utils/images/lg.png';
import { NavDropdown } from 'react-bootstrap';

function App() {
  const [newDate, setNewDate] = useState('');
  useEffect(() => {
    let todayDate = new Date();
    let todayYear = todayDate.getFullYear();
    setNewDate([todayYear])
  }, []);
  const[admissionsDropdownOpen, setAdmissionsDropdownOpen] = useState(false);
  const[aboutUsDropdownOpen, setAboutUsDropdownOpen] = useState(false);
 

  //   <div>
  //     <Navbar expand="lg" className='position-absolute w-100'>
  //       <Container>
  //         <Navbar.Brand>
  //           <Link to="/" className='navbar-brand d-flex align-items-center' style={{color: "#dc3545"}}>
  //             <img src={logo} alt='Suba South TVC logo' className='sstvc-logo me-2'
  //               style={{ width: '80px', height: 'auto' }}
  //             />
  //             <span className='mx-2 text-light lh-1 fw-bold'>
  //               Suba South
  //               <br></br>
  //               Technical & Vocational College
  //             </span>
  //           </Link>
  //         </Navbar.Brand>
  //         <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light' />
  //         <Navbar.Collapse id='basic-navbar-nav'>
  //           <Nav className='me-auto justify-content-end w-100'>
  //             <Link to='/' className='nav-link text-uppercase'>Home</Link>
  //             <Link to='/courses' className='nav-link text-uppercase'>Our courses</Link>
  //             <Link to='/about' className='nav-link text-uppercase'>About us</Link>
  //             <Link to='/blog' className='nav-link text-uppercase'>Blog</Link>
  //             <Link to='/contact' className='nav-link text-uppercase'>Get in touch</Link>
  //           </Nav>
  //         </Navbar.Collapse>
  //       </Container>
  //     </Navbar>

  //     <Routes>
  //       <Route path='/' element={<Home />} />
  //       <Route path='/courses' element={<Courses />} />
  //       <Route path='/about' element={<About />} />
  //       <Route path='/blog' element={<Blog />} />
  //       <Route path='/contact' element={<Contact />} />
  //     </Routes>

  //     <footer>
  //       <div className='container my-5'>
  //         <div className='row d-flex justify-content-between align-items-center'>
  //           <div className='col-md-7'>
  //             <div className='d-row d-md-flex justify-content-between align-items-center'>
  //               <div className='col-md-6 col-lg-5'>
  //                 <ul className='footer-navigation list-unstyled mb-0'>
  //                   <Link to="/" className='text-decoration-none text-danger'>
  //                     <li className='fw-semibold'>Home</li>
  //                   </Link>
  //                   <Link to="/courses" className='text-decoration-none text-danger'>
  //                     <li className='fw-semibold'>Our courses</li>
  //                   </Link>
  //                   <Link to="/about" className='text-decoration-none text-danger'>
  //                     <li className='fw-semibold'>About us</li>
  //                   </Link>
  //                   <Link to="/blog" className='text-decoration-none text-danger'>
  //                     <li className='fw-semibold'>Blog</li>
  //                   </Link>
  //                   <Link to="/contact" className='text-decoration-none text-danger'>
  //                     <li className='fw-semibold'>Get in touch</li>
  //                   </Link>
  //                 </ul>
  //               </div>

  //               <div className='col-sm-6 col-lg-7 my-4 my-md-0'>
  //                 <ul className='footer-social-icons list-unstyled d-flex justify-content-sm-between'>
  //                   <Link to="https://www.facebook.com/p/Suba-South-Technical-and-Vocational-College-61584874164969/" target="_blank" rel="noopener noreferrer">
  //                     <li>
  //                       <FontAwesomeIcon icon={faSquareFacebook} />
  //                     </li>
  //                   </Link>
  //                   <Link to="/contact">
  //                     <li className='mx-3 mx-sm-0'>
  //                       <FontAwesomeIcon icon={faSquareInstagram} />
  //                     </li>
  //                   </Link>
  //                   <Link to="/contact">
  //                     <li className='me-3 me-sm-0'>
  //                       <FontAwesomeIcon icon={faTiktok} />
  //                     </li>
  //                   </Link>
  //                   <Link to="/contact">
  //                     <li>
  //                       <FontAwesomeIcon icon={faYoutube} />
  //                     </li>
  //                   </Link>
  //                 </ul>
  //               </div>
  //             </div>
  //           </div>

  //           <div className='col-md-4'>
  //             <ul className='list-unstyled mb-0'>
  //               <li>
  //                 <p>Main Address: Magunga, Kenya</p>
  //               </li>
  //               <li>
  //                 <p>Phone Number: <a href="tel:+254721226990" className='text-dark'>+254 721 226 990</a></p>
  //               </li>
  //               <li>
  //                 <p>Email: <a href="mailto:subasouthtvc@gmail.com" className='text-dark'>subasouthtvc@gmail.com</a></p>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //       </div>
  //       <div className='bg-body-tertiary'>
  //         <div className='container'>
  //           <p className='p-3 m-0 text-center'>&copy; {newDate} Suba South TVC </p>
  //         </div>
  //       </div>
  //     </footer>
  //   </div>
  // );
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
              show={admissionsDropdownOpen}
              onMouseEnter={() => setAdmissionsDropdownOpen(true)}
              onMouseLeave={() => setAdmissionsDropdownOpen(false)}
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
              id="aboutus-dropdown"
              show={aboutUsDropdownOpen}
              onMouseEnter={() => setAboutUsDropdownOpen(true)}
              onMouseLeave={() => setAboutUsDropdownOpen(false)}
            >
              <NavDropdown.Item as={Link} to="/about">
                Who We Are
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about">
                Leadership
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about">
                Departments
              </NavDropdown.Item>
            </NavDropdown>

            {/* <Nav.Link as={Link} to="/about">
              About us
            </Nav.Link> */}

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
      </Routes>
    </main>


    <footer>
      {/* your existing footer */}
    </footer>

  </div>
);
}

export default App;
