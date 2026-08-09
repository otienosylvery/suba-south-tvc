import React from "react";
import { ButtonGroup, Button, Form, Row, Col } from "react-bootstrap";
import { Grid3x3GapFill, ListUl } from "react-bootstrap-icons";

const CourseFilters = ({
  view,
  setView,
  sort,
  setSort,
  totalCourses,
}) => {
  return (
    <Row className="align-items-center my-4">

      <Col md={4}>
        <h2 className="mb-0">
          {totalCourses} Programmes Available
        </h2>
      </Col>

      <Col
        md={8}
        className="d-flex justify-content-md-end gap-3 mt-3 mt-md-0"
      >
        <ButtonGroup>

          <Button
            variant={view === "grid" ? "danger" : "outline-danger"}
            onClick={() => setView("grid")}
          >
            <Grid3x3GapFill />
          </Button>

          <Button
            variant={view === "table" ? "danger" : "outline-danger"}
            onClick={() => setView("table")}
          >
            <ListUl />
          </Button>

        </ButtonGroup>

        <Form.Select
          style={{ maxWidth: 220 }}
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="title">
            Sort by Programme
          </option>

          <option value="duration">
            Sort by Duration
          </option>

          <option value="campus">
            Sort by Campus
          </option>

        </Form.Select>
      </Col>

    </Row>
  );
};

export default CourseFilters;
