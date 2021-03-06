import React, { useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
// components

/* import IndexDropdown from "components/Dropdowns/IndexDropdown.js"; */
/* import PagesDropdown from "components/Dropdowns/PagesDropdown.js"; */

export default function Navbar({ user }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  /*  useEffect(() => {
    if (user === null) {
      Router.push({
        pathname: "/",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  */

  const goToDash = () => {
    Router.push({
      pathname: "/auth/dashboard",
    });
  };

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <span className="w-12 h-12 text-sm hidden lg:inline-block items-center justify-center rounded-full">
                <img
                  alt="..."
                  src="/img/logo-iafcj-01.png"
                  className="w-full rounded-full align-middle border-none"
                />
              </span>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            {/* <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link href="/home/news">
                  <div
                    className="bg-blueGray-700 text-white active:bg-blueGray-900 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    type="button"
                  >
                    Noticias
                  </div>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/home/events">
                  <button
                    className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    type="button"
                  >
                    Eventos
                  </button>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/home/history">
                  <button
                    className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    type="button"
                  >
                    Historia
                  </button>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/home/convention">
                  <button
                    className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    type="button"
                  >
                    Convenci??n
                  </button>
                </Link>
              </li>
            </ul> */}
            {/* <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                {user ? (
                  <div
                    className="items-center flex cursor-pointer"
                    onClick={() => goToDash  }
                  >
                    <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
                      <img
                        alt="..."
                        src={
                          user && user.photoURL
                            ? user.photoURL
                            : "/img/userprofile.png"
                        }
                        className="w-full rounded-full align-middle border-none shadow-lg"
                      />
                    </span>
                  </div>
                ) : (
                  <Link href="/auth/login">
                    <a
                      href="#login"
                      className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    >
                      Inicio de sesi??n
                    </a>
                  </Link>
                )}
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    </>
  );
}
