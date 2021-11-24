export const Todoitem = (props) => {
  return (
    <div className="border-elements d-flex gap-3  my-3 alert">
      <div className="col-10 d-flex align-items-center gap-5 alert ">
        <input
          type="checkbox"
          className="form-check-input "
          value={props.keyProps.isActive}
        />
        <div className="col container-todo-text text-center">
          <p>{props.keyProps.text}</p>
        </div>
      </div>
      <div>
        <button className="btn btn-close " value={props.keyProps.id} />
        <input
          type=""
          className="col-12 my-5 input-date text-center"
          placeholder="Date"
        />
      </div>
    </div>
  );
};
