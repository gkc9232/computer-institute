import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "6px",
      }}
    >
      <h3>{course.name}</h3>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p>{course.description}</p>

      <Link href={`/courses/${course.slug}`}>
        <button style={{ marginTop: "10px" }}>
          View Details
        </button>
      </Link>
    </div>
  );
}
