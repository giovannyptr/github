import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import GitHubSearch from './components/GitHubFinder';  // Import the component

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <h1>GitHub Search App</h1>
          <GitHubSearch /> 
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
