import { useState } from 'react';

export default function createProposal() {
  let [proposalData, setProposalData] = useState({
    ProposalSentDate: '',
    DemoCompleted: '',
    PricingDiscussionStatus: '',
    DealClosingProbability: '',
  });

  const handleChange = (e) => {
    setContact({ ...proposalData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Proposal', proposalData); // Replace with actual handling logic
    alert('Contact saved successfully!');
  };
  
  return (
    <>
      <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
        <h2>Create New Proposal</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(proposalData).map((field) => (
            <div key={field} style={{ marginBottom: '10px' }}>
              <label>{field}</label>
              <input
                type="text"
                name={field}
                value={proposalData[field]}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
          ))}
          <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>
            Save Proposal
          </button>
        </form>
      </div>
    </>
  );
}
