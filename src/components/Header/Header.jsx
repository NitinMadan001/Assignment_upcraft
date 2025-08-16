import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="header">
      <div className="search">
        <FiSearch />
        <input type="text" placeholder="Search here" aria-label="Search" />
      </div>
      <div className="header-actions">
        <div className="avatar" aria-label="User avatar" />
        <div className="user-meta">
          <div className="name">Sherry Wolf</div>
          <div className="role">Tutor</div>
        </div>
      </div>
    </header>
  );
};

export default Header; 