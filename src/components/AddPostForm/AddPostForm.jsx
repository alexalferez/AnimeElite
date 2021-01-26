import React, { useState, useEffect } from 'react';

import { Button, Form, Segment, Grid } from 'semantic-ui-react'

export default function AddAnimeForm(props){
  const [caption, setCaption] = useState([])
  const [animeTilte, setAnimeTitle] = useState("")

  function handleChange(e){
    setAnimeTitle(e.target.value)
  }

   async function handleSubmit(e){
    e.preventDefault()
    const animeUrl = `https://api.jikan.moe/v3/search/anime?q=${animeTilte}&order_by=title&limit=1`;
    const anime = await fetch(animeUrl) 
    .then((res) => res.json())
    .then((data) => data)
    props.handleAddPost(anime)
    setCaption([...caption, {title: anime.results[0].title}])
    
    // Have to submit the form now! We need a function!
  }


  return (

        <Segment>
        
            <Form  autoComplete="off" onSubmit={handleSubmit}>
            
              <Form.Input
                  className="form-control"
                  name="caption"
                  value={animeTilte}
                  placeholder="What's your favorite Anime choice 1?"
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