import { useState } from "react";
import { Paragraphs } from "./Paragraphs";

// css
import "./App.css";

function App() {
  const [length, setLength] = useState(1);
  const [paragraphsLength, setParagraphsLength] = useState(0);

  return (
    <div className="container">
      <h1 className="main-heading">Random Paragraph Generator</h1>
      <section className="input-section">
        <label htmlFor="paragraphLength">Paragraphs</label>
        <input
          type="number"
          id="paragraphLength"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <button onClick={() => setParagraphsLength(length)}>generate</button>
      </section>

      <Paragraphs length={paragraphsLength} />
    </div>
  );
}

export default App;
