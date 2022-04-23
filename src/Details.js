import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getOneRecipe } from './Redux/action'

const Details = () => {
    const {id} = useParams()
    const recipe = useSelector((state)=>state.recipe)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOneRecipe(id))
    },[id])
    console.log(recipe);
  return (
    <div>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={recipe.image} />
  <Card.Body>
    <Card.Title>{recipe.label}</Card.Title>
    <Link to={`/`}><Button variant="primary">Details</Button></Link>
  </Card.Body>
</Card>
    </div>

  )
}

export default Details