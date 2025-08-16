import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiUsers, FiBook, FiCalendar, FiClipboard, FiMusic, FiTarget, FiDollarSign, FiGift, FiSettings, FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
  const navItems = [
    { to: '/', label: 'Home', icon: <FiHome /> },
    { to: '/students', label: 'My Students', icon: <FiUsers /> },
    { to: '/courses', label: 'My Courses', icon: <FiBook /> },
    { to: '/calendar', label: 'Calendar', icon: <FiCalendar /> },
    { to: '/assignments', label: 'Assignment', icon: <FiClipboard /> },
    { to: '/music-library', label: 'Music Library', icon: <FiMusic /> },
    { to: '/practice-studio', label: 'Practice Studio', icon: <FiTarget /> },
    { to: '/payment-summary', label: 'Payment Summary', icon: <FiDollarSign /> },
    { to: '/refer', label: 'Refer & Earn', icon: <FiGift /> },
    { to: '/settings', label: 'Settings', icon: <FiSettings /> }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">UPKRAFT</div>
      <nav className="sidebar-nav">
        {navItems.map(item => (
          <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-footer">
        <button className="logout-btn" type="button">
          <FiLogOut />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar; 