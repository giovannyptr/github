import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGitHubData } from '../actions/githubAction';

const GitHubSearch = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  
  const data = useSelector(state => state.github.data);
  const isLoading = useSelector(state => state.github.isLoading);
  const error = useSelector(state => state.github.error);

  const handleSearch = () => {
    dispatch(fetchGitHubData(query, 'repositories', 1)); // For example, searching repositories
  };

  return (
    <div>
      <input 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
        placeholder="Search GitHub"
      />
      <button onClick={handleSearch}>Search</button>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {data.items && data.items.map(item => (
          <li key={item.id}>{item.name || item.login}</li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubSearch;
