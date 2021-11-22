import { Header } from "./components/Header";
import { Main } from "./components/Main";

const App = () => {
  const todos = [
    { id: 1, text: "Number 1", isActive: false },
    { id: 2, text: "Number 2", isActive: false },
    { id: 3, text: "Number 3", isActive: false },
  ];
  return (
    <div className="container">
      <Header todos={todos.text} />
      <Main todos={todos.id} todos={todos.isActive} />
    </div>
  );
};

export default App;
