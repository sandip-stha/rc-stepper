import React from 'react';
import { compose, withState, lifecycle } from 'recompose';
import Select from 'react-select';
import uuid from 'uuid';
import getCountries from '../requests/countries';

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
  },
  flag: {
    borderRadius: 2,
    height: 15,
    width: 25,
  },
  name: {
    fontSize: 15,
    marginLeft: 8,
  },
};

const Option = ({ onSelect, onFocus, className, option, isFocused, state }) => {
  const handleMouseDown = event => {
    event.preventDefault();
    event.stopPropagation();
    onSelect(option, event);
  };
  const handleMouseEnter = event => {
    onFocus(option, event);
  };
  const handleMouseMove = event => {
    if (isFocused) return;
    onFocus(option, event);
  };

  return (
    <div
      className={className}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      title={option.title}
    >
      <div style={styles.container}>
        <img style={styles.flag} src={option.flag} />
        <span style={styles.name}>{option.name}</span>
      </div>
    </div>
  );
};

const Value = ({ value }) => (
  <div className="Select-value" title={value.title}>
    <span className="Select-value-label">
      <div style={styles.container}>
        <img style={styles.flag} src={value.flag} />
        <span style={styles.name}>{value.name}</span>
      </div>
    </span>
  </div>
);

let CountrySelect = ({ state, setState }) => {
  const updateValue = value => {
    setState({ ...state, value });
  };
  return (
    <Select
      options={state.countries}
      optionComponent={Option}
      valueComponent={Value}
      placeholder="Select your country"
      value={state.value}
      onChange={updateValue}
    />
  );
};

CountrySelect.onMount = async function() {
  const countries = await getCountries();
  this.props.setState({ ...this.props.state, countries });
};

CountrySelect = compose(
  withState('state', 'setState', { countries: [], value: '' }),
  lifecycle({
    componentDidMount: CountrySelect.onMount,
  }),
)(CountrySelect);

export default CountrySelect;
