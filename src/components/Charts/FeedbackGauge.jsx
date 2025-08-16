import React from 'react';
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

const FeedbackGauge = ({ value, label, max = 20 }) => {
	const percent = Math.max(0, Math.min(100, Math.round((value / max) * 100)));
	const chartData = [{ value: percent }];

	return (
		<div className="gauge-card">
			<div className="section-title center">{label}</div>
			<div className="gauge-wrap">
				<ResponsiveContainer width="100%" height={220}>
					<RadialBarChart data={chartData} cx="50%" cy="50%" innerRadius="70%" outerRadius="92%" startAngle={90} endAngle={-270}>
						<PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
						<RadialBar dataKey="value" fill="#ef4444" background={{ fill: '#f2f4f8' }} cornerRadius={12} clockWise barSize={14} />
					</RadialBarChart>
				</ResponsiveContainer>
				<div className="gauge-center">
					<div className="gauge-value">{value}</div>
					<div className="gauge-label">Feedback Pending</div>
				</div>
			</div>
			<button className="primary-btn full" type="button">Give Feedback →</button>
		</div>
	);
};

export default FeedbackGauge; 