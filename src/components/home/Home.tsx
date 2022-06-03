import React, { SetStateAction } from "react";
import Graph from "./components/graph";
import "./home.css";

export default function Home({
  pointCoords,
  pointsEls,
  setPointsEls,
}: {
  pointCoords: number[][];
  pointsEls: NodeListOf<Element> | [];
  setPointsEls: SetStateAction<any>;
}) {
  return (
    <div className="home">
      <Graph
        pointCoords={pointCoords}
        pointsEls={pointsEls}
        setPointsEls={setPointsEls}
      />
    </div>
  );
}
