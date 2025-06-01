// --- IMPORT STATE / EFFECT
import { useState, useEffect } from "react";

// --- IMPORT DATA
import alphabet from "../../data/alphabet.js";

// --- IMPORT COMPONENTS
import Title from "../elements/Title.jsx";
import WordRight from "../elements/WordRight.jsx";
import AlphabetGrid from "../elements/AlphabetGrid.jsx";
import axios from "axios";

// --- URL API
const urlApi = "https://random-word-api.herokuapp.com/word";

export default function Main() {
  const [clickedChars, setClickedChars] = useState([]);
  const [secretWord, setSecretWord] = useState("");
  const [alphabetState, setAlphabetState] = useState(alphabet);

  // # FUNCTION API REQUEST
  const apiRequest = () => {
    axios
      .get(urlApi)
      .then((res) => {
        const word = res.data[0];
        setSecretWord(word);
        console.log(word);
      })
      .catch((error) => {
        console.error("Errore");
      });
  };

  // # FUNCTION CAMBIO CLICKED IN ALPHABET
  const handleLetterClick = (id, char) => {
    const updatedAlphabet = alphabetState.map((letter) =>
      letter.id === id ? { ...letter, clicked: true } : letter
    );
    setAlphabetState(updatedAlphabet);
    setClickedChars((prev) => [...prev, char]);
  };

  //   ##CHIAMATA API - USE EFFECT
  useEffect(apiRequest, []);

  return (
    <>
      <Title />
      <WordRight
        clickedChars={clickedChars}
        secretWord={secretWord}
        alphabet={alphabetState}
      />
      <AlphabetGrid
        alphabet={alphabetState}
        handleLetterClick={handleLetterClick}
      />
    </>
  );
}
