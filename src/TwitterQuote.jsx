import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TwitterQuote({ quote, author }) {
  return <a
    href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote}"${author}`}
    id="tweet-quote"
    className="button"
    title="Tweet this quote!"
  ><FontAwesomeIcon icon={['fab', 'twitter']} fixedWidth />
  </a>;
}

export default TwitterQuote;
