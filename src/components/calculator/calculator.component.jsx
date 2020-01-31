import React, { useState } from 'react';

import Screen from '../screen/screen.component';
import Keypad from '../keypad/keypad.component';

import './calculator.styles.scss';

function Calculator() {

    const [equation, setEquation] = useState('');
    const [result, setResult] = useState(0);

    const onButtonPress = event => {
        let innerEquation = equation;
        const pressedButton = event.target.innerHTML;
        if (pressedButton === 'C') return this.clear();
        else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') innerEquation += pressedButton;
        else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1) innerEquation += ' ' + pressedButton + ' ';
        else if (pressedButton === '=') {
          try {
            const evalResult = eval(innerEquation);
            const innerResult = Number.isInteger(evalResult)? evalResult : evalResult.toFixed(2);
            setResult(innerResult);
          } catch (error) {
            alert('Invalid Mathematical Equation');
          }
        }
        else {
          innerEquation = innerEquation.trim();
          innerEquation = innerEquation.substr(0, innerEquation.length - 1);
        }
                    
        setEquation(innerEquation);
      }

    const onClear = () => {
        setEquation('');
        setResult(0);
    }

    return(
    <div className="calculator">
    <Screen equation={equation} result={result}/>
    <Keypad onButtonPress={onButtonPress} onClear={onClear}/>
    </div>
    )
}

export default Calculator;