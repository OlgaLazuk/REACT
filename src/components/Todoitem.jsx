import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
export const Todoitem = (props) => {
  const [isCompleted, setCompleted] = useState(true);

  const toggleCheckbox = () => {
    setCompleted(!isCompleted);
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
        isCompleted: false,
        date: new Date().toLocaleDateString(),
      },
    ]);
  };

  return (
    <div className="border-elements d-flex gap-3  my-3 alert">
      <div
        className={
          isCompleted
            ? "form-check-input:checked col-10 d-flex align-items-center gap-3 alert"
            : "col-10 d-flex align-items-center gap-3 alert"
        }
      >
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={toggleCheckbox}
          className="form-check-input"
          value={props.keyProps.isActive}
        />
        <div className="col container-todo-text form-control text-center">
          <span>{props.keyProps.text}</span>
        </div>
      </div>
      <div>
        <button
          className="btn btn-close float-end"
          checked={onDelete}
          onChange={todos}
          value={props.keyProps.id}
        />
        <input className="col-12 my-5 input-date text-center" value={anAdd} />
      </div>
    </div>
  );
};
