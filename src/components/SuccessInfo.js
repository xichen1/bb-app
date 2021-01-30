import React from 'react';

import '../styles/warn.css'
const SuccessInfo = ({ successInfo }) => {

  return (
    <div className="successContainer">
      <div>{successInfo}</div>
    </div>
  );
};

export default SuccessInfo;