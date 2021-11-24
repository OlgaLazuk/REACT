import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { useState } from "react";

const App = () => {
  const [inputValue, setImputValue] = useState("");

  const handleInput = (event) => {
    setImputValue(event.target.value);
  };

  const todos = [
    { id: 1, text: "Todo text", isActive: false },
    { id: 2, text: "Todo text", isActive: false },
  ];
  return (
    <div className="container">
      <Header onClick={handleInput} value={inputValue} />
      <Main todos={todos} />
    </div>
  );
};

export default App;
