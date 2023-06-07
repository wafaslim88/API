import React from 'react';
import { Card } from 'react-bootstrap';
import './UserCard.css';

const UserCard = ({ user }) => {
  return (
    <Card className="user-card">
      <Card.Body>
        <Card.Title style={{fontSize:25,color:'rgb(15, 83, 61)'}}>{user.name}</Card.Title>
        <Card.Text>Username: {user.username}</Card.Text>
        <Card.Text>Email: {user.email}</Card.Text>
        <Card.Text>
          Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
        </Card.Text>
        <Card.Text>
          Location: Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
