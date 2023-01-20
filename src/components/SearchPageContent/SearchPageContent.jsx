import React, { useEffect, useState } from 'react';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import './SearchPageContent.scss';
import SearchPageStoryRow from '../SearchPageStoryRow/SearchPageStoryRow';
import {
  getArticlesByDate,
  getArticlesByDateRangeDateSorted,
  getArticlesByDateRangePopularitySorted,
  getArticlesByPopularity,
  getLast24hArticlesDateSorted,
  getLast24hArticlesPopularitySorted,
} from '../../api';

function SearchPageContent({ filters, setFilters }) {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [numArticles, setNumArticles] = useState(0);
  const [reqProcessingTime, setReqProcessingTime] = useState(0);

  useEffect(() => {
    if (filters.dateRange === 'all') {
      if (filters.sortBy === 'points') {
        getArticlesByPopularity(pageNumber, filters).then((data) => {
          console.log(data);
          setPosts(data.data.hits);
          setNumArticles(data.data.nbPages * data.data.hitsPerPage);
          setReqProcessingTime(data.data.processingTimeMS / 1000);
        });
      } else {
        getArticlesByDate(pageNumber, filters).then((data) => {
          console.log(data);
          setPosts(data.data.hits);
          setNumArticles(data.data.nbPages * data.data.hitsPerPage);
          setReqProcessingTime(data.data.processingTimeMS / 1000);
        });
      }
    } else if (filters.dateRange === 'last24h') {
      if (filters.sortBy === 'points') {
        console.log(filters);
        getLast24hArticlesPopularitySorted(pageNumber, filters).then((data) => {
          console.log(data);
          setPosts(data.data.hits);
          setNumArticles(data.data.nbPages * data.data.hitsPerPage);
          setReqProcessingTime(data.data.processingTimeMS / 1000);
        });
      } else {
        getLast24hArticlesDateSorted(pageNumber, filters).then((data) => {
          console.log(data);
          setPosts(data.data.hits);
          setNumArticles(data.data.nbPages * data.data.hitsPerPage);
          setReqProcessingTime(data.data.processingTimeMS / 1000);
        });
      }
    } else if (filters.dateRange === 'pastWeek' || filters.dateRange === 'pastMonth' || filters.dateRange === 'pastYear') {
      if (filters.sortBy === 'points') {
        console.log(filters);
        getArticlesByDateRangePopularitySorted(pageNumber, filters).then((data) => {
          console.log(data);
          setPosts(data.data.hits);
          setNumArticles(data.data.nbPages * data.data.hitsPerPage);
          setReqProcessingTime(data.data.processingTimeMS / 1000);
        });
      } else {
        getArticlesByDateRangeDateSorted(pageNumber, filters).then((data) => {
          console.log(data);
          setPosts(data.data.hits);
          setNumArticles(data.data.nbPages * data.data.hitsPerPage);
          setReqProcessingTime(data.data.processingTimeMS / 1000);
        });
      }
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
        setFilters({ ...filters, [e.target.name]: e.target.value });
      }
    } else {
      setFilters({ ...filters, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="searchPageContent">
      <div className="searchPageContent__filters">
        <div className="searchPageContent__filtersLeft">
          <span>Search</span>
          <select name="tag" value={filters.tag} onChange={handleChange}>
            <option value="(story,comment)">All</option>
            <option value="story">Stories</option>
            <option value="comment">Comments</option>
          </select>
          <span>by</span>
          <select name="sortBy" value={filters.sortBy} onChange={handleChange}>
            <option value="points">Popularity</option>
            <option value="date">Date</option>
          </select>
          <span>for</span>
          <select name="dateRange" value={filters.dateRange} onChange={handleChange}>
            <option value="all">All time</option>
            <option value="last24h">Last 24h</option>
            <option value="pastWeek">Past Week</option>
            <option value="pastMonth">Past Month</option>
            <option value="pastYear">Past Year</option>
          </select>
        </div>
        <div className="searchPageContent__filtersRight">
          <span>
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
        {posts.map((post, i) => <SearchPageStoryRow post={post} key={i} />)}
      </div>
      <p className="newStoriesContent__nextPage" onClick={() => setPageNumber(pageNumber + 1)}>More</p>
    </div>
  );
}

export default SearchPageContent;
