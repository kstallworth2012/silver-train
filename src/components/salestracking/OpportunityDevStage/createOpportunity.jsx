import { useSyncExternalStore } from 'react';

export default function CreateOpportunity() {
  let [opportunityData, setOpportuniyData] = useState({
    FollowUpDate: '',
    EmailOpenRateClickThroughRate: '',
    ContentEngagement: '', //(Webinar Attendance, Whitepaper Downloads)
    SalesQualifiedLeadStatus: '',
  });

  const handleChange = (e) => {
    setContact({ ...opportunityData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Opportunity:',opportunityData ); // Replace with actual handling logic
    alert('Opportunity saved successfully!');
  };
  

  return (
    <>
      <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
        <h2>Create New Opportunity</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(opportunityData).map((field) => (
            <div key={field} style={{ marginBottom: '10px' }}>
              <label>{field}</label>
              <input
                type="text"
                name={field}
                value={opportunityData[field]}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
          ))}
          <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>
            Save Opportunity
          </button>
        </form>
      </div>
    </>
  );
}
