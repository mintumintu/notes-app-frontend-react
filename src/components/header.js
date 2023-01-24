import React from 'react'
import './Header.css'
import {AiFillEdit} from 'react-icons/ai'
function Header() {
  return (
        <div className="header-container">
        <AiFillEdit style={{fontSize:"40px"}}/>
        <h1>NoteBox</h1>
        <button id='create-note-button'>Create A Note</button>
        </div>
  )
}

export default Header