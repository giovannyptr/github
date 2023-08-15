import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGitHubData } from '../actions/githubAction';
import GitHubResults from './GitHubResults';

const GitHubSearch = ({ currentPage, onPageChange }) => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (page = 1) => {
    dispatch(fetchGitHubData(query, 'repositories', page));
  };

  return (
    <div>
      <input 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
        placeholder="Search GitHub"
      />
      <button onClick={() => handleSearch(currentPage)}>Search</button>
      <GitHubResults 
        currentPage={currentPage}
        onNewPageRequest={handleSearch}
        onPageChange={onPageChange} 
      />
    </div>
  );
};

export default GitHubSearch;
