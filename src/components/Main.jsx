import { Todoitem } from "./Todoitem";

export const Main = (props) => {
  console.log(props.todos);
  return (
    <div className="container align-items-center">
      {props.todos.map((todo) => (
        <Todoitem keyProps={todo} />
      ))}
    </div>
  );
};
