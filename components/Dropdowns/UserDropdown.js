import React, { useEffect } from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";
import { signOutMethod } from "firebase/client";
import Router from "next/router";

import { getAuth } from "firebase/auth";

const UserDropdown = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  useEffect(() => {
    if (user === null) {
      Router.push({
        pathname: "/auth/login",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const singOut = () => {
    signOutMethod();
    goToLogin();
  };

  const goToLogin = () => {
    Router.push({
      pathname: "/auth/login",
    });
  };

  return (
    <>
      <a
        className="text-blueGray-500 block"
        href="#iafcj"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              src={
                user && user.photoURL ? user.photoURL : "/img/userprofile.png"
              }
              className="w-full rounded-full align-middle border-none shadow-lg"
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <Link href="/profile">
          <a
            href="#iafcj"
            className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >
            Perfil
          </a>
        </Link>
        {/* <a
          href="#iafcj"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          onClick={(e) => e.preventDefault()}
        >
          Another action
        </a>
        <a
          href="#iafcj"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          onClick={(e) => e.preventDefault()}
        >
          Something else here
        </a> */}
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <div
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 cursor-pointer"
          onClick={singOut}
        >
          Cerrar Sesión
        </div>
      </div>
    </>
  );
};

export default UserDropdown;
