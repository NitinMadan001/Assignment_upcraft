import React from 'react';

const UpcomingLessons = ({ lessons }) => {
	return (
		<div className="card height-100">
			<div className="section-header">
				<div className="section-title">Upcoming Lessons</div>
				<button className="link-button" type="button">View All</button>
			</div>
			<div className="table-responsive">
				<table className="table">
					<thead>
						<tr>
							<th>Date</th>
							<th>Time</th>
							<th>Course</th>
							<th>Student Name</th>
						</tr>
					</thead>
					<tbody>
						{lessons.map((row, idx) => (
							<tr key={idx}>
								<td>{row.date}</td>
								<td>{row.time}</td>
								<td>{row.course}</td>
								<td>{row.student}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default UpcomingLessons; 