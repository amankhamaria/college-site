import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">MyApp</h1>

        <div className="space-x-6">
          <Link 
            to="/" 
            className="text-white hover:text-yellow-300"
          >
            Home
          </Link>

          <Link 
            to="/about" 
            className="text-white hover:text-yellow-300"
          >
            About
          </Link>

         

          <Link 
            to="/login" 
            className="bg-yellow-400 text-black px-4 py-1 rounded-full hover:bg-white"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
