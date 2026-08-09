import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';
import { AccordionHeader } from 'react-bootstrap';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam rem expedita similique necessitatibus dolore magnam natus sit ipsa, quae neque accusantium placeat laudantium mollitia, reprehenderit alias incidunt, delectus obcaecati cupiditate sed omnis repudiandae eos! Quasi unde veritatis labore quibusdam.</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>How do I apply for a course?</Accordion.Header>
                    <Accordion.Body>
                        To apply for a course, you need to fill out the application form available on our website and submit the required documents online or physicically at our main campus. Once your application is reviewed, you will receive a confirmation email with further instructions.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>What are the minimum requirements for admission?</Accordion.Header>
                    <Accordion.Body>
                        The minimum requirements for admission vary depending on the course you are applying for. Please refer to the course details on our website for the exact requirements.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Is financial aid or a student loan available?</Accordion.Header>
                    <Accordion.Body>
                        Yes. You can apply for government loans and bursaries through the Higher Education Loans Board (HELB) TVET Portal. Bursaries are also often available through your local Constituency Development Fund (CDF) office.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>What are the payment options?</Accordion.Header>
                    <Accordion.Body>
                        A: Tuition fees can be paid in installments. We accept payments via bank deposits, M-Pesa paybill numbers, and official institutional payment accounts. Contact the finance office for the specific, verified payment channels to avoid fraud.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                    <AccordionHeader>What is Competency-Based Education and Training (CBET)?</AccordionHeader>
                    <Accordion.Body>
                        Competency-Based Education and Training (CBET) focuses on equipping students with specific skills and competencies required for their chosen field. It emphasizes practical learning and assessment based on demonstrated abilities rather than time spent in the classroom.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;