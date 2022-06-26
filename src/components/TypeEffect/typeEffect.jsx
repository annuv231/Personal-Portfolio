import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypeEffect = () => {
  const { text } = useTypewriter({
    words: [
      "Web Developer",
      "Programming Enthusiast",
      "an aspiring full stack developer",
      "Competitive programmer",
    ],
    loop: false,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div className="App">
      <h1
        style={{
          paddingTop: "2rem",
          paddingBottom: "1rem",
          margin: "auto 0",
          fontWeight: "normal",
          fontSize: "1.5rem",
        }}
      >
        I am{" "}
        <span style={{ color: "red", fontWeight: "bold", fontSize: "1.5rem" }}>
          {text}
          <Cursor />
        </span>
      </h1>
    </div>
  );
};
export default TypeEffect;
