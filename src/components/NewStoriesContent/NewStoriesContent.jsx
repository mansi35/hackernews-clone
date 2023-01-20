import React, { useEffect, useState } from 'react';
import { getArticles } from '../../api';
import StoryRow from '../StoryRow/StoryRow';
import './NewStoriesContent.scss';

function NewStoriesContent() {
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    getArticles(pageNumber).then((data) => {
      console.log(data);
      setArticles(data.data.hits);
    });
  }, [pageNumber]);

  return (
    <div className="newStoriesContent">
      {articles.map((article, i) => <StoryRow article={article} index={(pageNumber) * 30 + i} key={i} />)}
      <p className="newStoriesContent__nextPage" onClick={() => setPageNumber(pageNumber + 1)}>More</p>
      <div className="newStoriesContent__separator" />
      <center>
        <span className="newStoriesContent__yclinks">
          <a href="newsguidelines.html">Guidelines</a>
          {' '}
          |
          {' '}
          <a href="newsfaq.html">FAQ</a>
          {' '}
          |
          {' '}
          <a href="lists">Lists</a>
          {' '}
          |
          {' '}
          <a href="https://github.com/HackerNews/API">API</a>
          {' '}
          |
          {' '}
          <a href="security.html">Security</a>
          {' '}
          |
          {' '}
          <a href="https://www.ycombinator.com/legal/">Legal</a>
          {' '}
          |
          {' '}
          <a href="https://www.ycombinator.com/apply/">Apply to YC</a>
          {' '}
          |
          {' '}
          <a href="mailto:hn@ycombinator.com">Contact</a>
        </span>
        <br />
        <br />
        <form className="newStoriesContent__search" method="get" action="//hn.algolia.com/">
          <p>Search:</p>
          <input type="text" name="q" size="17" autoCorrect="off" spellCheck="false" autoCapitalize="off" autoComplete="false" />
        </form>
      </center>
    </div>
  );
}

export default NewStoriesContent;
