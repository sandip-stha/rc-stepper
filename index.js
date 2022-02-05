import './src/styles/iconfont.css';
import './src/styles/steps.css';
import './src/styles/index.css';
import React from 'react';
import { render } from 'react-dom';
import Wizard from './src/Wizard';
import Information from './src/screens/Information';
import Documents from './src/screens/Identity';
import Verify from './src/screens/Verify';

const steps = {
  Information,
  Documents,
  Verify,
};

const App = () => (
  <div className="verify-page">
    <Wizard title="Account confirmation" steps={steps} />
  </div>
);

render(<App />, document.getElementById('root'));
