import React from "react";
import "./About.scss";

export default function About() {
  return (
    <>
      <div className="about">
        <h4>About this course</h4>
        <div className="about__signals">
          <img src="./icons/chart.png" /> <span>Easy</span>
          <div className="about__signals--sig">
            <img src="./icons/face.png" /> <span>Lessons</span>
            <img src="./icons/XP.png" /> <span>300 XP</span>
          </div>
        </div>
        <div className="about__category">
          <p>Category 1</p>
          <p>Category 2</p>
          <p>Category 3</p>
        </div>
        <div className="about__text">
          Lorem ipsum dolor sit amet. Est maiores Quis quo voluptas sint qui
          odio repellendus in voluptates eius sed dolore excepturi sit saepe
          facilis sed consequatur enim.
        </div>
        <div className="about__line1"></div>
        <div className="about__person">
          <img src="./images/person.webp" />
          <span>
            <p>Instructor name: John Doe</p>
            <p>Skills: HTML, React, JaveScript</p>
          </span>
        </div>
      </div>
    </>
  );
}
