import React from 'react';
import { Card } from 'semantic-ui-react'
import ListCard from '../ListCard/ListCard';


export default function ListFeed({lists, isProfile, numPhotosCol, user, addLike, removeLike}){

    return (
        <Card.Group itemsPerRow={numPhotosCol} stackable>
           
                {lists.map((list) => {
                return ( 
                        <ListCard list={list} key={list._id} isProfile={isProfile} user={user} addLike={addLike} removeLike={removeLike}/>
                    )
                })}
        </Card.Group>
  
    )
}