import React from 'react';
import { Card, Icon, Image, Feed } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function ListCard({list, isProfile, user, addLike, removeLike}) { 

  // find if the user liked this post
  const liked = list.likes.findIndex(like => like.username === user.username);
  // Return the index of the user if the user has liked the post, if not liked will -1
  const clickHandler = liked > -1 ?  () => removeLike(list.likes[liked]._id) : () => addLike(list._id)
  // lifting up our state in our clickHandler to our fucntion
  const likeColor = liked > -1 ? 'red' : 'grey';

  // another way
  // const liked = post.likes.filter(like => like.username === user.username);
  // const clickHandler = liked.length > 0 ?  () => removeLike(liked._id) : () => addLike(post._id)


  return (
    <Card key={list._id}>
     {isProfile ? ''
        :  
        <Link to={`/${user.username}`}>
          <Card.Content textAlign='left'>
              <Image
                  floated='left'
                  size='large'
                  avatar
                  src={'https://react.semantic-ui.com/images/wireframe/square-image.png'}
              />
              <Card.Header floated="right">{list.user.username}</Card.Header>
          </Card.Content>
        </Link>
      }
      <Image src={`${list.photoUrl}`} wrapped ui={false} />
      <Card.Content>
      <Card.Description>
        {list.caption}
      </Card.Description>
      </Card.Content>
      <Card.Content extra textAlign={'right'}>
        <Icon name={'heart'} size='large' color={likeColor} onClick={clickHandler} />
        {list.likes.length} Likes
          
      </Card.Content>
    </Card>
  );
}

export default ListCard;