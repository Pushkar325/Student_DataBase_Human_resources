import React, { useState, useEffect } from "react";

const StudentDetail = ({ student, onUpdate }) => {
  const [editable, setEditable] = useState(false);
  const [studentData, setStudentData] = useState(student);

  useEffect(() => {
    setStudentData(student);
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSave = () => {
    onUpdate(studentData);
    setEditable(false);
  };

  return (
    <div>
      <h2>Student Detail</h2>
      <div className="form-group">
        <label>ID: </label>
        {studentData.id}
      </div>
      <div className="form-group">
        <label>Admission Year: </label>
        {studentData.admissionYear}
      </div>
      <div className="form-group">
        <label>Name: </label>
        {editable ? (
          <input
            type="text"
            className="form-control"
            name="name"
            value={studentData.name}
            onChange={handleChange}
          />
        ) : (
          studentData.name
        )}
      </div>
      <div className="form-group">
        <label>Branch: </label>
        {editable ? (
          <input
            type="text"
            className="form-control"
            name="branch"
            value={studentData.branch}
            onChange={handleChange}
          />
        ) : (
          studentData.branch
        )}
      </div>
      <div className="form-group">
        <label>Address: </label>
        {editable ? (
          <input
            type="text"
            className="form-control"
            name="address"
            value={studentData.address}
            onChange={handleChange}
          />
        ) : (
          studentData.address
        )}
      </div>
      {editable ? (
        <button className="btn btn-success" onClick={handleSave}>
          Save
        </button>
      ) : (
        <button className="btn btn-warning" onClick={() => setEditable(true)}>
          Edit
        </button>
      )}
    </div>
  );
};

export default StudentDetail;
