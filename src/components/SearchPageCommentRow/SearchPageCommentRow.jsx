/* eslint-disable import/no-extraneous-dependencies */
import moment from 'moment';
import React from 'react';
import parse from 'html-react-parser';
import './SearchPageCommentRow.scss';

function SearchPageCommentRow({ post }) {
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
        {post.story_title}
      </span>
      <p className="searchPageCommentRow__commentText">
        {parse(post.comment_text)}
      </p>
    </div>
  );
}

export default SearchPageCommentRow;
