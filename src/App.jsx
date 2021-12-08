import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = (props) => {
  const [inputValue, setImputValue] = useState("");

  const handleInput = (event) => {
    setImputValue(event.target.value);
  };

  const [todos, setTodos] = useState([]);
  const onDelete = () => {
    setTodos();
  };

  const anAdd = () => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        text: "ololo",
        isCompleted: true,
        date: new Date().toLocaleDateString(),
      },
    ]);
  };

  return (
    <div className="container border-elements">
      <Header onClick={handleInput} value={inputValue} anAdd={anAdd} />
      <Main
        todos={todos}
        checked={onDelete}
        // value={props.keyProps.id}
      />
    </div>
  );
};

export default App;
