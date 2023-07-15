import React from "react";

export const Notes = ({ note, toggleImportance }) => {
  const label = note.important ? "make not important" : "make important";

  return (
    <div>
      <li className="notes">{note.content}</li>
      <button onClick={toggleImportance}>{label}</button>
    </div>
  );
};
