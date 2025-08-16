import React from 'react';
import ProfileCard from '../../components/Cards/ProfileCard';
import StatCard from '../../components/Cards/StatCard';
import UpcomingLessons from '../../components/Tables/UpcomingLessons';
import ReferCard from '../../components/Cards/ReferCard';
import ScoreGauge from '../../components/Charts/ScoreGauge';
import FeedbackGauge from '../../components/Charts/FeedbackGauge';
import { tutor, kpis, lessons, performance } from '../../data/dashboard';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="main-col">
        <div className="top-grid">
          <div className="card profile-card-wrap">
            <ProfileCard tutor={tutor} />
          </div>
          <div className="top-grid-item">
          {kpis.map(item => (
            <StatCard key={item.id} title={item.title} value={item.value} suffix={item.suffix} />
          ))}
         </div>

         <div className="top-grid-item">
          {kpis.map(item => (
            <StatCard key={item.id} title={item.title} value={item.value} suffix={item.suffix} />
          ))}
         </div>
        </div>
        
        <div className="bottom-grid">
         <div>
           <UpcomingLessons lessons={lessons} />
         </div>
         <div>
            <div className="card performance-gauges-card">
              <ScoreGauge title="Overall Course Performance" score={performance.courseScore} />
              <ScoreGauge title="Overall Student Performance" score={performance.studentScore} />
            </div>

         </div>
        </div>
      </div>
      
      {/* Right column with refer card and feedback card */}
      <div className="right-column">
        <div className="card1">
          <ReferCard />
        </div>
        <div className="card">
          <FeedbackGauge label="Feedback Pending" value={12} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 