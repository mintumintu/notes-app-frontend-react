import React from 'react'
import Note from './note'
// import { Card } from '@material-ui/core'
function notescontainer() {
    fetch('http://localhost:4001/notes',{
        method:'POST',
        body: JSON.stringify({
            owner:"jp4@gmail.com"
          })
    }).then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
    return (
        <>
            <Note />
        </>
  )
}

export default notescontainer
