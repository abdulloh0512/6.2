import Card from "./card";
import Button from "./button";
import Right from "../content/right";
const card = [
  {
    img: "flash.svg",
    title: "Reaction",
    order: "80",
    number: "/ 100",
    color: "red",
  },
  {
    img: "brain.svg",
    title: "Memory",
    order: "92",
    number: "/ 100",
    color: "yellow",
  },
  {
    img: "chat.svg",
    title: "Verbal",
    order: "61",
    number: "/ 100",
    color: "blue",
  },
  {
    img: "eye.svg",
    title: "RVisualeaction",
    order: "73",
    number: "/ 100",
    color: "dark-blue",
  },
];

function App() {
  return (
    <>
  <div className="container">
  <div className="content">
      <Right/>
    </div>
      <div className="content2">
        <h1 className="h1">Summary</h1>
        <div>
          {card.map((card) => (
            <Card {...card} />
          ))}
        </div>
        <Button />
      </div>
  </div>
    </>
  );
}

export default App;
