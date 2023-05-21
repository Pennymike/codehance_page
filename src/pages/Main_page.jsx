import React from "react";
import "./Main_page.scss";

import Container from "../components/container/Container";
import Course_vis from "../components/course_visual/Course_vis";
import About from "../components/about/About";
import Content from "../components/content/Content";

export default function Main_page() {
  return (
    <>
      <Container>
        <Course_vis />
        <div>
          <About />
          <Content />
        </div>
      </Container>
    </>
  );
}
