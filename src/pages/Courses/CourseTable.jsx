import React from "react";
import { Table, Button } from "react-bootstrap";

const CourseTable = ({ courses }) => {
  return (
    <div className="table-responsive">

      <Table hover bordered className="course-table align-middle">

        <thead>

          <tr>

            <th>Programme</th>
            <th>Duration</th>
            <th>Campus</th>
            <th>Intake</th>
            <th>Fees</th>
            <th></th>

          </tr>

        </thead>

        <tbody>

          {courses.map((course) => (
            <tr key={course.id}>

              <td>

                <div className="d-flex align-items-center">


                  <div>

                    <h6 className="mb-1">
                      {course.title}
                    </h6>

                    <small className="text-muted">
                      {course.description}
                    </small>

                  </div>

                </div>

              </td>

              <td>{course.duration}</td>

              <td>{course.campus}</td>

              <td>{course.intake}</td>

              <td>{course.fee}</td>

              <td>

                <Button
                  variant="danger"
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

              </td>

            </tr>
          ))}

        </tbody>

      </Table>

    </div>
  );
};

export default CourseTable;
