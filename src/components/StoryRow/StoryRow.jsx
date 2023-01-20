import moment from 'moment/moment';
import React from 'react';
import upvote from '../../images/upvote.gif';
import './StoryRow.scss';

function StoryRow({ article, index }) {
  const isValidUrl = (urlString) => {
    try {
      return Boolean(new URL(urlString));
    } catch (e) {
      return false;
    }
  };

  return (
    <div className="storyRow">
      <div className="storyRow__ranking" style={{ marginLeft: index < 9 ? '8px' : '0' }}>
        <p>
          {index + 1}
          .
        </p>
        <img src={upvote} alt="upvote" />
      </div>
      <div className="storyRow__story">
        <p className="storyRow__storyTitle">
          {article.title}
          {' '}
          <span>{isValidUrl(article.url) ? `(${new URL(article.url).hostname})` : ''}</span>
        </p>
        <span>
          {article.points}
          {' '}
          point by
          {' '}
          {article.author}
          {' '}
          {moment(article.created_at).fromNow()}
          {' '}
          | hide | past | discuss
        </span>
      </div>
    </div>
  );
}

export default StoryRow;
