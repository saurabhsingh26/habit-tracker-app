import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    
    <div className="Navbar mb-3">
        <nav className="navbar navbar-light justify-content-between" style={{backgroundColor: "#e3f2fd"}} >
            <Link to="/" className="navbar-brand m-2">Habit Tracker App</Link>
            <form className="form-inline">
                <Link to="/add-habit" className="btn btn-outline-success my-2 my-sm-0 m-2" type="submit">Add Habits</Link>
            </form>
        </nav>
        
    </div>
  );
};

export default Navbar;
