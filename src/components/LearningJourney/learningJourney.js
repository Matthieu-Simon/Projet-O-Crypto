import React from 'react';
import './learningJourneyStyles.scss';
import CircularProgress from '@mui/material/CircularProgress';
import Avatar from '@mui/material/Avatar';

function LearningJourney() {
  return (
    <div className="card-container">
      <div className="container-test">
        <div className="card">
          <div>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 50, height: 50 }}
            />
          </div>
        </div>
      </div>
      <div className="container-test">
        <div className="card">
          <div className="card-header">
            <CircularProgress variant="determinate" value={50} />
            <p>Expert trader - niveau 3</p>
          </div>
          <div className="card-body">
            <h3>Expert trader - niveau 3</h3>
            <p>300 pts</p>
          </div>
          <div className="card-footer">
            <CircularProgress variant="determinate" value={50} />
            <p>30 minutes</p>
          </div>
        </div>
      </div>
      <div className="container-test">
        <div className="card">
          <div className="card-header">
            <CircularProgress variant="determinate" value={50} />
            <p>Expert trader - niveau 3</p>
          </div>
          <div className="card-body">
            <h3>Expert trader - niveau 3</h3>
            <p>300 pts</p>
          </div>
          <div className="card-footer">
            <CircularProgress variant="determinate" value={50} />
            <p>30 minutes</p>
          </div>
        </div>
      </div>
      <div className="container-test">
        <div className="card">
          <div className="card-header">
            <CircularProgress variant="determinate" value={50} />
            <p>Expert trader - niveau 3</p>
          </div>
          <div className="card-body">
            <h3>Expert trader - niveau 3</h3>
            <p>300 pts</p>
          </div>
          <div className="card-footer">
            <CircularProgress variant="determinate" value={50} />
            <p>30 minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(LearningJourney);
