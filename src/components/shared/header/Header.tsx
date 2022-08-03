import React, { useState, SetStateAction } from "react";
import "./header.css";
import { getMatchesFor } from "../../../api/getStats";

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
  setPointCoords, // todo: remove this
}: {
  setPointCoords: SetStateAction<any>;
}) {
  const [showMapSelect, setShowMapSelect] = useState(false);
  return (
    <div className="header">
      <p className="header--title">Valorant Stats</p>
      <MapSelectButton
        text="Maps"
        show={showMapSelect}
        toggleShow={() => setShowMapSelect(!showMapSelect)}
      />
      {/* <a onClick={() => setPointCoords(set2)}>test</a> */}
    </div>
  );
}

function MapSelectButton({
  text,
  show,
  toggleShow,
}: {
  text: string;
  show: boolean;
  toggleShow: () => void;
}) {
  function renderDropdownItems(items: string[]) {
    return items.map((item) => (
      <li
        key={item}
        onClick={() => getMatchesFor("Merrendo")}
        className="header--dropdown-item"
      >
        {item}
      </li>
    ));
  }

  function renderDropdown() {
    if (!show) return null;
    return (
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
    );
  }

  return (
    <div onClick={toggleShow} className="header--dropdown-container">
      <div className="header--btn-container">
        <a className="header--btn">{text}</a>
        <span className="header--btn-caret">&#9660;</span>
      </div>
      {renderDropdown()}
    </div>
  );
}
