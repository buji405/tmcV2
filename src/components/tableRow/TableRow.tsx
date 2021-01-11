import React from "react";
import "./tableRow.css";

interface Props {
  handleSort: Function;
  keyName: string;
  label: string;
}

const TableRow = (props: Props) => {
  const { handleSort, keyName, label } = props;
  console.log("KEY", keyName);
  return (
    <span className="row-container">
      <b className="label">{label}</b>
      <span>
        <div onClick={() => handleSort("asc", keyName)}>&#9650;</div>
        <div onClick={() => handleSort("desc", keyName)}>&#9660;</div>
      </span>
    </span>
  );
};

export default TableRow;
