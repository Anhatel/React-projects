import React from 'react';

function NewQuote({ handleNewQuote }) {
  return (
    <button
      id="new-quote"
      value="new-quote"
      onClick={handleNewQuote}
      >New quote
    </button>
  );
}

export default NewQuote;
