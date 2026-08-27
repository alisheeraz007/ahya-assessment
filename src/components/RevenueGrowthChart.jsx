import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const revenueData = [
  {
    day: "MON",
    current: 35,
    previous: 48,
  },
  {
    day: "TUE",
    current: 55,
    previous: 68,
  },
  {
    day: "WED",
    current: 82,
    previous: 90,
  },
  {
    day: "THU",
    current: 58,
    previous: 72,
  },
  {
    day: "FRI",
    current: 95,
    previous: 86,
  },
  {
    day: "SAT",
    current: 68,
    previous: 76,
  },
  {
    day: "SUN",
    current: 36,
    previous: 50,
  },
];

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className="revenue-tooltip">
      <p>{payload[0]?.payload?.day}</p>

      {payload.map((item) => (
        <div key={item.dataKey} className="tooltip-row">
          <span
            className={`tooltip-dot ${
              item.dataKey === "current"
                ? "current-dot"
                : "previous-dot"
            }`}
          />

          <span>
            {item.dataKey === "current" ? "Current" : "Previous"}:{" "}
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
};

const RevenueGrowthChart = () => {
  return (
    <div className="revenue-card">
      {/* Header */}
      <div className="revenue-header">
        <h2>Revenue Growth</h2>

        <div className="revenue-legend">
          <div className="legend-item">
            <span className="legend-dot current" />
            <span>Current</span>
          </div>

          <div className="legend-item">
            <span className="legend-dot previous" />
            <span>Previous</span>
          </div>
        </div>
      </div>

      <div className="revenue-chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={revenueData}
            margin={{
              top: 20,
              right: 5,
              left: 5,
              bottom: 5,
            }}
          >
            <YAxis hide />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 11,
                fontWeight: 600,
                fill: "#9aa4b2",
              }}
              dy={12}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={false}
            />

            <Area
              type="stepAfter"
              dataKey="previous"
              stroke="none"
              fill="#edf0f5"
              fillOpacity={1}
              isAnimationActive={false}
            />

            <Area
              type="stepAfter"
              dataKey="current"
              stroke="#403b8f"
              strokeWidth={0}
              fill="#403b8f"
              fillOpacity={1}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueGrowthChart;