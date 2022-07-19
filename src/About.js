import React, { useEffect, useState } from "react";

function About() {
  return (
    <div>
      <h1>About this Demo</h1>
      <p>
        This demo is intended to show how to avoid memory leaks in React
        Applications by properly canceling API calls in useEffect cleanup
        function
      </p>
    </div>
  );
}

export default About;