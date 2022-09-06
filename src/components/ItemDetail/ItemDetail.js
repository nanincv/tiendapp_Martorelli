import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';



function ItemDetail( {data} ) {
  return (
    <div className="row row-cols-4">
    <Card style={{ width: '18rem', }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
        <Card.Text> $ {data.price} </Card.Text>
        <Button variant="primary">BUY</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ItemDetail;
