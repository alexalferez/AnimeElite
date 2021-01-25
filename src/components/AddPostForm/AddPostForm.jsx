import React, { useState, useEffect } from 'react';

import { Button, Form, Segment, Grid } from 'semantic-ui-react'

export default function AddAnimeForm(props){
  const [state, setState] = useState({
    caption: ''
  })


  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    const animeUrl = `https://api.jikan.moe/v3/search/anime?q=${state.caption}&order_by=title&limit=1`;
    fetch(animeUrl)

    .then((res) => res.json())
    .then((data) => {
      console.log(data, "this is data");
      setState(data)  
    })
    const formData = new FormData(anime.results[0])
    props.handleAddPost(formData)
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
                ADD ANIME
              </Button>
            </Form>
          </Segment>
     
   
  ); 
}