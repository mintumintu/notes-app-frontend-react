import React from 'react'
import './Note.css'

function Note({heading,content}) {
  return (
    <>
    <div className='note-container-main'>
      <div className='note-heading'>
       <p className='note-heading-paragraph'> {heading}</p>
      </div>
      <div className='note-content'>
       <p className='note-content-paragraph'> {content}</p>
      </div>
    </div>
    </>
  )
}

export default Note
