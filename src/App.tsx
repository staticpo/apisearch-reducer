import React from 'react';
import './App.css';
import { SearchPage } from './pages/SearchPage';
import { ReducerPage } from './pages/ReducerPage';

function App() {
  const [page, setPage] = React.useState<'search' | 'reducer'>('search');

  return (
    <React.Fragment>
      <nav>
        <button 
          onClick={() => {setPage('search')}}
        >
          Search
        </button>
        <button 
          onClick={() => {setPage('reducer')}}
        >
          Reducer
        </button>
      </nav>
      <main className="App">
        {page === 'search' && (
          <SearchPage />
        )}
        {page === 'reducer' && (
          <ReducerPage />  
        )}
      </main>
    </React.Fragment>
  );
}

export default App;
