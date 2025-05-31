export default function WordRight({ idCharClicked, secretWord }) {
  const secretWordArray = [
    {
      id: 1,
      char: "r",
      revealed: false,
      display: "_",
    },
  ];

  for (let i = 0; i < secretWord.length; i++) {
    secretWordArray[i] = {
      id: i,
      char: secretWord[i],
      revealed: false,
      display: "_",
    };
  }

  console.log(secretWordArray);
  return (
    <div className="container">
      <div className="row d-flex display-justify-around text-white">
        {secretWordArray.map((char) => {
          return (
            <div className="col" key={char.id}>
              {char.display}
            </div>
          );
        })}
      </div>
    </div>
  );
}
