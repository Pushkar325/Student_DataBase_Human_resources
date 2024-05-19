import React, { useState } from "react";

const StudentForm = ({ onAdd }) => {
  const [student, setStudent] = useState({
    name: "",
    branch: "",
    address: "",
    admissionYear: new Date().getFullYear(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(student);
    setStudent({
      name: "",
      branch: "",
      address: "",
      admissionYear: new Date().getFullYear(),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Student</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={student.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Branch:</label>
        <input
          type="text"
          className="form-control"
          name="branch"
          value={student.branch}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Address:</label>
        <input
          type="text"
          className="form-control"
          name="address"
          value={student.address}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Student
      </button>
    </form>
  );
};

export default StudentForm;
