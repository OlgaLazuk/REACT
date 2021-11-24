export const Header = (props) => {
  const handleClick = () => {};

  return (
    <header className="d-flex gap-3 my-3">
      <button className="btn col-2 btn-primary">Delete All</button>
      <input
        type="text"
        className="border-elements form-control text-center"
        placeholder="Enter todo ... "
        onChange={(event) => props.onClick(event)}
        value={props.value}
      />
      <button className="btn col-2 btn-primary" onClick={handleClick}>
        Add
      </button>
    </header>
  );
};
