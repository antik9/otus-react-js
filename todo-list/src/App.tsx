import * as React from "react";
import './App.css';

export interface ItemsList {
  items: Array<string>;
}

interface ItemProps {
  title: string;
  done: boolean;
}

interface InputEvent {
  target: {
    value: string;
  };
}

const ToDoItem: React.FC<ItemProps> = props =>  {
  const [done, setDone] = React.useState(props.done);

  return (
    <div onClick={ () => setDone(!done) }>
      [<span style={{ opacity: done ? "100.0" : "0.0" }}>✓</span>] { props.title }
    </div>
  );
};

const App: React.FC<ItemsList> = props => {
  const [items] = React.useState(props.items);
  const [name, setName] = React.useState("");

  const handleInput = (event: InputEvent) => setName(event.target.value);

  return (
    <div className="App">
      <h3>To-do list</h3>
      {
        items.map(
          prop => <ToDoItem title={prop} done={false} />
        )
      }
      <br/>
      <button onClick={ () => { items.push(name); setName(""); } }>+Add</button>
      <input onChange={ event => handleInput(event) } value={ name }/>
    </div>
  );
};

export default App;
