import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <section>
      <div className="navbar bg-[#f2f5f7] mx-auto">
        <div className="navbar-start justify-center ">
          <a href="/" className="btn btn-ghost text-xl">
            TaiTheDev
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <p onClick={() => handleNavigate("/")}>Home</p>
            </li>
            <li>
              <p onClick={() => handleNavigate("/product")}>Books</p>
            </li>
            <li>
              <p onClick={() => handleNavigate("/blog")}>Blog</p>
            </li>
            <li>
              <p onClick={() => handleNavigate("/contact")}>Contact</p>
            </li>
            <li>
              <p onClick={() => handleNavigate("/login")}>Sign-In</p>
            </li>
          </ul>
        </div>
        <div className="navbar-end  justify-center  ">
          <div className="flex items-center justify-between">
            <a href="*" className="flex items-center space-x-4 ">
              <span className="text-2xl ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"
                  ></path>
                </svg>
              </span>
              <span className="text-2xl ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#afa7e3"
                    d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
                  ></path>
                </svg>
              </span>
              <p className="text-[#afa7e3] text-xl">$ 0.00</p>
            </a>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-link  lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p onClick={() => handleNavigate("/")}>Home</p>
              </li>
              <li>
                <p onClick={() => handleNavigate("/product")}>Books</p>
              </li>
              <li>
                <p onClick={() => handleNavigate("/blog")}>Blog</p>
              </li>
              <li>
                <p onClick={() => handleNavigate("/contact")}>Contact</p>
              </li>
              <li>
                <p onClick={() => handleNavigate("/login")}>Sign-In</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
