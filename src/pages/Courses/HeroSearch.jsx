import React from "react";
import { Form, InputGroup, Badge } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const categories = [
  "All",
  "Engineering",
  "ICT",
  "Business",
  "Hospitality",
  "Beauty",
  "Fashion",
  "Sports",
];

const HeroSearch = ({
  total,
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <section className="hero-section">

      <div className="hero-overlay">


        <InputGroup className="hero-search">

          <Form.Control
            placeholder="Search programme..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <InputGroup.Text>
            <Search />
          </InputGroup.Text>

        </InputGroup>

        <div className="category-container">

          {categories.map((category) => (
            <Badge
              key={category}
              bg={
                selectedCategory === category
                  ? "danger"
                  : "light"
              }
              text={
                selectedCategory === category
                  ? "light"
                  : "dark"
              }
              className="category-chip"
              onClick={() =>
                setSelectedCategory(category)
              }
            >
              {category}
            </Badge>
          ))}

        </div>

      </div>

    </section>
  );
};

export default HeroSearch;
