import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import {
    FaGraduationCap,
    FaBullseye,
    FaEye,
    FaHandshake,
    FaLightbulb,
    FaUsers,
    FaAward,
    FaArrowRight,
    FaShieldAlt,
    FaSeedling
} from 'react-icons/fa';

import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';

import Person1 from '../../utils/images/person1.jpg';
import Person2 from '../../utils/images/person2.jpg';
import Person3 from '../../utils/images/person3.jpg';
import Person4 from '../../utils/images/person4.jpg';
import Person5 from '../../utils/images/person5.jpg';
import Person6 from '../../utils/images/person6.jpg';
import Person7 from '../../utils/images/person7.jpg';
import Person8 from '../../utils/images/person8.jpg';
import Person9 from '../../utils/images/person9.jpg';

const studentImages = [
    Person1,
    Person2,
    Person3,
    Person4,
    Person5,
    Person6,
    Person7,
    Person8,
    Person9
];

const values = [
    {
        icon: <FaUsers />,
        title: 'Teamwork',
        text: 'We strive for collaboration and unity in all our endeavors.'
    },
    {
        icon: <FaShieldAlt />,
        title: 'Integrity',
        text: 'We promote honesty, accountability and ethical conduct in all that we do.'
    },
    {
        icon: <FaLightbulb />,
        title: 'Innovation',
        text: 'We encourage creativity, practical problem-solving and new ideas.'
    },
    {
        icon: <FaSeedling />,
        title: 'Environmental Sustainability',
        text: 'We strongly believe in creating a sustainable future for all.'
    }
];

function About() {
    return (
        <div className="about-page">

            {/* HERO */}
            <header className="about-hero">
                <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
                    <span className="about-hero-label">SUBA SOUTH TVC</span>

                    <h1 className="text-center fw-bold">
                        About Us
                    </h1>

                    <div className="hero-divider"></div>

                    <p className="text-center">
                        Empowering learners with practical skills, knowledge
                        and opportunities for a better future.
                    </p>
                </div>
            </header>


            {/* INTRODUCTION */}
            <section className="about-intro py-5">
                <div className="container py-lg-5">
                    <div className="row align-items-center g-5">

                        <div className="col-lg-6">
                            <div className="about-image-wrapper">
                                <img
                                    src={AboutUsSectionImg}
                                    className="img-fluid"
                                    alt="Suba South TVC"
                                />

                                <div className="about-image-caption">
                                    <FaGraduationCap />
                                    <div>
                                        <strong>Skills for the Future</strong>
                                        <span>Learning beyond the classroom</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <span className="section-label">
                                    WHO WE ARE
                                </span>

                                <h2>
                                    Welcome to Suba South
                                    <span> Technical & Vocational College</span>
                                </h2>

                                <div className="section-line"></div>

                                <p>
                                    Suba South Technical and Vocational College
                                    is committed to providing quality technical
                                    and vocational education and training that
                                    equips learners with practical skills,
                                    knowledge and competencies for the world
                                    of work.
                                </p>

                                <p>
                                    We believe that practical skills are a
                                    powerful foundation for employment,
                                    entrepreneurship and personal development.
                                    Through training and hands-on learning,
                                    we aim to prepare our students to confidently
                                    pursue opportunities and contribute to the
                                    development of their communities.
                                </p>

                                <Link to="/contact" className="about-btn">
                                    Get In Touch
                                    <FaArrowRight />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* VISION / MISSION */}
            <section className="vision-mission-section">
                <div className="container py-5">
                    <div className="row g-4">
                        <div className="col-lg-4 d-flex flex-column">
                            <span className='spanStyle'>
                                MOTTO
                            </span>
                            
                                <div className="vm-card flex-grow-1">
                                    <div className="vm-icon">
                                        <FaGraduationCap/>
                                    </div>

                                    <div className="vm-content">
                                        <p>
                                            We strive to equip our learners with practical skills, foster innovation and inspire leadership for a brighter future.
                                        </p>
                                    </div>
                                </div>
                        
                        </div>  

                        {/* VISION */}
                        <div className="col-lg-4 d-flex flex-column">
                            <span className='spanStyle'>OUR VISION</span>

                             
                                <div className="vm-card flex-grow-1">
                                    <div className="vm-icon">
                                        <FaEye />
                                    </div>

                                    <div className="vm-content">
                                        <p>
                                            To be the premier institution for technical and vocational training, recognized for excellence, 
                                            skills, and knowledge necessary to thrive in a dynamic economy.
                                        </p>
                                    </div>
                                </div>
                       
                        </div>
                        {/* MISSION */}
                        <div className="col-lg-4 d-flex flex-column">
                            <span className='spanStyle'>OUR MISSION</span>
                            
                            <div className="vm-card flex-grow-1">
                                <div className="vm-icon">
                                    <FaBullseye />
                                </div>

                                <div className="vm-content">
                                    <p>
                                        To equip students with practical skills and hands-on-experience, making them competitive 
                                        in the job market, ready to meet industry demands.
                                    </p>
                                </div>
                            </div>
                       
                        </div>    
                        

                    </div>
                </div>
            </section>


            {/* VALUES */}
            <section className="values-section py-5">
                <div className="container py-lg-5">

                    <div className="section-heading text-center">
                        <span className="section-label">WHAT GUIDES US</span>

                        <h2>
                            Our Core Values
                        </h2>

                        <p>
                            The principles that shape how we teach, learn,
                            work and serve our community.
                        </p>
                    </div>

                    <div className="row g-4 mt-4">

                        {values.map((value, index) => (
                            <div className="col-sm-6 col-lg-3" key={index}>
                                <div className="value-card">
                                    <div className="value-icon">
                                        {value.icon}
                                    </div>

                                    <h4>{value.title}</h4>

                                    <p>{value.text}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>


            {/* WHY CHOOSE */}
            <section className="choose-wrapper">
                <ChooseSection />
            </section>


            {/* STUDENT LIFE */}
            <section className="student-life-section py-5">
                <div className="container py-lg-5">

                    <div className="section-heading text-center">
                        <span className="section-label">LIFE AT SUBA SOUTH TVC</span>

                        <h2>
                            Learning. Growing. Achieving.
                        </h2>

                        <p>
                            Our students are at the heart of everything we do.
                            We provide an environment where learners can develop
                            practical skills, confidence and a strong foundation
                            for their future.
                        </p>
                    </div>

                    <div className="student-gallery mt-5">

                        {studentImages.map((image, index) => (
                            <div className="student-gallery-item" key={index}>
                                <img
                                    src={image}
                                    alt={`Suba South TVC student ${index + 1}`}
                                />
                            </div>
                        ))}

                    </div>

                </div>
            </section>


            {/* CTA */}
            <section className="about-cta">
                <div className="container">
                    <div className="cta-content text-center">

                        <span className="section-label">
                            START YOUR JOURNEY
                        </span>

                        <h2>
                            Your Future Starts With a Skill
                        </h2>

                        <p>
                            Discover opportunities to learn practical skills,
                            develop your potential and prepare for the future.
                        </p>

                        <div className="cta-buttons">

                            <Link to="/courses" className="cta-primary">
                                Explore Courses
                                <FaArrowRight />
                            </Link>

                            <Link to="/contact" className="cta-secondary">
                                Contact Us
                            </Link>

                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default About;