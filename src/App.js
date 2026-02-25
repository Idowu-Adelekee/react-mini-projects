import { useState } from "react";
import logo from "./logo.svg";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(1);

  return (
    <div className="accordion">
      {data.map((item, i) => (
        <Item
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={item.title}
          num={i}
          text={item.text}
          key={item.title}
        />
      ))}
    </div>
  );
}

function Item({}) {
  return <div></div>;
}

//   return (
//     <div className="accordion">
//       {data.map((item, i) => (
//         <Item
//           curOpen={curOpen}
//           onOpen={setCurOpen}
//           title={item.title}
//           num={i}
//           text={item.text}
//           key={item.title}
//         />
//       ))}
//     </div>
//   );
// }

// function Item({ num, title, text, curOpen, onOpen }) {
//   const isOpen = num === curOpen;

//   function handleToggle() {
//     // setIsOpen((isOpen) => !isOpen);
//     onOpen(num);
//   }

//   return (
//     <div className={isOpen ? `item open` : "item"} onClick={handleToggle}>
//       <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
//       <p className="title">{title}</p>
//       <p className="icon">{isOpen ? "-" : "+"}</p>

//       {isOpen ? (
//         <div className="content-box">
//           <p className="text">{text}</p>
//         </div>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// }

const idowu = "idowu";
const idowu = "idowu";
const idowu = "idowu";
const idowu = "idowu";
const idowu = "idowu";
const idowu = "idowu";
