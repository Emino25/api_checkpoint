import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const UserCard = ({element}) => {
  console.log(element);
  return (
    <div>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={element.recipe.image} />
  <Card.Body>
    <Card.Title>{element.recipe.label}</Card.Title>
    <Link to={`/details/${element.recipe.uri.slice(51)}`}><Button variant="primary">Details</Button></Link>
  </Card.Body>
</Card>
    </div>
  )
}

export default UserCard