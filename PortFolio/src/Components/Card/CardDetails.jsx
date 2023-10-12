import React from 'react';
import './CardDetails.css'; 

function CardDetails({ onClose, heading, detail }) {
  return (
    <div className="card-details">
      <h3>{heading}</h3>
      <p>{detail}</p>
      <button className='c-button-details' onClick={onClose}>Close</button>
    </div>
  );
}

export default CardDetails;
