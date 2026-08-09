import React, { useRef, useState, useEffect, useMemo } from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/eeff3acf4f80ef3af09f9ca7e0618548';

// Free Kenya counties API — https://kenyaareadata.vercel.app
const KENYA_AREAS_ENDPOINT = import.meta.env.VITE_KENYA_AREAS_ENDPOINT;

// Used only if the API call fails, so the form still works.
const FALLBACK_LOCATIONS = [
  'Homa Bay', 'Kisii', 'Migori', 'Siaya', 'Busia',
  'Nairobi', 'Kisumu', 'Kakamega', 'Bungoma', 'Mombasa', 'Nakuru'
];

function Contact() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [location, setLocation] = useState('');
    const [subCounty, setSubCounty] = useState('');
    const [message, setMessage] = useState('');

    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [addressError, setAddressError] = useState(false);
    const [locationError, setLocationError] = useState(false);
    const [subCountyError, setSubCountyError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    // Locations (+ nested subcounty/ward data) pulled from the Kenya areas API
    const [locations, setLocations] = useState([]);
    const [areasData, setAreasData] = useState({});
    const [locationsLoading, setLocationsLoading] = useState(true);
    const [locationsError, setLocationsError] = useState(false);

  const form = useRef();
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  // Fetch counties (with nested subcounties/wards) from the Kenya Data API on mount
  useEffect(() => {
    let isMounted = true;

    const fetchLocations = async () => {
      setLocationsLoading(true);
      setLocationsError(false);
      try {
        const response = await fetch(KENYA_AREAS_ENDPOINT);
        if (!response.ok) {
          throw new Error(`Kenya areas API responded with ${response.status}`);
        }
        const data = await response.json();

        // The API returns an object keyed by county name, each mapping to an
        // object of subcounty (constituency) -> wards, e.g.
        // { "Mombasa": { "Changamwe": [...wards], "Jomvu": [...] }, "Nairobi": {...} }
        const countyNames = Object.keys(data).filter(Boolean).sort();

        if (isMounted && countyNames.length > 0) {
          setLocations(countyNames);
          setAreasData(data);
          setLocation(countyNames[0]);
        } else if (isMounted) {
          throw new Error('No counties returned');
        }
      } catch (error) {
        console.error('Error fetching locations:', error);
        if (isMounted) {
          setLocations(FALLBACK_LOCATIONS);
          setAreasData({});
          setLocation(FALLBACK_LOCATIONS[0]);
          setLocationsError(true);
        }
      } finally {
        if (isMounted) {
          setLocationsLoading(false);
        }
      }
    };

    fetchLocations();
    return () => {
      isMounted = false;
    };
  }, []);

  // Subcounties available for the currently selected location
  const subCounties = useMemo(() => {
    const countyData = areasData[location];
    if (!countyData) return [];
    return Object.keys(countyData).sort();
  }, [areasData, location]);

  // Keep the selected subcounty in sync whenever the location (or the
  // available subcounty list) changes
  useEffect(() => {
    if (subCounties.length > 0) {
      setSubCounty((current) => (subCounties.includes(current) ? current : subCounties[0]));
    } else if (!locationsError) {
      setSubCounty('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subCounties]);

  const sendEmail = async (e) => {
    e.preventDefault();

    setFirstNameError(firstName === '');
    setLastNameError(lastName === '');
    setEmailError(email === '');
    setAddressError(address === '');
    setLocationError(location === '');
    setSubCountyError(subCounty === '');
    setMessageError(message === '');

    if (
      firstName !== '' &&
      lastName !== '' &&
      email !== '' &&
      address !== '' &&
      location !== '' &&
      subCounty !== '' &&
      message !== ''
    ) {
      setStatus('sending');

      const templateParams = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        address: address,
        location: location,
        subCounty: subCounty,
        message: message,
        _subject: 'New contact form submission',
        _template: 'table', // formats the email as a clean table
        _autoresponse: `Hi ${firstName},\n\nThanks for reaching out to Magunga Main Campus — we've received your message and will get back to you as soon as possible.\n\nBest regards,\nThe Team`
      };

      try {
        const response = await fetch(FORMSUBMIT_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(templateParams)
        });

        if (!response.ok) {
          throw new Error(`FormSubmit responded with ${response.status}`);
        }

        console.log('Message sent successfully!');
        setStatus('success');
        // Reset form fields after successful submission
        setFirstName('');
        setLastName('');
        setEmail('');
        setAddress('');
        setLocation(locations[0] || '');
        setSubCounty('');
        setMessage('');
      } catch (error) {
        console.error('Error sending message:', error);
        setStatus('error');
      }
    }
  };

  return (
    <div className='contact-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Get In Touch</h1>
                <p className='text-center w-75 mb-5'>Should you require any further assistance or have any questions, please do not hesitate to reach out to us
                    
                    .</p>
            </div>
        </header>

        <div className='container my-5 d-flex justify-content-center'>
            <Form id='contact-form' ref={form} onSubmit={sendEmail} noValidate>
                <Row className='mb-3'>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            placeholder='First name'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            isInvalid={firstNameError}
                        />
                        <Form.Control.Feedback type='invalid'>First name is required.</Form.Control.Feedback>
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            placeholder='Last name'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            isInvalid={lastNameError}
                        />
                        <Form.Control.Feedback type='invalid'>Last name is required.</Form.Control.Feedback>
                    </Col>
                </Row>

                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        isInvalid={emailError}
                    />
                    <Form.Control.Feedback type='invalid'>Email is required.</Form.Control.Feedback>
                    <Form.Text className='text-muted'>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        placeholder='Your address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        isInvalid={addressError}
                    />
                    <Form.Control.Feedback type='invalid'>Address is required.</Form.Control.Feedback>
                </Form.Group>

                <Row className='mb-3'>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>Location (County)</Form.Label>
                        <Form.Select
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            isInvalid={locationError}
                            disabled={locationsLoading}
                        >
                            {locationsLoading && <option>Loading counties...</option>}
                            {!locationsLoading && locations.map((loc) => (
                                <option key={loc} value={loc}>{loc}</option>
                            ))}
                        </Form.Select>
                        {locationsError && (
                            <Form.Text className='text-warning'>
                                Couldn't load counties from the API — showing a default list instead.
                            </Form.Text>
                        )}
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Label>Subcounty</Form.Label>
                        {locationsError ? (
                            <>
                                <Form.Control
                                    placeholder='Your subcounty'
                                    value={subCounty}
                                    onChange={(e) => setSubCounty(e.target.value)}
                                    isInvalid={subCountyError}
                                />
                                <Form.Control.Feedback type='invalid'>Subcounty is required.</Form.Control.Feedback>
                            </>
                        ) : (
                            <>
                                <Form.Select
                                    value={subCounty}
                                    onChange={(e) => setSubCounty(e.target.value)}
                                    isInvalid={subCountyError}
                                    disabled={locationsLoading || subCounties.length === 0}
                                >
                                    {locationsLoading && <option>Loading subcounties...</option>}
                                    {!locationsLoading && subCounties.length === 0 && (
                                        <option>No subcounties found</option>
                                    )}
                                    {!locationsLoading && subCounties.map((sc) => (
                                        <option key={sc} value={sc}>{sc}</option>
                                    ))}
                                </Form.Select>
                                <Form.Control.Feedback type='invalid'>Subcounty is required.</Form.Control.Feedback>
                            </>
                        )}
                    </Col>
                </Row>

                <Form.Group className='mb-3'>
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={6}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        isInvalid={messageError}
                    />
                    <Form.Control.Feedback type='invalid'>Message is required.</Form.Control.Feedback>
                </Form.Group>

                {status === 'success' && (
                    <Alert variant='success' className='mb-3'>
                        Thanks! Your message has been sent — we'll get back to you soon.
                    </Alert>
                )}
                {status === 'error' && (
                    <Alert variant='danger' className='mb-3'>
                        Something went wrong sending your message. Please try again.
                    </Alert>
                )}

                <Button variant="danger btn-lg" type='submit' disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending...' : 'Submit'}
                </Button>
            </Form>
        </div>

        <div className='bg-dark text-light p-5'>
            <div className='container'>
                <h2 className='text-center mb-5'>Our Location</h2>
                <div className='align-items-center d-flex justify-content-center'>
                    
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.529507207836!2d34.14814112478966!3d-0.6894013993038757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d4ea0101af0027%3A0xd3ce9db0116d9e8e!2sMagunga!5e0!3m2!1sen!2ske!4v1784691287866!5m2!1sen!2ske" 
                        title="Suba South Technical and Vocational College location map"
                        width="100%" 
                        height="450" 
                        style={{marginRight:  'em'}}
                        allowFullscreen="" 
                        loading="lazy" 
                        referrerpolicy="strict-origin-when-cross-origin">
                        </iframe>
                        
                        
                    
                </div>
                <h3 className='text-center mt-3'>Magunga Main Campus</h3>
            </div>
        </div>
    </div>
  )
}

export default Contact;