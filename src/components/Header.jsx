export const Header = () => {
  return (
    <header className="d-flex gap-3 my-5">
      <button className="btn btn-primary">Delete All</button>
      <input
        type="text"
        className="form-control"
        placeholder="Enter todo ... "
      />
      <button className="btn btn-primary">Add</button>
    </header>
  );
};
