import React from "react";
import Awords from "../../data/awards";

const Awards = () => {
  return (
    <div className="education">
      <h4 className="label">Awards</h4>
      <ul className="education-list">
        {Awards.map((item, index) => (
          <li className="item" key={index}>
            <span className="year">{item.year}</span>
            <p>
              <span>{item.degree}</span> — {item.institution}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Awards;
