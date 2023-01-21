import moment from 'moment';
import React from 'react';
import parse from 'html-react-parser';
import Highlighter from 'react-highlight-words';
import './SearchPageStoryRow.scss';

function SearchPageStoryRow({ post, query }) {
  return (
    <div className="searchPageStoryRow">
      <p className="searchPageStoryRow__title">
        <Highlighter
          highlightClassName="searchPageStoryRow__title"
          searchWords={query.split(' ')}
          autoEscape
          textToHighlight={post.title}
        />
        {' '}
        {post.url
          && (
            <span className="searchPageStoryRow__titleUrl">
              (
              <a href={post.url}>
                <Highlighter
                  highlightClassName="searchPageStoryRow__titleUrl"
                  searchWords={query.split(' ')}
                  autoEscape
                  textToHighlight={post.url}
                />
              </a>
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
      {post.story_text && (
        <p className="searchPageStoryRow__storyText">
          {parse(post.story_text)}
        </p>
      )}
    </div>
  );
}

export default SearchPageStoryRow;
