import React from 'react';
import { Character } from '../../types';


interface Props {
  results?: Character[];
}
interface SearchResultProps {
  character: Character;
}

const SearchResult: React.FC<SearchResultProps> = ({character}) => {
  return (
    <div className='searchResult'>
      <h4>🌟 {character.name}</h4>
      <p>{character.gender}, Date of Birth: {character.birth_year}</p>
      <p>{character.height} cm, {character.mass} kg</p>
    </div>
  );
};

const SearchResults: React.FC<Props> = ({results}) => {
  return (
      <div>
        {results && (
          results.map((result) => {
            return <SearchResult character={result as Character} key={result.name} />;
          })
        )}
      </div>
  );
};

export { SearchResults };