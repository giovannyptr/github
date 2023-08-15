import React from 'react';
import './Card.css';

const Card = ({ repo }) => {
  return (
    <div className="card">
      <h3><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h3>
      <p>{repo.description}</p>
      <span>Owner: {repo.owner.login}</span>
    </div>
  );
};

export default Card;
