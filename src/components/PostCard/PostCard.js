import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function PostCard({post, isProfile, user, addLike, removeLike}) { 
console.log("<--- this is POST", post)
  // find if the user liked this post
  const liked = post.likes.findIndex(like => like.username === user.username);
  // Return the index of the user if the user has liked the post, if not liked will -1
  const clickHandler = liked > -1 ?  () => removeLike(post.likes[liked]._id) : () => addLike(post._id)
  // lifting up our state in our clickHandler to our fucntion
  const likeColor = liked > -1 ? 'red' : 'grey';
  
  return (
    <Card key={post._id}>
     {isProfile ? ''
        :  
        <Link to={`/${user.username}`}>
          <Card.Content textAlign='left'>
              <Card.Header floated="right">{user.username}</Card.Header>
          </Card.Content>
        </Link>
      }
      <Card.Content>
        Title: {post.title}
      </Card.Content>
      <Card.Content>
        Rating: {post.rated}
      </Card.Content>
      <Card.Content>
        Synopsis: {post.synopsis}
      </Card.Content>
      <Card.Content extra textAlign={'right'}>
        <Icon name={'heart'} size='large' color={likeColor} onClick={clickHandler} />
        {post.likes.length} Likes
          
      </Card.Content>
    </Card>
  );
}

export default PostCard;
