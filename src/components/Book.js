import React, { useState } from 'react';

const Book = ({ book }) => {
  const [show, setShow] = useState(true);

  return (
    show ?
      <div>
        {book.author}, {book.about}
      </div> :
      <div></div>
  );

};

export default Book;