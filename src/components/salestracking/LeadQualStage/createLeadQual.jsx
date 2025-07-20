import React, { useState } from 'react';

export default function CreateLeadQual() {
  let [leadQualData, setLeadQualData] = useState({
    LeadSource: '', //(Referral, Organic Search, Paid Ads)
    InitialContactDate: '',
    EngagementScore: '', //(Clicks, Views, Downloads)
    MarketingQualifiedLeadMQLStatus: '',
  });



const handleChange = (e) => {
  setContact({ ...leadQualData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('New Lead Qualification:', leadQualData); // Replace with actual handling logic
  alert('Lead saved successfully!');
};


  return (
    <>
      <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
        <h2>Create New Lead Qualification</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(leadQualData).map((field) => (
            <div key={field} style={{ marginBottom: '10px' }}>
              <label>{field}</label>
              <input
                type="text"
                name={field}
                value={leadQualData[field]}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
          ))}
          <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>
            Save Lead Qualification
          </button>
        </form>
      </div>
    </>
  );

}
