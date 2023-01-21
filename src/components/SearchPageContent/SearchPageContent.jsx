import React, { useEffect, useState } from 'react';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { Pagination, PaginationItem } from '@mui/material';
import SearchPageStoryRow from '../SearchPageStoryRow/SearchPageStoryRow';
import SearchPageCommentRow from '../SearchPageCommentRow/SearchPageCommentRow';
import {
  getArticlesByDate,
  getArticlesByPopularity,
} from '../../api';
import './SearchPageContent.scss';

function SearchPageContent({ filters, setFilters }) {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [numArticles, setNumArticles] = useState(0);
  const [reqProcessingTime, setReqProcessingTime] = useState(0);

  useEffect(() => {
    if (filters.sortBy === 'points') {
      getArticlesByPopularity(pageNumber, filters).then((data) => {
        console.log(data);
        setPosts(data.data.hits);
        setNumberOfPages(data.data.nbPages);
        setNumArticles(data.data.nbHits);
        setReqProcessingTime(data.data.processingTimeMS / 1000);
      });
    } else {
      getArticlesByDate(pageNumber, filters).then((data) => {
        console.log(data);
        setPosts(data.data.hits);
        setNumArticles(data.data.nbHits);
        setReqProcessingTime(data.data.processingTimeMS / 1000);
      });
    }
  }, [pageNumber, filters]);

  const handleChange = (e) => {
    if (e.target.name === 'dateRange') {
      if (e.target.value === 'last24h') {
        const curr = new Date();
        const firstday = new Date(curr.setDate(curr.getDate() - 1)).getTime();
        console.log(new Date(firstday));
        setFilters({ ...filters, [e.target.name]: e.target.value, timestampX: firstday / 1000 });
      } else if (e.target.value === 'pastWeek') {
        const curr = new Date();
        const firstday = new Date(curr.setDate(curr.getDate() - 6));
        const lastday = new Date().getTime();
        setFilters({
          ...filters, [e.target.name]: e.target.value, timestampX: firstday / 1000, timestampY: lastday / 1000,
        });
      } else if (e.target.value === 'pastMonth') {
        const curr = new Date();
        const firstday = new Date(curr.setMonth(curr.getMonth() - 1)).getTime();
        const lastday = new Date().getTime();
        setFilters({
          ...filters, [e.target.name]: e.target.value, timestampX: firstday / 1000, timestampY: lastday / 1000,
        });
      } else if (e.target.value === 'pastYear') {
        const curr = new Date();
        const firstday = new Date(curr.setFullYear(curr.getFullYear() - 1)).getTime();
        const lastday = new Date().getTime();
        setFilters({
          ...filters, [e.target.name]: e.target.value, timestampX: firstday / 1000, timestampY: lastday / 1000,
        });
      } else {
        setFilters({
          ...filters, [e.target.name]: e.target.value, timestampX: 0, timestampY: new Date().getTime() / 1000,
        });
      }
    } else {
      setFilters({ ...filters, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="searchPageContent">
      <div className="searchPageContent__filters">
        <div className="searchPageContent__filtersLeft">
          <span className="searchPageContent__filtersFields">Search</span>
          <select name="tag" value={filters.tag} onChange={handleChange}>
            <option value="(story,comment)">All</option>
            <option value="story">Stories</option>
            <option value="comment">Comments</option>
          </select>
          <span className="searchPageContent__filtersFields">by</span>
          <select name="sortBy" value={filters.sortBy} onChange={handleChange}>
            <option value="points">Popularity</option>
            <option value="date">Date</option>
          </select>
          <span className="searchPageContent__filtersFields">for</span>
          <select name="dateRange" value={filters.dateRange} onChange={handleChange}>
            <option value="all">All time</option>
            <option value="last24h">Last 24h</option>
            <option value="pastWeek">Past Week</option>
            <option value="pastMonth">Past Month</option>
            <option value="pastYear">Past Year</option>
          </select>
        </div>
        <div className="searchPageContent__filtersRight">
          <span className="searchPageContent__filtersFields">
            {numArticles}
            {' '}
            results (
            {reqProcessingTime}
            {' '}
            seconds)
          </span>
          <ShareOutlinedIcon />
        </div>
      </div>
      <div className="searchPageContent__results">
        {posts.map((post, i) => {
          if (post.parent_id === null) {
            return (
              <SearchPageStoryRow post={post} query={filters.query} key={i} />
            );
          }
          return (
            <SearchPageCommentRow post={post} query={filters.query} key={i} />
          );
        })}
      </div>
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
    </div>
  );
}

export default SearchPageContent;
