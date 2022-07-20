import React, { SetStateAction } from "react";
import "./header.css";

const set2 = [
  [0, 20],
  [10, 30],
  [20, 70],
  [30, 10],
  [40, 0],
  [50, 60],
  [60, 40],
  [70, 70],
  [80, 20],
  [90, 10],
  [100, 90],
];

export default function Header({
  setPointCoords,
}: {
  setPointCoords: SetStateAction<any>;
}) {
  return (
    <div className="header">
      <p className="header--title">Valorant Stats</p>
      <MapSelectButton text="Maps" onClick={() => setPointCoords(set2)} />
      {/* <a onClick={() => setPointCoords(set2)}>test</a> */}
    </div>
  );
}

function MapSelectButton({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  function renderDropdownItems(items: string[]) {
    return items.map((item) => (
      <li className="header--dropdown-item">{item}</li>
    ));
  }

  return (
    <div className="header--btn-container">
      <a onClick={onClick} className="header--btn">
        {text}
      </a>
      <span className="header--btn-caret">&#9660;</span>
      <ol className="header--dropdown">
        {renderDropdownItems([
          "Ascent",
          "Bind",
          "Breeze",
          "Fracture",
          "Haven",
          "Icebox",
          "Pearl",
        ])}
      </ol>
    </div>
  );
}
