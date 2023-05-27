import React from "react";
import "./content.scss";

export default function Content() {
  return (
    <>
      <div className="content">
        <h4>Course content</h4>
        <div className="content__parts">
          <p>
            Part 1 <span> ∧ </span>
          </p>
          <p>1/3 | 30 Min Left</p>
          <div className="content__parts--line"></div>
          <div className="content__parts--title">
            <input type="checkbox" /> <span>Course title</span>
            <p>2 min</p>
          </div>
        </div>
        <div className="content__parts">
          <p>
            Part 2 <span> ∨ </span>
          </p>
          <p>1/4 | 35 Min Left</p>
        </div>
        <div className="content__parts">
          <p>
            Part 3 <span> ∨ </span>
          </p>
          <p>1/6 | 55 Min Left</p>
        </div>
        <div className="content__parts">
          <p>
            Part 4 <span> ∨ </span>
          </p>
          <p>1/2 | 3 Min Left</p>
        </div>
        <div className="content__parts">
          <p>
            Part 4 <span> ∨ </span>
          </p>
          <p>1/2 | 3 Min Left</p>
        </div>
        <div className="content__parts">
          <p>
            Part 4 <span> ∨ </span>
          </p>
          <p>1/2 | 3 Min Left</p>
        </div>
      </div>
    </>
  );
}
