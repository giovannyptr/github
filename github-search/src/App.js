import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import GitHubSearch from './components/GitHubFinder';
import githubImg from './github-mark.png'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <div cllasName="containerApp">
          <img className="logogit" src={githubImg}/>
          <h1 className='title'>GitHub Searcher</h1>
          <p className='sm'>Search User or Repositories below</p>
          </div>
          <div className="githubsearch">
          <GitHubSearch 
            currentPage={currentPage} 
            onPageChange={handlePageChange}
          
          /> 
        </div>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
