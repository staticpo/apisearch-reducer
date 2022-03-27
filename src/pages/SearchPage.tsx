import React from 'react';
import { useServices } from '../services';
import { Character } from '../types';
import { SearchResults } from './components/SearchResults';

const SearchPage: React.FC = () => {
  const { fetchCharacter } = useServices();
  const [results, setResults] = React.useState<Character[] | undefined>(undefined);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [resultsCount, setResultsCount] = React.useState<number>(0);
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  const search = React.useCallback(() => {
    console.log('Now searching: ', searchTerm);

    setIsLoading(true);

    fetchCharacter(searchTerm)
      .then((data)=>{
        setResultsCount(data.count);
        setResults(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        //nothing. Error handling should go here
      });

  }, [fetchCharacter, searchTerm]);

  return (
      <div>
        <div>
          <h4>
            Star Wars Character Search
          </h4>
          <div>
            <input 
              type="text" 
              onInput={(event) => {
                setSearchTerm(event.currentTarget.value)
              }}
              onKeyDown={(event)=>{
                if(event.key === 'Enter') { search() }
              }}
            />
            <button 
              type="button"
              onClick={search}
              >
              🔍 Search
            </button>
            {isLoading && (<div className="loader" />)}
          </div>
        </div>
        <div className='searchExplanation'>
          Some names that return multiple results: <strong>Skywalker</strong>, <strong>Fett</strong>, <strong>Organa</strong>.
          <br />
          Partial name search is of course supported.
        </div>
        <div>{resultsCount} results</div>
        <div>
          <SearchResults results={results} />
        </div>
      </div>
  );
};

export { SearchPage };