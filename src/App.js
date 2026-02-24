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
  return <Accordion />;
}

function Accordion() {
  return (
    <div className="accordion">
      {faqs.map((item, i) => (
        <Item title={item.title} num={i} text={item.text} key={item.title} />
      ))}
    </div>
  );
}

function Item({ num, title, text }) {
  return (
    <div className="content">
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="text">{text}</p>
    </div>
  );
}
