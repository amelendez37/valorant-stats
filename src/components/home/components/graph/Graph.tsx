import React, { useLayoutEffect, useRef, SetStateAction } from "react";
import "./graph.css";

const months = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  // "Jan",
  // "Feb",
  // "Mar",
  // "Apr",
  // "May",
  // "Jun",
  // "Jul",
  // "Aug",
  // "Sep",
  // "Oct",
  // "Nov",
  // "Dec",
];

export default function Graph({
  setPointsEls,
  pointCoords,
  pointsEls,
}: {
  setPointsEls: SetStateAction<any>;
  pointCoords: number[][];
  pointsEls: NodeListOf<Element> | [];
}) {
  const pointsRef = useRef("");

  useLayoutEffect(() => {
    const nextCoords = pointCoords.toString();
    if (pointsRef.current !== nextCoords) {
      setPointsEls(document.querySelectorAll(".point"));
      pointsRef.current = nextCoords;
    }
  });

  return (
    <div className="graph">
      <div className="graph--y">{drawYAxis()}</div>
      <div className="graph--plot-area-container">
        <>{drawPlotLines()}</>
        <div id="graph-plot-area" className="graph--plot-area">
          {drawPlotPoints(pointCoords)}
          {drawPointConnections(pointsEls, pointCoords)}
        </div>
      </div>
      <div className="graph--x">{drawXAxis(months)}</div>
    </div>
  );
}

// generates y axis of graph for percentages
function drawYAxis() {
  const rows = [];
  for (let i = 100; i >= 0; i -= 10) {
    const element = <AxisItem key={`y-${i}`} value={`${i}%`} />;
    rows.push(element);
  }
  return rows;
}

function drawXAxis(xValues: string[]) {
  const cols = [];
  for (const val of xValues) {
    cols.push(<AxisItem key={`x-${val}`} value={val} classes={"shift-left"} />);
  }
  return cols;
}

function drawPlotLines() {
  const rows = [];
  for (let i = 100; i >= 0; i -= 10) {
    const element = (
      <span key={`plot-line-${i}`} className="graph--plot-line"></span>
    );
    rows.push(element);
  }
  return rows;
}

function AxisItem({ value, classes }: { value: string; classes?: string }) {
  return <span className={`axis-item ${classes}`}>{value}</span>;
}

function drawPlotPoints(pointCoords: number[][]) {
  const elements = [];
  for (const point of pointCoords) {
    const [x, y] = point;
    const element = <Point key={`point-${x}${y}`} x={x} y={y} />;
    elements.push(element);
  }

  return elements;
}

/*
  x: position from bottom left of graph as a percentage of the total width
  y: position from top left of graph as a percentage of the total height
*/
function Point({ x, y }: { x: number; y: number }) {
  return (
    <span
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%)`,
      }}
      className="point"
    ></span>
  );
}

function drawPointConnections(points: any, pointCoords: number[][]) {
  const connections = [];
  for (let i = 0; i < points.length - 1; i++) {
    const left = points[i].getBoundingClientRect();
    const right = points[i + 1].getBoundingClientRect();
    const height = Math.abs(left.bottom - right.bottom);
    const width = Math.abs(left.left - right.left);
    const w = width ** 2;
    const h = height ** 2;
    const connectionLength = Math.sqrt(w + h);
    const [x, y] = pointCoords[i];
    const [nextx, nexty] = pointCoords[i + 1];
    const rotation = Math.atan(height / width);
    connections.push(
      <PointConnection
        key={`${left}-${right}-${i}`}
        length={connectionLength}
        top={y}
        left={x}
        rotation={nexty - y > 0 ? rotation : -rotation}
      />
    );
  }
  return connections;
}

function PointConnection({
  length,
  top,
  left,
  rotation,
}: {
  length: number;
  top: number;
  left: number;
  rotation: number;
}) {
  return (
    <span
      style={{
        top: `${top}%`,
        left: `${left}%`,
        width: `${length}px`,
        transformOrigin: `0% 0%`,
        transform: `rotate(${rotation}rad)`,
      }}
      className="graph--point-connection"
    ></span>
  );
}
