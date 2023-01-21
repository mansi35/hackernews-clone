import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.gif';
import './NewStoriesHeader.scss';

function NewStoriesHeader() {
  return (
    <div className="newStoriesHeader">
      <div className="newStoriesHeader__left">
        <Link className="newStoriesHeader__logo" to="/">
          <img src={logo} alt="logo" />
          <h3 className="newStoriesHeader__head">Hacker News</h3>
        </Link>
        <div className="newStoriesHeader__menu">
          <h4 className="newStoriesHeader__new">new</h4>
          <h4>| past | comments | ask | jobs | submit</h4>
        </div>
      </div>
      <h4 className="newStoriesHeader__login">login</h4>
    </div>
  );
}

export default NewStoriesHeader;
