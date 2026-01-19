import courses from "../../data/courses";
import Link from "next/link";

export default function CourseDetails({ course }) {
  if (!course) {
    return <h1>Course not found</h1>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <Link href="/courses">← Back to Courses</Link>

      <h1 style={{ marginTop: "20px" }}>{course.name}</h1>

      <p>
        <strong>Duration:</strong> {course.duration}
      </p>

      <p style={{ marginTop: "10px" }}>
        {course.description}
      </p>

      <hr style={{ margin: "30px 0" }} />

      <h3>What you will learn</h3>
      <ul>
        <li>Practical computer knowledge</li>
        <li>Industry-relevant skills</li>
        <li>Real-world projects</li>
        <li>Job-oriented training</li>
      </ul>

      <button style={{ marginTop: "20px" }}>
        Enquire Now
      </button>
    </div>
  );
}

/**
 * Runs on server at request time
 * Later this will call DB or API
 */
export async function getServerSideProps(context) {
  const { slug } = context.params;

  const course = courses.find(
    (c) => c.slug === slug
  );

  return {
    props: {
      course: course || null,
    },
  };
}
