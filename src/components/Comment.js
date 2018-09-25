import React from 'react'
import { Card } from 'semantic-ui-react'

const Comment = (props) => {
  return (
    <Card style={{margin: '1%', width: '100%'}}>
      <Card.Content>
        <Card.Header>{`${props.comment.user.first_name} ${props.comment.user.last_name}`} says</Card.Header>
        <Card.Description>{props.comment.content}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default Comment
