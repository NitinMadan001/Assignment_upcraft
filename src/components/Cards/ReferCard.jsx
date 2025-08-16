// ReferCard.jsx - Clean version without image

import React from 'react';

const ReferCard = () => {
  return (
    <div className="card refer-card">
      <div className="refer-content">
        <h3 className="refer-title">Refer and Earn</h3>
        <p className="refer-subtitle">
          Invite friends and earn exclusive rewards for every successful referral
        </p>
        <button className="primary-btn">
          Refer Now
        </button>
      </div>
    </div>
  );
};

export default ReferCard;