import { ImGithub } from "react-icons/im";

const Navbar = () => {
  return (
    <nav className="bg-slate-700 text-white ">
      <div className="mx-auto max-w-5xl flex justify-between items-center py-5 h-14">
        <div className="font-bold text-white text-2xl">
          <span className="text-green-500"> &lt;</span>Pass
          <span className="text-green-500">OP/&gt;</span>
        </div>
        <ul>
          <li className="flex gap-4">
            <a className="hover:font-bold" href="/">
              Home
            </a>
            <a className="hover:font-bold" href="/">
              About
            </a>
            <a className="hover:font-bold" href="/">
              Contact
            </a>
          </li>
        </ul>
        <button className="text-white items-center font-medium px-4 py-2 flex bg-green-500 rounded-md gap-4" >
          <span>
            <ImGithub size={23} />
          </span>
          <span>Github</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
