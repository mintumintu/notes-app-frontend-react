import React from 'react';
import './Register.css'
import { useState } from 'react';
import './Register.css'
import { Button, FormControl, FormLabel, VStack,Box,useToast } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
const Register = ()=>{
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const toast = useToast();
  
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
            isCompleted: 'false'
          }),
        });
      
        // let resJson = await res.json();
        toast({
          title:"Note Created",
          status:"success",
          duration:5000,
          isClosable:true,
          position:"top",
      });
          setTitle("");
          setContent("");
        
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <>
    <Box bg='white' w='50%' p={4} borderRadius='lg' borderWidth='1px' margin='20px'>
        <VStack spacing='10px'>
          <FormControl id='title' isRequired>
            <FormLabel>Note Title</FormLabel>
            <Input
            value={title}
            type='text'
            placeholder='Enter the Note Title'
            onChange={(e)=>setTitle(e.target.value)}
            />
          </FormControl>
          <FormControl id='content' isRequired>
            <FormLabel>Note Contents</FormLabel>
            <Input
            value={content}
            type='text'
            placeholder='Enter the Note Contents'
            onChange={(e)=>setContent(e.target.value)}
            />
          </FormControl>
          <Button
          colorScheme='blue'
          width='100%'
          style={{marginTop:15}}
          onClick={handleSubmit}
          >
            Save Note
          </Button>
        </VStack>
    </Box>
      </>
      // old form
      // <div className="register-form-container">
      //   <form onSubmit={handleSubmit}>
      //     <input
      //       type="text"
      //       value={title}
      //       placeholder="Note Title"
      //       onChange={(e) => setTitle(e.target.value)}
      //     />
      //     <input
      //       type="text"
      //       value={content}
      //       placeholder="Note Description"
      //       onChange={(e) => setContent(e.target.value)}
      //     />  
      //     <button type="submit" className='create-button'>Create</button>
  
      //     <div className="message">{message ? <p>{message}</p> : null}</div>
      //   </form>
      // </div>
    );
}

export default Register;