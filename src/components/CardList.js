import React from 'react';
import './CardList.css';
import Card from './Card';

const PrintCards = users => {
  return users.map((user, index) => {
    return <Card key={index} user={user} />;
  });
};

const CardList = props => {
  return <div className="cardList">{PrintCards(props.listRobots)}</div>;
};

export default CardList;
