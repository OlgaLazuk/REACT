
import { useState } from "react";
export const Todoitem = (props, anAdd, todos, onDelete) => {
 
  const [isCompleted, setCompleted] = useState(false);

  const toggleCheckbox = () => {
    setCompleted(!isCompleted);
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
