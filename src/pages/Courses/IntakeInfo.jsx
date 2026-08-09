import React from "react";
import { Row, Col } from "react-bootstrap";

const IntakeInfo = () => {
  const reportingDate = new Date("2026-09-01");

  const today = new Date();

  const difference = Math.ceil(
    (reportingDate - today) /
      (1000 * 60 * 60 * 24)
  );

  return (
    <div className="intake-section">
      <div className="intake-card p-4">
    <Row>

        <Col md={4}>
          <span>Open Intake</span>
          <h2>September 2026</h2>
        </Col>

        <Col md={4}>
          <span>Days Remaining</span>
          <h2>{difference} Days</h2>
        </Col>

        <Col md={4}>
          <span>Reporting Date</span>
          <h2>1 September 2026</h2>
        </Col>

      </Row>
      </div>
      

    </div>
  );
};

export default IntakeInfo;
