import React from 'react';
import './how.css';

const steps = [
  {
    title: 'Have a goal in mind',
    description:
      'Goal is attained by the intensity of focus, have a target',
    icon: '🎯',
  },
  {
    title: 'Set the goal here',
    description:
      'Create an account and set tasks you want to achieve',
    icon: '🛠️',
  },
  {
    title: 'Collaborate, focus and work ',
    description:
      'Focus on your goal, ensure youj attain it before the deadline',
    icon: '🤝',
  },
];

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <h2 className="fade-in">How It Works</h2>
      <div className="steps-container fade-in">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="icon">{step.icon}</div>
            <div className="content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;