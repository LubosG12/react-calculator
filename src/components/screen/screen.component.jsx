import React from 'react';

import ResultScreen from './result-screen/result-screen.component';
import ComputationScreen from './computation-screen/computation-screen.component';

import './screen.styles.scss';

const Screen = () => (
    <section className="screen">
      <ResultScreen />
      <ComputationScreen />
    </section>
  );


  export default Screen;