import "./Heading.css";

export default function Heading({ count }) {
  return (
    <div className="heading">
      <h1>Todo App</h1>
      <h5>Todos remaining - {count} </h5>
    </div>
  );
}

