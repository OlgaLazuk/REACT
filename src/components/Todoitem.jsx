export const Todoitem = (props) => {
  return (
    <div className="d-flex align-items-center gap-5 alert alert-warning">
      <input
        type="checkbox"
        className="form-check-input"
        value={props.keyProps.isActive}
      />
      <p>{props.keyProps.text}</p>
      <button className="btn-close" value={props.keyProps.id} />
    </div>
  );
};
