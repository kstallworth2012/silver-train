import { useState } from 'react';

export default function CreateContact() {
  const [contact, setContact] = useState({
    contactID: '',
    personID: '',
    contactDate: '',
    contactType: '',
    length: '',
    notes: '',
  });
}
