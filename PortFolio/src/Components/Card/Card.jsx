import React, { useState } from 'react';
import './Card.css';
import CardDetails from './CardDetails.jsx';

function Card(props) {
  const { emoji, heading, detail ,selectedDetails} = props;
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button" onClick={toggleDetails}>
        Learn More
      </button>
      {showDetails && (
        <CardDetails heading={heading} detail={selectedDetails} onClose={toggleDetails} />
      )}
    </div>
  );
}

export default Card;
