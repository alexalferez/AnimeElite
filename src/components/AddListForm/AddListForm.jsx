import React, { useState } from 'react';

import { Button, Form, Segment } from 'semantic-ui-react'

export default function AddListForm(props){
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState({
    ListItem: ''
  })

  

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
             
    const formData = new FormData()
    formData.append('ListItem', state.ListItem)
    props.handleAddList(formData)
    // Have to submit the form now! We need a function!
  }


  return (
    
  
        <Segment>
        
            <Form  autoComplete="off" onSubmit={handleSubmit}>
            
              <Form.Input
                  className="form-control"
                  name="caption"
                  value={state.caption}
                  placeholder="What's your favorite Anime?"
                  onChange={handleChange}
                  required
              />    
              <Button
                type="submit"
                className="btn"
              >
                ADD LIST
              </Button>
            </Form>
          </Segment>
     
   
  ); 
}