// --- IMPORT STATE
import { useState } from "react";

export default function LetterBox({
  id,
  char,
  setCharClicked,
  clicked,
  handleLetterClick,
}) {
  return (
    <div className="col">
      <button
        className={`btn ${
          clicked ? "btn-secondary" : "btn-outline-primary"
        } text-white p-3`}
        onClick={() => handleLetterClick(id, char)} // ✅ ora passa entrambi
        disabled={clicked}
      >
        {char}
      </button>
    </div>
  );
}
