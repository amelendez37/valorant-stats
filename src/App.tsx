import React, { useState } from "react";
import Home from "./components/home";
import Header from "./components/shared/header";
import "./App.css";

const set1 = [
  [0, 50],
  [10, 60],
  [20, 40],
  [30, 0],
  [40, 0],
  [50, 40],
  [60, 10],
  [70, 20],
  [80, 40],
  [90, 70],
  [100, 30],
];

function App() {
  const [pointsEls, setPointsEls] = useState<NodeListOf<Element> | []>([]);
  const [pointCoords, setPointCoords] = useState(set1);

  return (
    <div className="app">
      <Header setPointCoords={setPointCoords} />
      <Home
        pointCoords={pointCoords}
        pointsEls={pointsEls}
        setPointsEls={setPointsEls}
      />
    </div>
  );
}

export default App;
