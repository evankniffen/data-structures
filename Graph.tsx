import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const nodes = [1, 2, 3, 4];
    const edges = [
      [1, 2],
      [1, 3],
      [2, 4],
      [3, 4],
    ];

    const graphContainer = document.getElementById("graph-container");

    if (graphContainer) {
      edges.forEach(([from, to]) => {
        const edgeElement = document.createElement("div");
        edgeElement.classList.add("edge");
        graphContainer.appendChild(edgeElement);

        const fromNode = document.querySelector(`.node[data-id="${from}"]`);
        const toNode = document.querySelector(`.node[data-id="${to}"]`);

        if (fromNode && toNode) {
          const fromPosition = fromNode.getBoundingClientRect();
          const toPosition = toNode.getBoundingClientRect();

          edgeElement.style.position = "absolute";
          edgeElement.style.border = "1px solid black";
          edgeElement.style.width = "1px";
          edgeElement.style.height = `${Math.abs(
            fromPosition.top - toPosition.top
          )}px`;

          if (fromPosition.left < toPosition.left) {
            edgeElement.style.left = `${
              fromPosition.left + fromPosition.width
            }px`;
            edgeElement.style.top = `${Math.min(
              fromPosition.top,
              toPosition.top
            )}px`;
          } else {
            edgeElement.style.left = `${toPosition.left + toPosition.width}px`;
            edgeElement.style.top = `${Math.min(
              fromPosition.top,
              toPosition.top
            )}px`;
          }
        }
      });
    }
  }, []);

  return (
    <div>
      <h1>Graph</h1>
      <div
        id="graph-container"
        style={{
          position: "relative",
          height: "400px",
          border: "1px solid black",
        }}
      >
        {Array.from({ length: 4 }, (_, index) => (
          <div className="node" key={index + 1} data-id={index + 1}>
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
