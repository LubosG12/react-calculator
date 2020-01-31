import React from 'react';

import KeypadRow from './keypad-row/keypad-row.component';
import Button from '../button/button.component';

import './keypad.styles.scss';

const keypad = (props) => {
  const { onButtonPress, onClear } = props;

  // onButtonPress={onButtonPress}
  return(<section className="keypad">
  <KeypadRow>
    <Button onButtonPress={onClear}>C</Button>
    <Button onButtonPress={onButtonPress}>&larr;</Button>
    <Button onButtonPress={onButtonPress}>%</Button>
    <Button onButtonPress={onButtonPress}>/</Button>
  </KeypadRow>

  <KeypadRow>
    <Button onButtonPress={onButtonPress}>9</Button>
    <Button onButtonPress={onButtonPress}>8</Button>
    <Button onButtonPress={onButtonPress}>7</Button>
    <Button onButtonPress={onButtonPress}>*</Button>
  </KeypadRow>

  <KeypadRow>
    <Button onButtonPress={onButtonPress}>6</Button>
    <Button onButtonPress={onButtonPress}>5</Button>
    <Button onButtonPress={onButtonPress}>4</Button>
    <Button onButtonPress={onButtonPress}>-</Button>
  </KeypadRow>

  <KeypadRow>
    <Button onButtonPress={onButtonPress}>3</Button>
    <Button onButtonPress={onButtonPress}>2</Button>
    <Button onButtonPress={onButtonPress}>1</Button>
    <Button onButtonPress={onButtonPress}>+</Button>
  </KeypadRow>

  <KeypadRow>
    <Button onButtonPress={onButtonPress}>0</Button>
    <Button onButtonPress={onButtonPress}>.</Button>
    <Button type="large" onButtonPress={onButtonPress}>=</Button>
  </KeypadRow>
</section>
)
  
};
export default keypad;