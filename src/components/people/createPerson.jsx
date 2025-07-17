import React, { useState } from 'react';

export default function CreatePerson() {
  const [person, setPerson] = useState({
    FirstName: '',
    Title: '',
    Company: '',
    Department: '',
    Address: '',
    HomePhone: '',
    WorkPhone: '',
    FaxNumber: '',
    Email: '',
    Webpage: '',
    Twitter: '',
    Instagram: '',
    TikTok: '',
    LinkedIn: '',
    Facebook: '',
    WorkEmail: '',
    Notes: '',
  });

  const handleChange = (e) => {
    setContact({ ...person, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Contact:', person); // Replace with actual handling logic
    alert('Contact saved successfully!');
  };

  return (
    <>
      <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
        <h2>Create New Person</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(person).map((field) => (
            <div key={field} style={{ marginBottom: '10px' }}>
              <label>{field}</label>
              <input
                type="text"
                name={field}
                value={person[field]}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
          ))}
          <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>
            Save Contact
          </button>
        </form>
      </div>
    </>
  );
}
