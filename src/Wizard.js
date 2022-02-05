import React from 'react';
import { compose, withState } from 'recompose';
import Steps, { Step } from 'rc-steps';
import Slider from 'react-slick';
import uuid from 'uuid';

let ReactWizard = ({ title, steps, state, setState }) => {
  const previous = () => {
    setState({ ...state, step: state.step - 1 });
  };

  const next = () => {
    setState({ ...state, step: state.step + 1 });
  };

  const submit = () => {
    console.log('Sending...');
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    //slidesToShow: 1,
    //slidesToScroll: 1,
    arrows: false,
    //fade: true,
    adaptiveHeight: true,
    //vertical: true,
  };

  return (
    <div className="react-wizard">
      <header className="react-wizard-header">
        <h2>{title}</h2>
        <Steps current={state.step}>
          {Object.keys(steps).map(title => (
            <Step title={title} key={uuid.v4()} />
          ))}
        </Steps>
      </header>
      <Slider {...settings} slickGoTo={state.step} className="slider">
        {Object.values(steps).map((DStep, i) => (
          <div key={Object.keys(steps)[i]}>
            <DStep />
          </div>
        ))}
      </Slider>
      <footer className="react-wizard-footer">
        <button
          className="btn-control"
          disabled={state.step === 0}
          onClick={previous}
        >
          Previous
        </button>
        {state.step < Object.keys(steps).length - 1 ? (
          <button className="btn-control" onClick={next}>
            Next
          </button>
        ) : (
          <button className="btn-submit" onClick={submit}>
            Submit
          </button>
        )}
      </footer>
    </div>
  );
};

ReactWizard = compose(
  withState('state', 'setState', {
    step: 0,
  }),
)(ReactWizard);

export default ReactWizard;
