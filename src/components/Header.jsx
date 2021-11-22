export const Header = (props) => {
  // console.log(props);
  return (
    <header className="d-flex gap-3 my-5">
      <input type="text" className="form-control" placeholder=" ... " />
     
      <button className="btn btn-primary">Add</button>
    </header>
  );
};
