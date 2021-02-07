import React from 'react';
  
function QuoteCard({ simpson }) {
  return (
    <div className="quoteCard">
      <p>
        <strong>{simpson.character}</strong>
      </p>
      <img
        src= {simpson.image}
        alt= {simpson.character}
      />
      <h1> 
        {simpson.quote} 
      </h1>
    </div>
  );
};
  
export default QuoteCard;