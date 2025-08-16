import React from 'react';
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

const ScoreGauge = ({ title, score }) => {
	const percent = Math.round((score / 10) * 100);
	const chartData = [{ value: percent }];

	return (
		<div className="card score-card performance-gauge">
			<div className="gauge-header">
				<div className="section-title center">{title}</div>
			</div>
			<div className="gauge-content">
				<div className="gauge-wrap small">
					<ResponsiveContainer width="100%" height="100%">
						<RadialBarChart 
							data={chartData} 
							cx="50%" 
							cy="55%" 
							innerRadius="70%" 
							outerRadius="92%" 
							startAngle={210} 
							endAngle={-30}
						>
							<PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
							<RadialBar 
								dataKey="value" 
								fill="#f59e0b" 
								background={{ fill: '#f2f4f8' }} 
								cornerRadius={12} 
								clockWise 
								barSize={14} 
							/>
						</RadialBarChart>
					</ResponsiveContainer>
					<div className="gauge-center">
						<div className="score-value">
							{score}
							<span className="score-denom">/10</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ScoreGauge;