/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [current2, setCurrent2] = useState(1);
  const [current3, setCurrent3] = useState(2);
  const [counter, setCounter] = useState(0);
  const images = [
    "/celulas/1.png",
    "/celulas/2.png",
    "/celulas/3.png",
    "/celulas/4.png",
    "/celulas/5.png",
    "/celulas/6.png",
    "/celulas/7.png",
    "/celulas/8.png",
    "/celulas/9.png",
    "/celulas/10.png",
    "/celulas/11.png",
    "/celulas/12.png",
    "/celulas/13.png",
    "/celulas/14.png",
    "/celulas/15.png",
    "/celulas/16.png",
    "/celulas/17.png",
  ];

  const changeCurrent = (type) => {
    if (type === "add") {
      if (current === images.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
      if (current2 === images.length - 1) {
        setCurrent2(1);
      } else {
        setCurrent2(current2 + 1);
      }
      if (current3 === images.length - 1) {
        setCurrent3(2);
      } else {
        setCurrent3(current3 + 1);
      }
    }
  };

  useEffect(() => {
    if (counter === images.length) {
      changeCurrent("add");
      setCounter(0);
    } else if (counter !== -1) {
      var timer = setTimeout(() => setCounter(counter + 1), 500);
    }
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="flex flex-col pt-32 sm:pt-0 justify-items-center items-center">
              <img
                alt="..."
                src="/img/logo-iafcj-01.png"
                className="w-full align-middle rounded-lg max-w-sm left-260-px -top-160-px"
              />
              <h2 className="text-center mt-4 font-bold text-4xl text-blueGray-600">
                IGLESIA APOSTOLICA DE LA FE EN CRISTO JESUS
              </h2>
              <p className="text-center mt-4 text-lg leading-relaxed text-blueGray-500">
                Notus NextJS is Free and Open Source. It does not change any of
                the CSS from . It features multiple HTML elements and it comes
                with dynamic components for ReactJS, Vue and Angular.
              </p>
            </div>
          </div>
          <div className="lg:w-5/12 md:w-5/12 sm:hidden xl:w-5/12 block px-4 mr-auto ml-auto mt-32">
            <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
              <img
                alt="..."
                src="/img/ministers2.jpg"
                className="w-full align-middle rounded-lg absolute shadow-lg max-w-580-px left-260-px -top-160-px z-3"
              />
              <img
                alt="..."
                src="/img/ministers.jpg"
                className="w-full align-middle rounded-lg absolute shadow-lg max-w-580-px left-95-px -top-360-px z-2"
              />
              <img
                alt="..."
                src="/img/ministers4.jpg"
                className="w-full align-middle rounded-lg absolute shadow-2xl max-w-580-px -left-50-px top-95-px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1599964815811-30b9aea11d17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">Mateo 28:19</h4>
                  <p className="text-md font-light mt-2 text-white">
                    Por tanto, id, y haced discípulos a todas las naciones,
                    bautizándolos en el nombre del Padre, y del Hijo, y del
                    Espíritu Santo
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="far fa-calendar-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Hechos 13:47
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Porque así nos ha mandado el Señor, diciendo: Te he
                        puesto para luz de los gentiles, A fin de que seas para
                        salvación hasta lo último de la tierra.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Marcos 16:15
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Y les dijo: Id por todo el mundo y predicad el evangelio
                        a toda criatura.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Romanos 1:16
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Porque no me avergüenzo del evangelio, porque es poder
                        de Dios para salvación a todo aquel que cree; al judío
                        primeramente, y también al griego.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Mateo 5:14</h6>
                      <p className="mb-4 text-blueGray-500">
                        Vosotros sois la luz del mundo; una ciudad asentada
                        sobre un monte no se puede esconder.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="far fa-calendar-alt"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Objetivo
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Every element that you need in a product comes built in as a
                component. All components fit perfectly with each other and can
                have different colours.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                  Amor
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                  Gozo
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                  Paz
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                  Paciencia
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                  Benignidad
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                  Bondad
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                  Fe
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                  Mansedumbre
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                  Templanza
                </span>
              </div>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2069&q=80"
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3"
                />
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1520642413789-2bd6770d59e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
                />
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1617642171292-afad99eee7ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2128&q=90&w=100"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2"
                />
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1561448817-bb90ab1327b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                />
              </div>
            </div>
          </div>

          <div id="country" className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <Link
                    href={{
                      pathname: "/landing",
                      query: { keyword: "/img/colombia1.jpg" },
                    }}
                  >
                    <div className="shadow-lg rounded-lg text-center p-8 bg-colombia bg-full bg-center bg-no-repeat cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                      <p className="text-lg text-white mt-4 font-bold h-16"></p>
                    </div>
                  </Link>
                  <Link
                    href={{
                      pathname: "/landing",
                      query: { keyword: "/img/venezuela.jpg" },
                    }}
                  >
                    <div className="shadow-lg rounded-lg text-center p-8 mt-8 bg-venezuela bg-full bg-center bg-no-repeat cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                      <p className="text-lg text-white mt-4 font-bold h-16">
                        <br></br>
                        <br></br>
                      </p>
                    </div>
                  </Link>
                  <Link
                    href={{
                      pathname: "/landing",
                      query: { keyword: "/img/ecuador.png" },
                    }}
                  >
                    <div className="shadow-lg rounded-lg text-center p-8 mt-8 bg-ecuador bg-full bg-center bg-no-repeat cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                      <p className="text-lg text-white mt-4 font-bold h-16">
                        <br></br>
                        <br></br>
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <Link
                    href={{
                      pathname: "/landing",
                      query: { keyword: "/img/peru.jpg" },
                    }}
                  >
                    <div className="shadow-lg rounded-lg text-center p-8 bg-peru bg-full bg-center bg-no-repeat cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                      <p className="text-xs text-white mt-4 font-bold h-16">
                        <br></br>
                        <br></br>
                      </p>
                    </div>
                  </Link>
                  <Link
                    href={{
                      pathname: "/landing",
                      query: { keyword: "/img/bolivia.jpg" },
                    }}
                  >
                    <div className="shadow-lg rounded-lg text-center p-8 mt-8 bg-bolivia bg-full bg-center bg-no-repeat cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                      <p className="text-lg text-white mt-4 font-bold h-16">
                        <br></br>
                        <br></br>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Cono Norte
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                In order to create a great User Experience some components
                require JavaScript. In this way you can manipulate the elements
                on the page and give more options to your users.
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                We created a set of Components that are dynamic and come to help
                you.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                  Alerts
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                  Dropdowns
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                  Menus
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                  Modals
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                  Navbars
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                  Popovers
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                  Tabs
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2">
                  Tooltips
                </span>
              </div>
              View all{" "}
              <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Complex Documentation
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  This extension comes a lot of fully coded examples that help
                  you get started faster. You can adjust the colors and also the
                  programming language. You can change the text and images and
                  you're good to go.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Built by Developers for Developers
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Carefully crafted code for Components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Dynamic Javascript Components
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="https://images.unsplash.com/photo-1437603568260-1950d3ca6eab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
              />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">PROCESO GANAR</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              El objetivo de alcanzar más amigos es la multiplicación celular.
            </p>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  {/* <h5 className="text-xl font-semibold pb-4 text-center">
                    Login Page
                  </h5> */}
                  {/* <Link href="/auth/login"> */}
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={images[current]}
                    />
                  </div>
                  {/* </Link> */}
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  {/* <h5 className="text-xl font-semibold pb-4 text-center">
                    Profile Page
                  </h5> */}
                  {/* <Link href="/profile"> */}
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={images[current2]}
                    />
                  </div>
                  {/* </Link> */}
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  {/* <h5 className="text-xl font-semibold pb-4 text-center">
                    Landing Page
                  </h5> */}
                  {/* <Link href="/landing"> */}
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={images[current3]}
                    />
                  </div>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-eye text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                VISIÓN
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                Ser una Iglesia pentecostal, sana y con propósito de Excelencia
                Misionológica, Personal, Administrativa y de Espacios de
                Reunión, para glorificar a nuestro gran Dios y Salvador,
                Jesucristo.
              </p>
            </div>
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-bullseye text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                MISIÓN
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                Conducir personas a Jesucristo para bautizarlas en su nombre,
                que reciban el Espíritu Santo y se conviertan en miembros de su
                familia, procurando su desarrollo a fin de que alcancen la
                madurez que los haga parecerse a Cristo y luego sean equipados
                para su ministerio en la iglesia y para la misión de su vida en
                el mundo, de tal manera que glorifiquen el nombre de nuestro
                Señor Jesucristo con Excelencia.
              </p>
            </div>
            <div className="w-auto md:w-4/12 px-4 mr-auto ml-auto mt-32">
              <img
                alt="..."
                className="w-3/4 h-auto bg-center bg-cover"
                src="/img/logo2019.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  🙏
                </span>
              </p>
              <h3 className="font-semibold text-3xl">Paz de Cristo Amigo</h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Si tienes alguna pregunta o comentario, te invitamos a
                selecionar tu pais para ponerte en contacto con el respectivo
                lider nacional.
                <br></br>
                Dios te bendiga, IAFCJ Cono Norte
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="#country"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Selecionar Pais
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
