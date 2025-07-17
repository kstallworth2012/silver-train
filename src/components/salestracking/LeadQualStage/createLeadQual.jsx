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
}

  return (
    <div>
      <h1></h1>
      <h2></h2>
    </div>
  );
}
