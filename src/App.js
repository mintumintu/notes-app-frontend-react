import { NoteAdd } from '@mui/icons-material';
import { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Note from './components/Note'
import Register from './components/Register'

function App() {
  const[notes,setNotes]= useState([])
  fetch("http://localhost:4001/allnotes").then(response=>response.json()).then(response => setNotes(response));
  return (
    <>
      <Header />
      <div className='body-container'>
      <div className='form-container'>
      <Register />
      </div>
      <div className='notes-container'>
      {  notes.map((note)=>
            <Note heading={note.title} content={note.content} isComplete={note.isComplete} id={note._id}/>
            )}
      </div>
      </div>
  </>
  );
}

export default App;
