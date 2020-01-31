import React from 'react';

import './computation-screen.styles.scss';

const ComputationScreen = (props) => (
  <div className="computation-screen">
   {props.children}
  </div>
);

export default ComputationScreen;