import { Todoitem } from "./Todoitem";

export const Main = (props) => {
  console.log(props.todos);
  return (
    <div className="container">
      {props.todos.map((todo) => (
        <Todoitem keyProps={todo} />
      ))}
    </div>
  );
};
