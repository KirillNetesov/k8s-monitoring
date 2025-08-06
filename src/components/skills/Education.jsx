import React from "react";
import { education } from "../../data/eduacation";

const Education = () => {
  return (
    <div className="education">
      <h4 className="label">Experience</h4>
      <ul className="education-list">
        {education.map((item, index) => (
          <li className="item" key={index}>
            <span className="year">{item.year}</span>
            <p>
              {item.degree} - {item.Institution}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
