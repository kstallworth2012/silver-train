import React, { useState } from 'react';

export default function UpdateLeadQual() {
  let [leadQualData, setLeadQualData] = useState({
    LeadSource: '', //(Referral, Organic Search, Paid Ads)
    InitialContactDate: '',
    EngagementScore: '', //(Clicks, Views, Downloads)
    MarketingQualifiedLeadMQLStatus: '',
  });

  return (
    <div>
      <h1>Update Lead Qual</h1>
      <h2></h2>
    </div>
  );
}
