import React from 'react';
import { compose, withState } from 'recompose';
import { Row, Col, FormGroup, Label } from 'reactstrap';
import useCamera from '../helpers/camera';

let stream;

let Verify = ({ state, setState }) => {
  const startCamera = async () => {
    const video = document.getElementById('preview');
    stream = await useCamera(video);
    setState({ ...state, recording: true });
  };
  const takePhoto = () => {
    const video = document.getElementById('preview');
    const canvas = document.getElementById('photo');
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, 400, 260);
    setState({ ...state, recording: false, taken: true }, () => {
      stream.getTracks()[0].stop();
      //video.remove();
    });
  };

  return (
    <Row>
      <Col sm={12} md={12} lg={12}>
        <div className="upload-legend">
          <span>
            Take a photo of you with your National Card, Passport or Drive
            License. In the same photo, make a reference to the following
            points. Make sure your face is clearly visible and that all identity
            card details are clearly readable.<br />
            <div className="points">
              <span className="check">
                <i className="fas fa-check" />
                <p>Face clearly visible</p>
              </span>
              <span className="check">
                <i className="fas fa-check" />
                <p>Photo ID clearly visible</p>
              </span>
              <span className="check">
                <i className="fas fa-check" />
                <p>Note with word "BitProfit"</p>
              </span>
              <span className="check">
                <i className="fas fa-check" />
                <p>Note with today's date</p>
              </span>
            </div>
          </span>
        </div>
      </Col>
      <Col sm={12} md={12} lg={12}>
        <FormGroup>
          <Label>
            <strong>Selfie with Card ID and Note</strong>
            <button
              disabled={state.recording}
              className="selfie-btn"
              onClick={startCamera}
            >
              Use camera
            </button>
            <button
              disabled={!state.recording}
              className="snapshot-btn"
              onClick={takePhoto}
            >
              <i className="fas fa-camera-retro" style={{ marginRight: 8 }} />
              Take photo
            </button>
          </Label>
        </FormGroup>
      </Col>
      <Col sm={12} md={12} lg={12}>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <section className="doc-upload-area">
              <figure className="upload-file-example">
                <img src="https://i.imgur.com/hDCPUhx.png" />
                <figcaption>Example of selfie</figcaption>
              </figure>
            </section>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <section className="doc-upload-area">
              <section className="selfie-area">
                <div
                  className="selfie-preview"
                  style={{ position: 'relative' }}
                >
                  <video
                    id="preview"
                    height={260}
                    width={400}
                    style={{
                      objectFit: 'fill',
                      zIndex: 1,
                    }}
                  />
                  <canvas
                    id="photo"
                    height={260}
                    width={400}
                    style={{
                      objectFit: 'fill',
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      zIndex: state.recording ? -1 : state.taken ? 2 : -1,
                    }}
                  />
                </div>
                <p>Your selfie preview</p>
              </section>
            </section>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

Verify = compose(
  withState('state', 'setState', {
    taken: false,
  }),
)(Verify);

export default Verify;
