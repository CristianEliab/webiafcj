import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
/* import Link from "next/link"; */
import Router from "next/router";

// layout for page

import Auth from "layouts/Auth.js";
import { loginEmail, onChangeAuth } from "firebase/client";
import { validationFields } from "utils/helpers";

export default function Login() {
  const [email, setEmail] = useState(null);
  const [emailAlert, setEmailAlert] = useState("");
  const [password, setPassword] = useState(null);
  const [passAlert, setPassAlert] = useState("");
  const [user, setUser] = useState(null);

  const signUser = (e) => {
    e.preventDefault();
    let validEmail = validationFields({
      input: email,
      setChange: setEmailAlert,
      name: "un correo",
      type: "email",
    });
    let validPass = validationFields({
      input: password,
      setChange: setPassAlert,
      name: "una contraseña",
      type: "",
    });
    if (validEmail && validPass) {
      loginEmail({ email, password })
        .then((res) => {
          setUser(res.user);
          goToAdmin();
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Correo o contraseña inválidos`,
          });
        });
    }
  };

  const goToAdmin = () => {
    Router.push({
      pathname: "/admin/dashboard",
    });
  };

  useEffect(() => {
    if (email) {
      validationFields({
        input: email,
        setChange: setEmailAlert,
        name: "un correo",
        type: "email",
      });
    }
  }, [email]);

  useEffect(() => {
    if (password) {
      validationFields({
        input: password,
        setChange: setPassAlert,
        name: "una contraseña",
        type: "pass",
      });
    }
  }, [password]);

  useEffect(() => {
    onChangeAuth(setUser);
  }, []);

  useEffect(() => {
    if (user) {
      goToAdmin();
    }
  }, [user]);

  const goToHome = () => {
    Router.push({
      pathname: "/",
    });
  };

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-start">
          <div className="p-4">
            <div
              className="text-black bg-white text-xs font-bold uppercase p-4 shadow-sm rounded-md cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              onClick={() => {
                goToHome();
              }}
            >
              Regresar
            </div>
          </div>
        </div>
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              {/* <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign in with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img alt="..." className="w-5 mr-1" src="/img/github.svg" />
                    Github
                  </button>
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img alt="..." className="w-5 mr-1" src="/img/google.svg" />
                    Google
                  </button>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div> */}

              <div className="flex-auto px-4 lg:px-10 py-10 pt-4">
                {/* <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Or sign in with credentials</small>
                </div> */}
                <form onSubmit={signUser}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailAlert !== "" && (
                      <div
                        className="my-2 p-2 rounded-md text-center block uppercase text-white text-xs font-bold mb-2 bg-red-400"
                        htmlFor="grid-password"
                      >
                        {emailAlert}
                      </div>
                    )}
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {passAlert !== "" && (
                      <div
                        className="my-2 p-2 rounded-md text-center block uppercase text-white text-xs font-bold mb-2 bg-red-400"
                        htmlFor="grid-password"
                      >
                        {passAlert}
                      </div>
                    )}
                  </div>
                  {/* <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div> */}

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      onClick={signUser}
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link href="/auth/register"> 
                <div className="text-blueGray-200">
                  <small>Create new account</small>
                </div>
               </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

Login.layout = Auth;
