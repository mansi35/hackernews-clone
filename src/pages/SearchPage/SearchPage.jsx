/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchPageContent from '../../components/SearchPageContent/SearchPageContent';
import SearchPageHeader from '../../components/SearchPageHeader/SearchPageHeader';
import './SearchPage.scss';

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    query: searchParams.get('query') ? searchParams.get('query') : '',
    tag: 'story',
    sortBy: 'points',
    dateRange: 'all',
    timestampX: 0,
    timestampY: new Date().getTime() / 1000,
  });

  return (
    <div className="searchPage">
      <div className="searchPage__content">
        <SearchPageHeader filters={filters} setFilters={setFilters} />
        <SearchPageContent filters={filters} setFilters={setFilters} />
        <footer className="Footer">
          <ul className="Footer_list">
            <li><a href="/about">About</a></li>
            <li>•</li>
            <li><a href="/settings">Setting</a></li>
            <li>•</li>
            <li><a href="/help">Help</a></li>
            <li>•</li>
            <li><a href="/api">API Documentation</a></li>
            <li>•</li>
            <li><a href="https://news.ycombinator.com" target="_blank" rel="noopener noreferrer">Hacker News</a></li>
            <li>•</li>
            <li><a href="https://github.com/algolia/hn-search" target="_blank" rel="noopener noreferrer">Fork/Contribute</a></li>
            <li>•</li>
            <li><a href="/cool_apps">Cool Apps</a></li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default SearchPage;
