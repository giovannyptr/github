import React from 'react';
import { useSelector } from 'react-redux';
import Pagination from './Pagination';

function GitHubResults({ currentPage, onNewPageRequest, onPageChange }) {
  const results = useSelector(state => state.github.data);
  const isLoading = useSelector(state => state.github.isLoading);
  const error = useSelector(state => state.github.error);

  const itemsPerPage = 10;

  const handlePageChange = (page) => {
    onPageChange(page);
    onNewPageRequest(page);
  }

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!results || !results.items || results.items.length === 0) return <p>No results found</p>;

  return (
    <div className="github-results">
      {results.items.map(repo => (
        <div key={repo.id} className="repo-item">
          <h3><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h3>
          <p>{repo.description}</p>
          <span>Owner: {repo.owner.login}</span>
        </div>
      ))}
      <Pagination 
        totalItems={results.total_count}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange} 
      />
    </div>
  );
}

export default GitHubResults;
