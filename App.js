import NotesList  from './components/NotesList';
import { useState } from 'react';
import { nanoid } from 'nanoid';




const App = ()=> {
const [notes, setNotes] = useState([{
  text: "This is my first note!",
  date: "24/04/2024"
},
{
  id:nanoid(),
  text:'This my second note',
  date: '24/4/2024'
},

{
  id:nanoid(),
  text:'This my third note',
  date: '24/4/2024'
},
]);

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
}


  return (<div className="container">
    <NotesList notes={notes} handleAddNote={addNote}/>

  </div>
  );

;}

export default App;