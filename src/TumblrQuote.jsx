import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TumblrQuote({ quote, author }) {
  return <a
    href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${author}&content=${quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
    id="tumblr-quote"
    className="button"
    title="Post this quote on tumblr!"
  ><FontAwesomeIcon icon={['fab', 'tumblr']} fixedWidth />
  </a>;
}

export default TumblrQuote;
