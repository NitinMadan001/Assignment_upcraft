import React from 'react';
import { FiUsers, FiBook, FiAward } from 'react-icons/fi';
import avatar from '../../assets/avatar.jpeg';

const MetricPill = ({ icon, label, value }) => {
	return (
		<div className="metric-pill">
			<span className="metric-left">
				<span className="metric-icon">{icon}</span>
				<span className="metric-label">{label}</span>
			</span>
			<span className="metric-count">{value}</span>
		</div>
	);
};

const ProfileCard = ({ tutor }) => {
	return (
		<div className="card profile-card profile-accent">
			<div className="section-title">Profile</div>
			<div className="profile-row">
				<div className="avatar-wrap">
					<div className="avatar-ring">
						<div className="avatar-inner">
							<img 
								className="profile-avatar" 
								src={avatar} 
								alt={`${tutor.name} avatar`}
								loading="lazy"
							/>
						</div>
					</div>
				</div>
				<div className="profile-right">
					<div className="profile-info">
						<div className="profile-name">{tutor.name}</div>
						<div className="profile-role">{tutor.role}</div>
					</div>
					<div className="metric-list">
						<MetricPill icon={<FiUsers />} label="Students" value={tutor.stats.students} />
						<MetricPill icon={<FiBook />} label="Course" value={tutor.stats.courses} />
						<MetricPill icon={<FiAward />} label="Reward" value={tutor.stats.rewards} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;