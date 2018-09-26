import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TwitterQuote() {
  return <a href="test" id="tweet-quote" title="Tweet this quote!"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>;
}

export default TwitterQuote;
