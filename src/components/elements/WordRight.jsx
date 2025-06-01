// --- IMPORT COMPONENTS
import CharSecretWord from "./CharSecretWord";

export default function WordRight({ clickedChars, secretWord, alphabet }) {
  const secretWordArray = [];

  //# ASSEGNO ID DI ALPHABET ALLA LETTERA E CREATOP ARRAY CON LA PAROLA GIUSTA
  for (let i = 0; i < secretWord.length; i++) {
    const letter = secretWord[i].toUpperCase();
    const match = alphabet.find(
      (el) => el.char.toLowerCase() === letter.toLowerCase()
    );

    // Creazione Array con parola segreta
    secretWordArray.push({
      id: `${letter}-${i}`,
      char: letter,
      revealed: false,
      display: "_",
    });
  }

  console.log(secretWordArray);

  // Costruzione Layoyt PAROLA SEGRETA
  return (
    <div className="container bordo-soft pl-2 pr-2">
      <div className="row d-flex display-justify-around text-white pt-4 pb-4 ">
        {secretWordArray.map((char) => {
          return (
            <div className="col text-center" key={char.id}>
              {/* {char.display} */}
              <CharSecretWord clickedChars={clickedChars} char={char} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
