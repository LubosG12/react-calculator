import React from 'react';

import Screen from '../screen/screen.component';
import Keypad from '../keypad/keypad.component';

import './calculator.styles.scss';

const Calculator = () => (
    <div className="calculator">
        <Screen />
        <Keypad />
    </div>
)

export default Calculator;