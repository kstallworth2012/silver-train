import react, { useState } from 'react';

export default function CreateClosing() {
  let [closeData, setCloseDat] = useState({
    ContractSentDate: '',
    FinalApprovalStatus: '',
    ExpectedCloseDate: '',
    WonLostStatus: '',
  });

  const handleChange = (e) => {
    setContact({ ...closeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Closing:', closeData); // Replace with actual handling logic
    alert('Closing saved successfully!');
  };


  return (
    <>
      <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
        <h2>Create New Closing</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(closeData).map((field) => (
            <div key={field} style={{ marginBottom: '10px' }}>
              <label>{field}</label>
              <input
                type="text"
                name={field}
                value={closeData[field]}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
          ))}
          <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>
            Save Closing
          </button>
        </form>
      </div>
    </>
  );






}
