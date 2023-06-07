import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Companies = ({ data, ind }) => {
  return (
    <div className="container">
      <h3>{data[ind].title}</h3>
      <div className="job-company">{data[ind].company}</div>
      <div className="job-date">{data[ind].dates}</div>
      {data[ind].duties.map((duty, index) => {
        return (
          <div className="job-desc" key={index}>
            <MdKeyboardDoubleArrowRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Companies;
