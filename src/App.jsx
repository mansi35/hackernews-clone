import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewStoriesPage from './pages/NewStoriesPage/NewStoriesPage';
import SearchPage from './pages/SearchPage/SearchPage';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<NewStoriesPage />} />
          <Route exact path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
