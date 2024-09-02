const Navbar = () => {
  return (
    <div className="navbar bg-[#ECF5FF] Montserrat text-black">
      <div className="container mx-auto flex items-center">
        <div className="navbar-start">
          <div className="dropdown inline">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
                <li><a>Buy</a></li>
                <li><a>Sell</a></li>
                <li><a>Services</a></li>
            </ul>
          </div>
          <ul className="menu menu-horizontal px-1 space-x-4 hidden lg:flex my-auto text-[18px]">
            <li><a>Buy</a></li>
            <li><a>Sell</a></li>
            <li><a>Services</a></li>
            </ul>
        </div>
        <div className="navbar-center">
          <a className=""><img src="/logo.png" alt="logo" className="w-[80px]" /></a>
        </div>
        <div className="ml-auto">
          <ul className="menu-horizontal px-1 space-x-4 text-[18px]">
            <li><a>Manage Rentals</a></li>
            <li><a>Sign In</a></li>
           </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
