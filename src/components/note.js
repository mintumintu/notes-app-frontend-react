import React from 'react'

function Note(props) {
  return (
    <>
    <div className='note-container'>
      <div className='note-heading'>
        {props.heading}
      </div>
      <div className='note-content'>
        {props.content}
      </div>
    </div>
    </>
  )
}

export default Note
