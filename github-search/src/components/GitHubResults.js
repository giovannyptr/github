import React from 'react';
import { useSelector } from 'react-redux';
import Pagination from './Pagination';
import Card from './Card';  
import './GitHubResults.css'

function GitHubResults({ currentPage, onNewPageRequest, onPageChange }) {
  const results = useSelector(state => state.github.data);
  const isLoading = useSelector(state => state.github.isLoading);
  const error = useSelector(state => state.github.error);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!results || !results.items || results.items.length === 0) return <p>No results found</p>;

  const itemsPerPage = 10;

  const handlePageChange = (page) => {
    onPageChange(page);
    onNewPageRequest(page);
  }

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!results || !results.items || results.items.length === 0) return <p>No results found</p>;

  return (
    <div className="github-results-grid">
       {results.items.map(repo => (
                <Card key={repo.id} repo={repo} />
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
