import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const CardComponent = ({user}) => {
  return (
    <Card>
      <Card.Img variant="top" src={user.avatar_url} alt={user.login} />
      <Card.Body>
        <Card.Title>{user.login}</Card.Title>
        <Link to={`/profile/${user.login}`}>
          <Button variant='primary'>Открыть</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}