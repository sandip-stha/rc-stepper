import React from 'react';
import { compose, withState } from 'recompose';
import { FormGroup, Input, Label, Row, Col, Button } from 'reactstrap';

let Identity = ({ state, setState }) => {
  const uploadFrontPic = event => {};
  const uploadBackPic = event => {};
  return (
    <Row>
      <Col sm={12} md={12} lg={12}>
        <p className="upload-legend">
          <span>
            Please make sure that the photos are complete and clearly visible in
            JPG format.
          </span>
        </p>
      </Col>
      <Col sm={12} md={12} lg={12}>
        <FormGroup>
          <Label>
            <strong>National Card (front)</strong>
            <span className="upload-btn">
              <input type="file" id="front-doc" onChange={uploadFrontPic} />
              <label htmlFor="front-doc">
                <i className="far fa-image" style={{ marginRight: 8 }} />Choose
              </label>
            </span>
          </Label>
          <section className="doc-upload-area">
            <figure className="upload-file-example">
              <img src="https://i.imgur.com/h0qp5gL.png" />
              <figcaption>Example: National card</figcaption>
            </figure>
          </section>
        </FormGroup>
      </Col>
      <hr />
      <Col sm={12} md={12} lg={12}>
        <FormGroup>
          <Label>
            <strong>National Card (back)</strong>
            <span className="upload-btn">
              <input type="file" id="back-doc" onChange={uploadBackPic} />
              <label htmlFor="back-doc">
                <i className="far fa-image" style={{ marginRight: 8 }} />Choose
              </label>
            </span>
          </Label>
          <section className="doc-upload-area">
            <figure className="upload-file-example">
              <img src="https://i.imgur.com/flDSeTQ.png" />
              <figcaption>Example: National card</figcaption>
            </figure>
          </section>
        </FormGroup>
      </Col>
    </Row>
  );
};

Identity = compose(withState('state', 'setState', {}))(Identity);

export default Identity;
