// This component renders the list of directions
import React from 'react';
import DirectionStep from './DirectionStep';

const DirectionsList = ({ steps }) => {
  return (
    <div className="directions-list">
      <h3 style={{fontSize:'25px'}}>Directions</h3>
      <ol>
        {steps.map((step, index) => {
          return(<DirectionStep key={index} step={step} />)
})}
      </ol>
    </div>
  );
};

export default DirectionsList;