import React from "react";

const StudentList = ({ students, onSelect, onDelete }) => {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <span>
              {student.name} - {student.branch} - {student.address}
            </span>
            <div>
              <button
                className="btn btn-primary"
                onClick={() => onSelect(student.id)}
              >
                View
              </button>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(student.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
