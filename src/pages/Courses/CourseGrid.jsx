import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";

const CourseGrid = ({ courses }) => {
  return (
    <Row className="g-4">

      {courses.map((course) => (
        <Col
          lg={6}
          xl={4}
          key={course.id}
        >
          <Card className="course-card shadow-sm h-100">

           
            <Card.Body>

              <Card.Title>
                {course.title}
              </Card.Title>

              <Card.Text>
                {course.description}
              </Card.Text>

              <div className="course-meta">

                <span>
                  📅 {course.duration}
                </span>

                <span>
                  📍 {course.campus}
                </span>

              </div>

              <div className="course-meta mb-3">

                <span>
                  🎓 {course.intake}
                </span>

                <span>
                  💰 {course.fee}
                </span>

              </div>

              <Button
                variant="danger"
                className="w-100"
                onClick={() =>
                  window.open(
                    course.brochure,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                View Course
              </Button>

            </Card.Body>

          </Card>
        </Col>
      ))}

    </Row>
  );
};

export default CourseGrid;
