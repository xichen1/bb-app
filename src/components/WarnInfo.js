import React from 'react';

import '../styles/warn.css'
const WarnInfo = ({ errorType, errorInfo }) => {

  return (
    <div className="errorContainer">
      <div>{`${errorType} error!`}</div>
      <div>{errorInfo}</div>
    </div>
  );
};

export default WarnInfo;