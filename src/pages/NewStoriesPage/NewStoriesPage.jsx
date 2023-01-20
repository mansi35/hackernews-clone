import React from 'react';
import NewStoriesContent from '../../components/NewStoriesContent/NewStoriesContent';
import NewStoriesHeader from '../../components/NewStoriesHeader/NewStoriesHeader';
import './NewStoriesPage.scss';

function NewStoriesPage() {
  return (
    <div className="newStoriesPage">
      <div className="newStoriesPage__content">
        <NewStoriesHeader />
        <NewStoriesContent />
      </div>
    </div>
  );
}

export default NewStoriesPage;
