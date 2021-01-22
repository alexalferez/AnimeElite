import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/Header/Header';
import ListFeed from '../../components/ListFeed/ListFeed';
import AddListForm from '../../components/AddListForm/AddListForm';
import * as listsAPI from '../../utils/listService';
import * as likesAPI from '../../utils/likesService';
import {  Grid } from 'semantic-ui-react'

export default function Feed({user, handleLogout}){  

    const [lists, setLists] = useState([])

    async function handleAddList(list){

        const data = await listsAPI.create(list);

        // to check to make sure this is working
        console.log(data, ' data')
        // after this we'll want to update state
        // after we get back our new post
        // data is the response from our create function in controllers/posts
        // update the state

        setLists([data.list,  ...lists])
        // to conifrm this check the devtools for your feed component
        
    }

    // Maybe we need to call a funciton that gets all the posts
    async function getLists(){
    
        try {
          const data = await listsAPI.getAll();
          setLists([...data.lists])
        } catch(err){
          console.log(err, ' this is the error')
        }
      }

      async function addLike(listId){
        try {
          const data = await likesAPI.create(listId);
          console.log(data, ' this is from addLike')
          getLists()
        } catch(err){
          console.log(err)
        }
      }
    
      async function removeLike(likeId){
        try {
          const data = await likesAPI.removeLike(likeId);
          getLists();
        } catch(err){
          console.log(err)
        }
      }

      useEffect(() => {
        getLists()
      }, [])

      



    return (
        
      <Grid centered >
        <Grid.Row>
          <Grid.Column>
            <PageHeader user={user} handleLogout={handleLogout}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            <AddListForm handleAddList={handleAddList}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column style={{maxWidth: 450}}>
          <ListFeed lists={lists} isProfile={false} numPhotosCol={1} user={user} addLike={addLike} removeLike={removeLike}/>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}