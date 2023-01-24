import React, { useState } from 'react'
import './Note.css'
import {MdDelete,MdMode,MdOutlineDone} from 'react-icons/md'

function Note({heading,content,isComplete}) {

  return (
    <>
    <div className='note-container-main'>
      <div className='note-heading'>
       <p className='note-heading-paragraph'>{heading}</p>
      </div>
      <div className='note-content'>
       <p className='note-content-paragraph'> {content}</p>
      </div>
      <div className='note-buttons'>
        <p className='option-done'><MdOutlineDone /></p><p className='option-delete'><MdDelete /></p><p className='option-update'><MdMode /></p>
      </div>
    </div>
    </>
  )
}

export default Note
