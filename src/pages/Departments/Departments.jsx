import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faComputer,
    faBriefcase,
    faPeopleGroup,
    faGears,
    faUtensils,
    faSeedling,
    faArrowRight,
    faHardHat
} from '@fortawesome/free-solid-svg-icons';

import './Departments.css';

import DepartmentHeaderImg from '../../utils/images/courses-page-header.jpg';
import ComputingImg from '../../utils/images/comp-lab.jpg';
import BusinessImg from '../../utils/images/business-course.jpg';
import LiberalStudiesImg from '../../utils/images/liberal-works.jpg';
import EngineeringImg from '../../utils/images/bnc.png';
import HospitalityImg from '../../utils/images/fnb.jpg';
import AutomotiveImg from '../../utils/images/automotive-engineering.jpg';
import AgricultureImg from '../../utils/images/agriculture.jpg';

const departments = [
    {
        id: 1,
        name: 'Computing & Informatics',
        description:
            'Develop practical digital skills in information technology, software, computing and emerging technologies.',
        icon: faComputer,
        image: ComputingImg,
        slug: 'computing-informatics'
    },
    {
        id: 2,
        name: 'Business Studies',
        description:
            'Build practical knowledge and skills for business, entrepreneurship, management and the modern workplace.',
        icon: faBriefcase,
        image: BusinessImg,
        slug: 'business-studies'
    },
    {
        id: 3,
        name: 'Liberal Studies',
        description:
            'Prepare learners to contribute meaningfully to society through a broad-based education.',
        icon: faPeopleGroup,
        image: LiberalStudiesImg,
        slug: 'liberal-studies'
    },
    {
        id: 4,
        name: 'Building & Civil Engineering',
        description:
            'Gain hands-on technical skills and competencies relevant to engineering, construction and industrial development.',
        icon: faHardHat,
        image: EngineeringImg,
        slug: 'building-civil-engineering'
    },
    {
        id: 5,
        name: 'Hospitality & Institutional Management',
        description:
            'Develop practical skills for careers in hospitality, food service, accommodation and related industries.',
        icon: faUtensils,
        image: HospitalityImg,
        slug: 'hospitality-institutional-management'
    },
    {
        id: 6,
        name: 'Mechanical & Automotive Engineering',
        description:
            'Develop practical skills for careers in automotive engineering, maintenance and repair.',
        icon: faGears,
        image: AutomotiveImg,
        slug: 'mechanical-automotive-engineering'
    },
    {
        id: 7,
        name: 'Agriculture & Environmental Studies',
        description:
            'Acquire practical agricultural skills that support entrepreneurship, food production and sustainable development.',
        icon: faSeedling,
        image: AgricultureImg,
        slug: 'agriculture'
    }
];

function Departments() {
    return (
        <div className="departments-page">

            {/* HERO */}
            <header
                className="departments-hero"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            rgba(5, 10, 35, 0.75),
                            rgba(5, 10, 35, 0.75)
                        ),
                        url(${DepartmentHeaderImg})
                    `
                }}
            >
                <div className="container h-100 d-flex flex-column justify-content-center align-items-center text-center text-light">

                    <span className="departments-hero-label">
                        ACADEMIC DEPARTMENTS
                    </span>

                    <h1>
                        Our Departments
                    </h1>

                    <div className="departments-hero-divider"></div>

                    <p>
                        Explore the departments at Suba South Technical and
                        Vocational College and discover opportunities to build
                        practical skills for the future.
                    </p>

                </div>
            </header>


            {/* INTRODUCTION */}
            <section className="departments-intro py-5">
                <div className="container py-lg-4">

                    <div className="section-heading text-center mb-5">

                        <span className="section-label">
                            LEARN • BUILD • GROW
                        </span>

                        <h2>
                            Explore Our Departments
                        </h2>

                        <p>
                            Our departments provide practical, industry-focused
                            training designed to equip learners with relevant
                            skills, knowledge and competencies for employment,
                            entrepreneurship and lifelong learning.
                        </p>

                    </div>


                    {/* DEPARTMENT CARDS */}
                    <div className="row g-4">

                        {departments.map((department) => (

                            <div
                                className="col-md-6 col-lg-4"
                                key={department.id}
                            >

                                <div className="department-card h-100">

                                    <div className="department-image">

                                        <img
                                            src={department.image}
                                            alt={department.name}
                                        />

                                        <div className="department-icon">
                                            <FontAwesomeIcon
                                                icon={department.icon}
                                            />
                                        </div>

                                    </div>


                                    <div className="department-card-body">

                                        <h3>
                                            {department.name}
                                        </h3>

                                        <p>
                                            {department.description}
                                        </p>

                                        <Link
                                            to={`/departments/${department.slug}`}
                                            className="department-link"
                                        >
                                            View Department

                                            <FontAwesomeIcon
                                                icon={faArrowRight}
                                            />
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>


            {/* CTA */}
            <section className="departments-cta">

                <div className="container">

                    <div className="departments-cta-content text-center">

                        <span className="section-label">
                            START YOUR JOURNEY
                        </span>

                        <h2>
                            Build Skills. Create Opportunities.
                        </h2>

                        <p>
                            Take the next step towards a practical,
                            skills-based education at Suba South TVC.
                        </p>

                        <div className="d-flex justify-content-center gap-3 flex-wrap">

                            <Link
                                to="/courses"
                                className="btn btn-danger btn-lg"
                            >
                                Explore Courses
                            </Link>

                            <Link
                                to="/contact"
                                className="btn btn-outline-light btn-lg"
                            >
                                Contact Us
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default Departments;