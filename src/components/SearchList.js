import React from 'react';

import SearchItem from '../components/SearchItem';

const SearchList = ({ bookResult }) => {
  return (
    <div>
      <div>
        {bookResult.map((b, index) => {
          return (
            b === null ?
              <React.Fragment /> :
              <SearchItem key={index} style={{ 'maxWidth': '500px', 'marginBottom': '30px' }} book={b} />
          );
        })}
      </div>
    </div>
  );

};


export default SearchList;