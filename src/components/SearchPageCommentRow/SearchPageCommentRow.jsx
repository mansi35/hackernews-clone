import moment from 'moment';
import React from 'react';
import parse from 'html-react-parser';
import Highlighter from 'react-highlight-words';
import './SearchPageCommentRow.scss';

function SearchPageCommentRow({ post, query }) {
  return (
    <div className="searchPageCommentRow">
      <span className="searchPageCommentRow__comments">
        {post.points ? `${post.points}  points |` : ''}
        {' '}
        {post.author}
        {' '}
        |
        {' '}
        {moment(post.created_at).fromNow()}
        {' '}
        |
        {' '}
        parent
        {' '}
        |
        {' '}
        on:
        {' '}
        <Highlighter
          searchWords={query.split(' ')}
          autoEscape
          textToHighlight={post.story_title}
        />
      </span>
      <p className="searchPageCommentRow__commentText">
        {parse(post.comment_text)}
      </p>
    </div>
  );
}

export default SearchPageCommentRow;
