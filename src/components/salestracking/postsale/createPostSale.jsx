



export default CreatePostSale(){

let[postSaleData, setPostSaleData] = useState({
CustomerOnboardingStatus:'',
SatisfactionScore:'', //(NPS, CSAT)
RenewalDate:'',
UpsellCrossSellOpportunities:''
})


const handleChange = (e) => {
  setContact({ ...postSaleData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('New Closing:',postSaleData ); // Replace with actual handling logic
  alert('Contact saved successfully!');
};







}












