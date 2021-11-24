export const Todoitem = (props) => {
  return (
    <div className="alert alert-warning">
      <div className="d-flex align-items-center gap-5 ">
        <input
          type="checkbox"
          className="btn form-check-input"
          value={props.keyProps.isActive}
        />
        <p>{props.keyProps.text}</p>
        <button className="btn btn-close" value={props.keyProps.id} />
      </div>
    </div>
  );
};
