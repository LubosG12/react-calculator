import React from 'react';

import './result-screen.styles.scss';

const ResultScreen = (props) => (
  <div className="result-screen">
    {props.children}
  </div>
);

export default ResultScreen;