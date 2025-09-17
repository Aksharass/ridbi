import React from "react";
import CountUp from "react-countup";
import "./stats.css";

const Stats = () => {
  const statsData = [
    { end: 98, duration: 3, suffix: "%", label: "Satisfaction Rate" },
    { end: 50, duration: 3, suffix: "+", label: "Countries Served" },
    { end: 24, duration: 3, suffix: "/7", label: "Support Available" },
    { end: 500, duration: 3, suffix: "+", label: "Happy Clients" },
  ];

  return (
    <div className="stats-container">
      {statsData.map((stat, index) => (
        <div className="stat-item" key={index}>
          <div className="stat-number">
            <CountUp end={stat.end} duration={stat.duration} suffix={stat.suffix} />
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
