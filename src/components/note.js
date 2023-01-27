import React from 'react'
import './Note.css'
import {MdDelete,MdMode,MdOutlineDone} from 'react-icons/md'

function Note({heading,content,isComplete,id}) {
  function handleonClick(){
    fetch('http://localhost:4001/delete/'+id,{
      method: "DELETE"
    }).then((response)=>response.json()).then((response)=>console.log(response))
  }
  function handleonComplete(){
    
  }

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
        <p className='option-done' onClick={handleonComplete}><MdOutlineDone /></p><p className='option-delete' onClick={handleonClick}><MdDelete /></p><p className='option-update'><MdMode /></p>
      </div>
    </div>
    </>
  )
}

export default Note
