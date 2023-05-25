import React, { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchQuery: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleQueryFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value) {
      searchParams.set('query', value);
    } else {
      searchParams.delete('query');
    }

    setSearchParams(searchParams);
  };
  return <h1>qwertyui</h1>;
};
