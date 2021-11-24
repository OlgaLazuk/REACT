export const Header = (props) => {
  const handleClick = () => {};

  return (
    <header className="d-flex gap-3 my-5">
      <button className="btn col-2 btn-primary">Delete All</button>
      <input
        type="text"
        className="form-control outline-secondary text-center"
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
