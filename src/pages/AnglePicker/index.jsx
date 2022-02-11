import React, { useState } from 'react';
import AnglePicker from '../../components/AnglePicker';

const AnglePickerStory = () => {
  const [localAngle, setLocalAngle] = useState(0);

  const background = `linear-gradient(
			${localAngle}deg, 
			rgb(238, 241, 11) 0%, rgb(208, 2, 27) 51.1%,
			rgb(126, 32, 207) 100%)`;
  return (
    <div className="aps" >
      <AnglePicker angle={localAngle} setAngle={setLocalAngle} size={140} />
      <h4>Background preview for {localAngle} Angle</h4>
      <div className="preview" style={{ background, width: 150, height: 150 }} />
    </div>
  );
};

export default AnglePickerStory;