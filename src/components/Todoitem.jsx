export const Todoitem = (props) => {
  return (
    <div className="d-flex align-items-center gap-5 alert alert-warning">
      <input
        type="checkbox"
        className="form-check-input"
        value={props.todos.isActive}
      />
      <button className="btn-close" value={props.todos.id} />
    </div>
  );
};
