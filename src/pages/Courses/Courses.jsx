import React, { useMemo, useState } from "react";
import "./Courses.css";

import HeroSearch from "./HeroSearch";
import IntakeInfo from "./IntakeInfo";
import CourseFilters from "./CourseFilters";
import CourseTable from "./CourseTable";
import CourseGrid from "./CourseGrid";

import coursesData from "./courseData";

import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";

function Courses() {
  const [search, setSearch] = useState("");
  const [view, setView] = useState("table");
  const [sort, setSort] = useState("title");
  const [selectedCategory, setSelectedCategory] = useState("All");


  const filteredCourses = useMemo(() => {
    
    let filtered = coursesData.filter((course) => {

  const matchesSearch =
    course.title
      .toLowerCase()
      .includes(search.toLowerCase());

  const matchesCategory =
    selectedCategory === "All"
      ? true
      : course.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

    switch (sort) {
      case "duration":
        filtered.sort((a, b) =>
          a.duration.localeCompare(b.duration)
        );
        break;

      case "campus":
        filtered.sort((a, b) =>
          a.campus.localeCompare(b.campus)
        );
        break;

      default:
        filtered.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
    }

    return filtered;
  }, [search, sort]);

  return (
    <div className="courses-page">

    <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Empower Your Future</h1>
                <p className='text-center w-75 mb-5'>Explore our accredited programmes and discover
          the skills you need for tomorrow's careers.</p>
            </div>
        </header>

      <div className="container py-5">
      <HeroSearch
        total={coursesData.length}
        search={search}
        setSearch={setSearch}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
   
        {/* Intake */}

        <IntakeInfo />

        {/* Filters */}

        <CourseFilters
          view={view}
          setView={setView}
          sort={sort}
          setSort={setSort}
          totalCourses={filteredCourses.length}
        />

        {/* Courses */}

        {view === "table" ? (
          <CourseTable courses={filteredCourses} />
        ) : (
          <CourseGrid courses={filteredCourses} />
        )}

      </div>

      {/* FAQ */}

      <section className="faq-section">
        <div className="container">
          <FaqAccordion />
        </div>
      </section>

    </div>
  );
}

export default Courses;
