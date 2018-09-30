import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Text({ quote }) {
  return <p
    id="text"
    >
      <FontAwesomeIcon icon={['fas', 'quote-left']} fixedWidth />
      {quote}
    </p>;
}

export default Text;
