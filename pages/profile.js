import React, { useEffect, useState } from "react";
import Router from "next/router";

/* import Navbar from "components/Navbars/AuthNavbar.js"; */
/* import Footer from "components/Footers/Footer.js"; */
import Sidebar from "components/Sidebar/Sidebar.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

import { getAuth } from "firebase/auth";
import { getDataUser } from "firebase/client";

export default function Profile() {
  const auth = getAuth();
  const user = auth.currentUser;
  const [dataUser, setDataUser] = useState(null);

  useEffect(() => {
    if (user) {
      getDataUser({ email: user.email })
        .then((res) => {
          setDataUser(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);

  useEffect(() => {
    if (user === null) {
      Router.push({
        pathname: "/auth/login",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(dataUser);
  }, [dataUser]);

  return (
    <>
      {/* <Navbar transparent /> */}
      <Sidebar />
      <main className="profile-page">
        <div className="relative md:ml-64 bg-blueGray-100">
          <AdminNavbar />
          <section className="relative block h-500-px">
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1561448817-f17eed390089?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2710&q=80')",
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
              ></span>
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
              style={{ transform: "translateZ(0)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </section>
          <section className="relative py-16 bg-blueGray-200">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <img
                          alt="..."
                          src={
                            user && user.photoURL
                              ? user.photoURL
                              : "/img/userprofile.png"
                          }
                          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      {/* <div className="py-6 px-3 mt-32 sm:mt-0">
                        <button
                          className="bg-blueGray-700 active:bg-blueGray-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Connect
                        </button>
                      </div> */}
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            {dataUser ? dataUser.age : "0"}
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Años
                          </span>
                        </div>
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            {dataUser ? dataUser.children : "0"}
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Bautismos
                          </span>
                        </div>
                        <div className="lg:mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            {dataUser ? dataUser.years : "0"}
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Años en la iglesia
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                      {dataUser ? dataUser.name : ""}
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                      <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                      {dataUser ? dataUser.city : ""},{" "}
                      {dataUser ? dataUser.country : ""}
                    </div>
                    <div className="mb-2 text-blueGray-600 mt-10">
                      <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                      {dataUser ? dataUser.title : ""} -{" "}
                      {dataUser && !dataUser.minister
                        ? `Celula: ${dataUser.cell}`
                        : ""}
                    </div>
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                      IAFCJ - {dataUser ? dataUser.city : ""}
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                          {dataUser ? dataUser.about : ""}
                        </p>
                        {/* <a
                          href="#pablo"
                          className="font-normal text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Show more
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <FooterAdmin />
        </div>
      </main>
    </>
  );
}
