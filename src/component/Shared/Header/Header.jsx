const Header = ({ children }) => {
  return (
    <div className="drawer drawer-end lg:px-12 px-6">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-primary text-secondary">
          <div
            className="flex-1 px-2 mx-2 text-3xl font-bold"
            style={{ fontFamily: '"Cardo", serif' }}
          >
            Exhibit!
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal text-xl font-semibold font-sans">
              {/* Navbar menu content here */}
              <li>
                <a>Sign In</a>
              </li>
              <li>
                <a>Register</a>
              </li>
            </ul>
          </div>

          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-primary gap-y-6 text-xl font-sans">
          {/* Sidebar content here */}
          <li>
            <a>Sign In</a>
          </li>
          <li>
            <a>Register</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
