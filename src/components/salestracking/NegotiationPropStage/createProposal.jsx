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
  }
  return (
    <div>
      <h1></h1>
      <h2></h2>
    </div>
  );
}
