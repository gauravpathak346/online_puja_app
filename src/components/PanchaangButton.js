// PanchaangButton.js
import React from 'react';
import './PanchaangButton.css'; // Import CSS file for styling

const PanchaangButton = ({ url }) => {
  return (
    <a href={url} className="panchaang-button">
      Panchaang
    </a>
  );
};

export default PanchaangButton;
