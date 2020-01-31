import React from 'react';

import './keypad-row.styles.scss'

const keypadRow = (props) => (
  <div className="keypad__row">
    {props.children}
  </div>
);

export default keypadRow;