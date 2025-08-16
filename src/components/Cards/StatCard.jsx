import React from 'react';

const StatCard = ({ title, value, suffix }) => {
	return (
		<div className="card stat-card">
			<div className="stat-content">
				<div className="stat-value">
					<span className="stat-number">{value}</span>
					{suffix && <span className="stat-suffix">{suffix}</span>}
				</div>
				<div className="stat-title">{title}</div>
			</div>
		</div>
	);
};

export default StatCard;