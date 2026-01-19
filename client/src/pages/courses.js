import CourseCard from "../components/CourseCard";
import courses from "../data/courses";

export default function CoursesPage({ courses }) {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Our Courses</h1>
      <p>Choose a course to build your IT career</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

/**
 * Dynamic-ready (SSR)
 * Later replace data source with API or DB
 */
export async function getServerSideProps() {
  return {
    props: {
      courses,
    },
  };
}
