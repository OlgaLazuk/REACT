import { Todoitem } from "./Todoitem";

export const Main = (props) => {
  const items = [1, 2, 3];
  return (
    <div className="container">
      {items.map((item) => (
        <Todoitem />
      ))}
    </div>
  );
};
