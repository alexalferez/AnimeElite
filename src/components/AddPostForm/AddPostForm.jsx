import React, { useState } from 'react';

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
    .then((res) =>{
      console.log(res,"<--- this is RES")
      return res.json()})
    .then((data) => data)
    console.log(anime, "<-- this is Anime")
    console.log(anime.results[0],"<----- this is RESULTS")
    setCaption([...caption, {
      title: anime.results[0].title,
      synopsis: anime.results[0].synopsis,
      rating: anime.results[0].rated
    }])
    let post = { 
      title: anime.results[0].title,
      synopsis: anime.results[0].synopsis,
      rating: anime.results[0].rated
     }
    props.handleAddPost(post)
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