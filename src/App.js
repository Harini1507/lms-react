import { useState } from "react";
import "./App.css";

export default function App() {
  const course = {
    title: "React Mastery",
    description: "A modern interactive course to master React step-by-step.",
    duration: "4 Hours",
  };

  const lessons = [
    {
      id: 1,
      name: "Introduction",
      desc: "Understand what React is and why it is used in modern web development.",
      time: "30 mins",
      level: "Beginner",
      points: ["What is React?", "Why React?", "Single Page Applications"],
    },
    {
      id: 2,
      name: "Basics",
      desc: "Learn the core building blocks that form every React application.",
      time: "1 hour",
      level: "Beginner",
      points: ["JSX", "Functional Components", "Props", "Component Structure"],
    },
    {
      id: 3,
      name: "Advanced",
      desc: "Dive into state management and dynamic behavior in React.",
      time: "1.5 hours",
      level: "Intermediate",
      points: [
        "useState Hook",
        "Dynamic UI",
        "Component Re-rendering",
        "Data Flow",
      ],
    },
    {
      id: 4,
      name: "Summary",
      desc: "Review everything you have learned and prepare for next steps.",
      time: "1 hour",
      level: "Beginner",
      points: ["Quick Revision", "Best Practices", "Next Learning Path"],
    },
  ];

  const [selectedLesson, setSelectedLesson] = useState(null);
  const [completed, setCompleted] = useState([]);

  return (
    <div className="container">
      <div className="card">
        <h1>{course.title}</h1>
        <p>{course.description}</p>
        <p>
          <b>Duration:</b> {course.duration}
        </p>
        <p>Total Lessons: {lessons.length}</p>
        <p>Completed Lessons: {completed.length}</p>
      </div>

      <div className="card">
        <h2>Lessons</h2>
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className={`lesson ${
              selectedLesson?.id === lesson.id ? "active" : ""
            }`}
            onClick={() => setSelectedLesson(lesson)}
          >
            {lesson.name} {completed.includes(lesson.id) && "✅"}
          </div>
        ))}
      </div>

      {selectedLesson && (
        <div className="card">
          <h3>{selectedLesson.name}</h3>
          <p>{selectedLesson.desc}</p>
          <p>
            <b>Level:</b> {selectedLesson.level}
          </p>
          <p>
            <b>Duration:</b> {selectedLesson.time}
          </p>

          <ul>
            {selectedLesson.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <button
            className="btn"
            onClick={() => {
              if (!completed.includes(selectedLesson.id)) {
                setCompleted([...completed, selectedLesson.id]);
              }
            }}
          >
            Mark as Completed
          </button>
        </div>
      )}
    </div>
  );
}
