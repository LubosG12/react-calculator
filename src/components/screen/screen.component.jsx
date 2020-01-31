import React from 'react';

import ResultScreen from './result-screen/result-screen.component';
import ComputationScreen from './computation-screen/computation-screen.component';

import './screen.styles.scss';

const Screen = (props) => {

  const { equation, result } = props;

   return( 
   <section className="screen">
    <ResultScreen>{result}</ResultScreen>
    <ComputationScreen>{equation}</ComputationScreen>
    </section>
    )
};


  export default Screen;