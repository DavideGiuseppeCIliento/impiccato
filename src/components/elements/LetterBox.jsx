// --- IMPORT STATE
import { useState } from "react";

export default function LetterBox({ id, char, setIdCharClicked }) {
  return (
    <div className="col">
      <div
        className="btn btn-outline-primary text-white p-3"
        onClick={() => setIdCharClicked(id)}
      >
        {char}
      </div>
    </div>
  );
}
