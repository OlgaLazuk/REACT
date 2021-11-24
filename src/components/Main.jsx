import { Todoitem } from "./Todoitem";

export const Main = (props) => {
  console.log(props.todos);
  return (
    <div className="align-items-center my-5">
      {props.todos.map((todo) => (
        <Todoitem keyProps={todo} />
      ))}
    </div>
  );
};
