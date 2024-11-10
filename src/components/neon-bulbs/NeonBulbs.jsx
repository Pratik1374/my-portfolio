import React from "react";
import "./NeonBulbs.css";

const NeonBulbs = () => {
  const bulbs = [
    { id: 1, size: 80, left: 50, top: 400, cableHeight: 400 },
    { id: 2, size: 60, left: 150, top: 180, cableHeight: 180 },
    { id: 3, size: 40, left: 250, top: 250, cableHeight: 250 },
    { id: 4, size: 65, left: 350, top: 320, cableHeight: 320 },
    { id: 5, size: 75, left: 450, top: 80, cableHeight: 80 },
  ];

  return (
    <div className="bulb-container-wrapper">
      {bulbs.map((bulb) => (
        <div
          key={bulb.id}
          className="bulb-container"
          style={{ left: `${bulb.left}px` }}
        >
          <div
            className="cable"
            style={{
              height: `${bulb.cableHeight}px`,
              left: `${bulb.size / 2}px`,
            }}
          ></div>
          <div
            className="bulb"
            style={{
              width: `${bulb.size}px`,
              height: `${bulb.size}px`,
              top: `${bulb.top}px`,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default NeonBulbs;
