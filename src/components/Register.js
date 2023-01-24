import React from 'react';
import './Register.css'
import { useState } from 'react';
import './Register.css'
const Register = ()=>{
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [message,setMessage] = useState("");
  
    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch("http://localhost:4001/createnote", {
          headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
          method: "POST",
          body: JSON.stringify({
            title: title,
            content: content,
            isCompleted: false,
          }),
        });
        let resJson = await res.json();
        if (res.status === 200) {
          setTitle("");
          setContent("");
          setMessage("User created successfully");
        } else {
          setMessage("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <div className="register-form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            placeholder="Note Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={content}
            placeholder="Note Description"
            onChange={(e) => setContent(e.target.value)}
          />  
          <button type="submit" className='create-button'>Create</button>
  
          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
      </div>
    );
}

export default Register;