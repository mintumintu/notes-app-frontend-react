import React from 'react'
import './Note.css'
import {MdDelete} from 'react-icons/md'
import {Box,Button,Container,Text,useToast} from '@chakra-ui/react'

function Note({heading,content,isComplete,id}) {
  const toast = useToast();
  function handleonClick(){
    fetch('http://localhost:4001/delete/'+id,{
      method: "DELETE"
    }).then((response)=>response.json()).then((response)=>console.log(response))

    toast({
      title:"Note Deleted",
      status:"error",
      duration:5000,
      isClosable:true,
      position:"top",
  });    
  }

  return (
    <>
  <Box bg='white' w='50%' p={4} borderRadius='lg' borderWidth='1px' margin='20px'>
  <Container maxW='xl' centerContent>
        <Text fontSize="4xl">
         {heading}
        </Text>
        <Text fontSize='2xl'>
          {content}
        </Text>
        <Button
          colorScheme='red'
          width='100%'
          style={{marginTop:15}}
          onClick={handleonClick}
          >
         Delete Note <MdDelete/>
          </Button>
    </Container>
    </Box>
    </>
  )
}

export default Note
