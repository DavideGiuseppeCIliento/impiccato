// --- IMPORT COMPONENTS
import LetterBox from "./LetterBox";

export default function AlphabetGrid({ alphabet, handleLetterClick }) {
  return (
    <div className="container pt-5">
      <div className="row d-flex justify-content-center g-2">
        {alphabet.map((letter) => (
          <LetterBox
            key={letter.id}
            id={letter.id}
            char={letter.char}
            clicked={letter.clicked}
            handleLetterClick={handleLetterClick}
          />
        ))}
      </div>
    </div>
  );
}
