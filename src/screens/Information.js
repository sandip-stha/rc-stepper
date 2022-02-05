import React from 'react';
import { compose, withState } from 'recompose';
import { FormGroup, FormFeedback, Input, Label, Row, Col } from 'reactstrap';
import uuid from 'uuid';
import CountrySelect from '../components/CountrySelect';

let Information = ({ state, setState }) => {
  return [
    <Row key={uuid.v4()}>
      <Col sm={12} md={12} lg={12}>
        <Label style={{ fontSize: 14 }}>
          <strong>Gender</strong>
        </Label>
      </Col>
      <Col sm={12} md={12} lg={12} style={{ display: 'flex' }}>
        <FormGroup check>
          <Label check>
            <Input type="radio" value="M" name="gender" />
            <span style={{ marginLeft: 8 }}>Male</span>
          </Label>
        </FormGroup>
        <FormGroup check style={{ marginLeft: 10 }}>
          <Label check>
            <Input type="radio" value="F" name="gender" />
            <span style={{ marginLeft: 8 }}>Female</span>
          </Label>
        </FormGroup>
      </Col>
    </Row>,
    <Row key={uuid.v4()} style={{ marginTop: 6 }}>
      <Col sm={12} md={6} lg={6}>
        <FormGroup>
          <Label htmlFor="firstName">First name</Label>
          <Input id="firstName" name="firstName" />
        </FormGroup>
      </Col>
      <Col sm={12} md={6} lg={6}>
        <FormGroup>
          <Label>Last name</Label>
          <Input />
        </FormGroup>
      </Col>
    </Row>,
    <Row key={uuid.v4()}>
      <Col sm={12} md={6} lg={6}>
        <FormGroup>
          <Label>Country</Label>
          <CountrySelect />
        </FormGroup>
      </Col>
      <Col sm={12} md={6} lg={6}>
        <FormGroup>
          <Label>National Card ID</Label>
          <Input />
        </FormGroup>
      </Col>
    </Row>,
  ];
};

Information = compose(
  withState('state', 'setState', {
    fields: {
      firstName: '',
      lastName: '',
      gender: '',
      country: '',
      nationalId: '',
    },
    validations: {
      firstName: null,
      lastName: null,
      gender: null,
      country: null,
      nationalId: null,
    },
  }),
)(Information);

export default Information;
