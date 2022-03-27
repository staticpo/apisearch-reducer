import React from 'react';
import { SEARCH_API_URL, REPLACE_CHAR } from './constants';
import { apiResponse } from '../types';

const useServices = () => {

  const fetchCharacter = React.useCallback((searchTerm: string): Promise<apiResponse> => {
    const searchURL = SEARCH_API_URL.replace(REPLACE_CHAR, searchTerm);

    return fetch(searchURL)
      .then((response) => {
        return response.json();
      })
      .catch(() => {
        console.log('API ERROR - some fancy error processing should be here');
    });
  }, []);


  return {
    fetchCharacter,
  } 
};

export { useServices };