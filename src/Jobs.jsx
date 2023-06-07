import React, { useState } from "react";

const Jobs = ({ data, activeId, setActiveId }) => {
  const clickHandler = (id) => {
    setActiveId(id);
  };
  return (
    <div className="btn-container">
      {data.map((item) => {
        return (
          <button
            className={activeId === item.id ? "job-btn active-btn" : "job-btn"}
            key={item.id}
            onClick={() => clickHandler(item.id)}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};

export default Jobs;
