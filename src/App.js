import { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Note from './components/Note'

function App() {
  const[notes,setNotes]= useState([])
  fetch("http://localhost:4001/allnotes").then(response=>response.json()).then(response => setNotes(response));
  return (
    <>
      <Header />
      <div className='notes-container'>
      {  notes.map((note)=>
            <Note heading={note.title} content={note.content}/>
            )}
      </div>
    </>
  );
}

export default App;
