import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Settings = (props) => {
  const { callBack, avKey, avCallBack } = props;
  const [currAvKey, setCurrAvKey] = useState(avKey);

  return (
    <div className="modal show" tabIndex="-1" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" style={{ color: '#FFF' }}>Settings</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => callBack(false)}
            />
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row">
                <div className="col col-3" style={{ color: '#FFF' }}>
                  API KEY:
                </div>
                <div className="col col-3">
                  <input
                    type="text"
                    name="apiKey"
                    id="apiKey"
                    value={currAvKey}
                    onChange={(e) => setCurrAvKey(e.currentTarget.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => callBack(false)}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => { avCallBack(currAvKey); callBack(false); }}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Settings.defaultProps = {
  avKey: '',
};

Settings.propTypes = {
  avCallBack: PropTypes.func.isRequired,
  avKey: PropTypes.string,
  callBack: PropTypes.func.isRequired,
};

export default Settings;
