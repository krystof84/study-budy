import React, { useState, useEffect } from 'react';
import { Input } from 'components/atoms/Input/Input';
import {
  SearchBarWrapper,
  StatusInfo,
  SearchResult,
  InputSearchWrapper,
} from 'components/organisms/SearchBar/SearchBar.styles';
import axios from 'axios';

export const SearchBar = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [resultSearch, setResultSearch] = useState([]);

  const handleSearchInput = (e) => {
    setSearchInputValue(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`/student/${searchInputValue}`)
      .then((data) => {
        return setResultSearch(data.data.matchingStudents);
      })
      .catch((err) => console.log(err));
  }, [searchInputValue]);

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>

      <InputSearchWrapper>
        <Input
          placeholder="find student"
          value={searchInputValue}
          onChange={handleSearchInput}
        />
        {resultSearch.length > 0 && searchInputValue.length > 0 && (
          <SearchResult>
            {resultSearch.map((resultItem) => (
              <span key={resultItem.name}>{resultItem.name}</span>
            ))}
          </SearchResult>
        )}
      </InputSearchWrapper>
    </SearchBarWrapper>
  );
};
