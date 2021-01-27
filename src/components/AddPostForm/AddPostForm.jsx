import React, { useState, useEffect } from 'react';

import { Button, Form, Segment, Grid } from 'semantic-ui-react'

export default function AddAnimeForm(props){
  const [caption, setCaption] = useState([])
  const [animeTitle, setAnimeTitle] = useState("")

  function handleChange(e){
    setAnimeTitle(e.target.value)
  }

   async function handleSubmit(e){
    e.preventDefault()
    const animeUrl = `https://api.jikan.moe/v3/search/anime?q=${animeTitle}&order_by=title&limit=1`;
    const anime = await fetch(animeUrl) 
    .then((res) => res.json())
    .then((data) => data)
    props.handleAddPost(anime)
    setCaption([...caption, {
      Title: anime.results[0].title,
      Synopsis: anime.results[0].synopsis,
      Imgage: anime.results[0].image_url
    }])
  }


  return (

        <Segment>
        
            <Form  autoComplete="off" onSubmit={handleSubmit}>
            
              <Form.Input
                  className="form-control"
                  name="caption"
                  value={animeTitle}
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