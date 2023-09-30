import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Cart({data}) {
  console.log(data)
    return (
        <Card style={{ width: '18rem',border: '5px solid blue' }}>
          <Card.Img variant="top" src={data.image} />
          <Card.Body>
            <Card.Title> Name : {data.Name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Team: {data.Team}</ListGroup.Item>
            <ListGroup.Item className='nationality'>Nationality: {data.Nationality}   <Card.Img variant="top" src={data.iconeNatio} /></ListGroup.Item> 
            <ListGroup.Item>jerseyNumber: {data.jerseyNumber}</ListGroup.Item>
            <ListGroup.Item>Age: {data.Age}</ListGroup.Item>
          </ListGroup>
          
        </Card>
      );
}

export default Cart



