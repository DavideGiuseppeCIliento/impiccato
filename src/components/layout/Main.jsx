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
  const [idCharClicked, setIdCharClicked] = useState("");
  const [secretWord, setSecretWord] = useState("");

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

  console.log(idCharClicked);

  //   ##CHIAMATA API - USE EFFECT
  useEffect(apiRequest, []);

  return (
    <>
      <Title />
      <WordRight idCharClicked={idCharClicked} secretWord={secretWord} />
      <AlphabetGrid alphabet={alphabet} setIdCharClicked={setIdCharClicked} />
    </>
  );
}
