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
    alert('Contact saved successfully!');
  };
}
