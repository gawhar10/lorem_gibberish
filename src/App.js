import { useState } from "react";
import createLorem from "./lorem.js";

const App = () => {
  const [wordCount, setWordCount] = useState(0);
  const [lorem, setLorem] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setLorem(createLorem(wordCount));
  };
  return (
    <section>
      <h1>Lorem Gibberish generater</h1>
      <form>
        <div>
          <label htmlFor="wordCount">How many words</label>
          <input
            type="number"
            id="wordCount"
            value={wordCount}
            onChange={(event) => setWordCount(event.target.value)}
            maxLength={3}
            step={10}
          ></input>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            Get
          </button>
        </div>
      </form>
      <article>
        <ul>
          {lorem.map((para, index) => {
            return <li key={index}>{para}</li>;
          })}
        </ul>
      </article>
    </section>
  );
};

export default App;
