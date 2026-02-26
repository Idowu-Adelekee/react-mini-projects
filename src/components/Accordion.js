import { useState } from "react";

export default function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((item, i) => (
        <Item
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={item.title}
          text={item.text}
          num={i}
          key={item.title}
        />
      ))}
    </div>
  );
}

function Item({ curOpen, onOpen, title, text, num }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(num);
  }

  return (
    <div className={isOpen ? `item open` : `item`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen ? (
        <div className="content-box">
          <p className="text">{text}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
