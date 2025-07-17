import { useState } from 'react';

export default function CreateNote() {
  const [note, setNote] = useState({
    noteID: ' ',
    personID: ' ',
    title: ' ',
    content: '',
  });
}
