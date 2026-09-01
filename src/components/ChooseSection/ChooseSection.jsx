// import React from 'react';
// import './ChooseSection.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrophy, faFaceSmile, faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import { Card } from 'react-bootstrap';

// function ChooseSection() {
//   return (
//     <div className='choose-section'>
//         <div className="container">
//             <h2 className='text-center mb-5'>Why choose Suba South TVC?</h2>
//             <div className='row g-4'>
//                 <div className='col-lg-4'>
//                     <Card className='d-flex align-items-center border-0 h-100'>
//                         <div className='mt-3'>
//                             <FontAwesomeIcon icon={faTrophy} />
//                         </div>
//                         <Card.Body>
//                             <Card.Title className='text-center mb-3'>
//                                 Received Accolades trophies received
//                             </Card.Title>
//                             <Card.Text className='text-center'>
//                                 Over time, Suba South TVC has obtained various important accolades for the high graduation rate of our students and for the involvement of teachers in their education.
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div>
//                 <div className='col-lg-4'>
//                     <Card className='d-flex align-items-center border-0 h-100'>
//                         <div className='mt-3'>
//                             <FontAwesomeIcon icon={faFaceSmile} />
//                         </div>
//                         <Card.Body>
//                             <Card.Title className='text-center mb-3'>
//                                 We offer maximum training to our students.
//                             </Card.Title>
//                             <Card.Text className='text-center'>
//                                 We always strive to offer the best training practices to our students, so that they can be prepared for the labor market and have a successful career.
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div>
//                 <div className='col-lg-4'>
//                     <Card className='d-flex align-items-center border-0 h-100'>
//                         <div className='mt-3'>
//                             <FontAwesomeIcon icon={faLocationDot} />
//                         </div>
//                         <Card.Body>
//                             <Card.Title className='text-center mb-3'>
//                                 Our Location
//                             </Card.Title>
//                             <Card.Text className='text-center'>
//                                 You can find us primarily in our main campus at Ramula, Kenya.
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ChooseSection;

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