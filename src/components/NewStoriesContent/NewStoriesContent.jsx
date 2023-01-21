import React, { useEffect, useState } from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import { getArticles } from '../../api';
import StoryRow from '../StoryRow/StoryRow';
import './NewStoriesContent.scss';

function NewStoriesContent() {
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    getArticles(pageNumber).then((data) => {
      setArticles(data.data.hits);
      setNumberOfPages(data.data.nbPages);
    });
  }, [pageNumber]);

  return (
    <div className="newStoriesContent">
      {articles.map((article, i) => <StoryRow article={article} index={(pageNumber) * 30 + i} key={i} />)}
      <center>
        <Pagination
          classes={{ ul: 'newStoriesContent__pagination' }}
          count={numberOfPages}
          page={Number(pageNumber + 1)}
          variant="outlined"
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem {...item} component="button" onClick={() => setPageNumber(pageNumber + 1)} />
          )}
        />
      </center>
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
        <form className="newStoriesContent__search" method="get" action="//hackernews-clone-tan.vercel.app/search/">
          <p>Search:</p>
          <input type="text" name="query" size="17" autoCorrect="off" spellCheck="false" autoCapitalize="off" autoComplete="false" />
        </form>
      </center>
    </div>
  );
}

export default NewStoriesContent;
