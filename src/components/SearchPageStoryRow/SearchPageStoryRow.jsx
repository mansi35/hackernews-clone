import moment from 'moment';
import React from 'react';
import './SearchPageStoryRow.scss';

function SearchPageStoryRow({ post }) {
  return (
    <div className="searchPageStoryRow">
      <p>
        {post.title}
        {' '}
        {post.url
          && (
            <span>
              (
              <a href={post.url}>{post.url}</a>
              )
            </span>
          )}
      </p>
      <span className="searchPageStoryRow__comments">
        {post.points}
        {' '}
        points |
        {' '}
        {post.author}
        {' '}
        |
        {' '}
        {moment(post.created_at).fromNow()}
        {' '}
        |
        {' '}
        {post.num_comments}
        {' '}
        comments
      </span>
    </div>
  );
}

export default SearchPageStoryRow;
