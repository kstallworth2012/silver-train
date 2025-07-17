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
    console.log('New Closing:',opportunityData ); // Replace with actual handling logic
    alert('Contact saved successfully!');
  };
  }
  return (
    <div>
      <h1>New Opportunity</h1>
      <h2></h2>
    </div>
  );
}
