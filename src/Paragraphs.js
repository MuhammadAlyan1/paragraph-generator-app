import { data } from "./data.js";

// css
import "./Paragraph.css";

export function Paragraphs({ length }) {
  if (length < 0) return;

  const paragraphs = data.slice(0, length);
  return (
    <>
      {paragraphs.map((element) => {
        const { id, paragraph } = element;

        return (
          <p key={id} className="paragraph">
            {paragraph}
          </p>
        );
      })}
    </>
  );
}
