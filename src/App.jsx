import React, { useState } from "react";
import StudentList from "./components/StudentList";
import StudentDetail from "./components/StudentDetail";
import StudentForm from "./components/StudentForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);

  const handleAddStudent = (student) => {
    student.id = students.length + 1;
    setStudents([...students, student]);
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
    setSelectedStudents(
      selectedStudents.filter((student) => student.id !== id)
    );
  };

  const handleSelectStudent = (id) => {
    const student = students.find((student) => student.id === id);
    if (selectedStudents.includes(student)) {
      setSelectedStudents(selectedStudents.filter((s) => s.id !== id));
    } else {
      setSelectedStudents([...selectedStudents, student]);
    }
  };

  const handleUpdateStudent = (updatedStudent) => {
    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
    setSelectedStudents(
      selectedStudents.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
  };

  return (
    <>
      <h5>
        <marquee>
          Note:- This is the Admin dashboard . Admin can perform CRUD operation.{" "}
        </marquee>
      </h5>
      <div className="container">
        <h1 className="student_database">Student Database System</h1>
        <div className="student-list">
          <StudentList
            students={students}
            onSelect={handleSelectStudent}
            onDelete={handleDeleteStudent}
          />
        </div>
        {selectedStudents.length > 0 &&
          selectedStudents.map((student) => (
            <div key={student.id} className="student-detail">
              <StudentDetail student={student} onUpdate={handleUpdateStudent} />
            </div>
          ))}
        <div className="student-form">
          <StudentForm onAdd={handleAddStudent} />
        </div>
        <div className="total-students">
          Total number of students: {students.length}
        </div>
      </div>
    </>
  );
};

export default App;
