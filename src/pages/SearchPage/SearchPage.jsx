import React, { useState } from 'react';
import SearchPageContent from '../../components/SearchPageContent/SearchPageContent';
import SearchPageHeader from '../../components/SearchPageHeader/SearchPageHeader';
import './SearchPage.scss';

function SearchPage() {
  const [filters, setFilters] = useState({
    query: '',
    tag: 'story',
    sortBy: 'points',
    dateRange: 'all',
    timestampX: new Date().toISOString(),
    timestampY: new Date().toISOString(),
  });

  return (
    <div className="searchPage">
      <div className="searchPage__content">
        <SearchPageHeader filters={filters} setFilters={setFilters} />
        <SearchPageContent filters={filters} setFilters={setFilters} />
      </div>
    </div>
  );
}

export default SearchPage;
