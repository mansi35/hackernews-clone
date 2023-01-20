import React from 'react';
import logo from '../../images/logo.gif';
import './NewStoriesHeader.scss';

function NewStoriesHeader() {
  return (
    <div className="newStoriesHeader">
      <div className="newStoriesHeader__left">
        <div className="newStoriesHeader__logo">
          <img src={logo} alt="logo" />
          <h3 className="newStoriesHeader__head">Hacker News</h3>
        </div>
        <div className="newStoriesHeader__menu">
          <h4 className="newStoriesHeader__new">new</h4>
          <h4>| past | comments | ask | show | jobs | submit</h4>
        </div>
      </div>
      <h4 className="newStoriesHeader__login">login</h4>
    </div>
  );
}

export default NewStoriesHeader;
