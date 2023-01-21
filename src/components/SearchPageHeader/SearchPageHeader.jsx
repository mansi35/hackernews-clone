/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { ReactComponent as SettingsIcon } from '../../images/settingsIcon.svg';
import { ReactComponent as SearchIcon } from '../../images/searchIcon.svg';
import './SearchPageHeader.scss';

function SearchPageHeader({ filters, setFilters }) {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="SearchHeader_search">
      <span className="SearchHeader_logo">
        <a href="/"><img src="//d1sz9gun5ag95e.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png" alt="logo" /></a>
        <a href="/" className="SearchHeader_label">
          <div>
            Search
            <br />
            Hacker News
          </div>
        </a>
      </span>
      <div className="SearchHeader_container">
        <span className="SearchIcon">
          <SearchIcon />
        </span>
        <input type="search" placeholder="Search stories by title, url or author" className="SearchInput" name="query" value={filters.query} onChange={handleChange} />
        <div className="PoweredBy">
          <span className="searchHeader__searchByText">Search by</span>
          <a href="https://www.algolia.com/?utm_source=hn_search&amp;amp;utm_medium=link&amp;amp;utm_term=logo&amp;amp;utm_campaign=hn_algolia" title="Realtime Search Engine" target="_blank" rel="noreferrer">
            <img src="//d1sz9gun5ag95e.cloudfront.net/packs/media/images/logo-algolia-blue-35c461b6.svg" alt="Algolia Logo" />
          </a>
        </div>
      </div>
      <div className="SearchHeader_settings">
        <a href="/settings">
          <SettingsIcon />
          {' '}
          <span className="searchHeader__settingsText">Settings</span>
        </a>
      </div>

    </div>
  );
}

export default SearchPageHeader;
