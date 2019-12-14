import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const H1 = styled.h1`
  color: ${props => (props.primary ? "goldenrod" : "tomato")};
`;
function App() {
  return (
    <div className="App">
      <H1 primary>Hello CodeSandbox</H1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
