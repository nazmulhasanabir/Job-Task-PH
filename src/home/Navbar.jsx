import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-purple-400 text-white">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Task-Nation</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>
                <a>Home</a>
              </Link>
            </li>

            <li>
              <Link to={"/addTask"}>
                <a>Add Task</a>
              </Link>
            </li>

            <li>
              <a>Log-Out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
