import React from "react";
import "./Course_vis.scss";

export default function Course_vis() {
  return (
    <>
      <div className="visual">
        <div className="visual__video">
          <img src="./images/video 1.svg" />
        </div>
        <div className="visual__bottom">
          <div className="visual__bottom--rate">
            <p>Rate this course</p>
            <img src="./emoticons/sad.png" />
            <img src="./emoticons/unhappy.png" />
            <img src="./emoticons/happy.png" />
          </div>
          <div className="visual__bottom--right">
            <button>Download File ⤓ </button>
            <button> Complete & Continue →</button>
          </div>
        </div>

        <div className="visual__notes">
          <p>Lesson Note</p>
          <textarea placeholder="Type here"></textarea>
          <div className="visual__notes--commands">
            <button>Reset</button>
            <button>Save</button>
          </div>
        </div>
      </div>
    </>
  );
}
