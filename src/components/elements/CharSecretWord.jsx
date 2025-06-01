export default function CharSecretWord({ clickedChars, char }) {
  return (
    <div className="col">
      {clickedChars.includes(char.char) ? char.char : "_"}
    </div>
  );
}
