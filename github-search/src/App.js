import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import GitHubSearch from './components/GitHubFinder';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <h1>GitHub Searcher</h1>
          <p>Search User or Repositories below</p>
          <GitHubSearch 
            currentPage={currentPage} 
            onPageChange={handlePageChange}
          /> 
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
