import React from 'react';
import './ChooseSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGraduationCap,
    faLightbulb,
    faUsers
} from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';

function ChooseSection() {
    return (
        <div className="choose-section">
            <div className="container">

                <div className="choose-heading text-center">
                    <span>WHY CHOOSE US</span>

                    <h2>
                        Why choose Suba South TVC?
                    </h2>

                    <p>
                        We are committed to helping learners develop practical
                        skills, confidence and competencies for the future.
                    </p>
                </div>

                <div className="row g-4 mt-4">

                    <div className="col-lg-4">
                        <Card className="choose-card border-0 h-100">
                            <div className="choose-icon">
                                <FontAwesomeIcon icon={faGraduationCap} />
                            </div>

                            <Card.Body>
                                <Card.Title>
                                    Practical Training
                                </Card.Title>

                                <Card.Text>
                                    Our focus is on practical learning that
                                    enables students to develop useful,
                                    hands-on skills that can be applied
                                    beyond the classroom.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>


                    <div className="col-lg-4">
                        <Card className="choose-card border-0 h-100">
                            <div className="choose-icon">
                                <FontAwesomeIcon icon={faLightbulb} />
                            </div>

                            <Card.Body>
                                <Card.Title>
                                    Skills for Opportunity
                                </Card.Title>

                                <Card.Text>
                                    We equip learners with relevant technical
                                    and vocational competencies that can support
                                    employment, entrepreneurship and continued
                                    professional growth.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>


                    <div className="col-lg-4">
                        <Card className="choose-card border-0 h-100">
                            <div className="choose-icon">
                                <FontAwesomeIcon icon={faUsers} />
                            </div>

                            <Card.Body>
                                <Card.Title>
                                    Supportive Learning
                                </Card.Title>

                                <Card.Text>
                                    We aim to create a welcoming learning
                                    environment where students can develop
                                    their abilities, confidence and potential.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ChooseSection;