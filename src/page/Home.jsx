import React from "react"
import RegisterTimeline from "../components/timeline"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons"
// import Navbar from "../components/navbar"

export default function Home() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <div className="flex justify-center mt-3">
        <div className="card shadow w-2/3 m-2">
          <div className="card-body">
            <h4 className="font-bold">Selamat datang di PPDB SMKN 1 Maja</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eos! Iure explicabo molestias iusto distinctio deserunt perspiciatis corporis minus necessitatibus at maiores. Labore nam deleniti totam sint quae distinctio aperiam.
            </p>

            <div className="flex relative pt-4">
              <a href="/daftar" className="btn btn-primary mx-1">Daftar</a>
              <button className="btn btn-success text-white mx-1">Download Brosur</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <div className="card shadow w-2/3 m-2">
          <div className="card-body">
            <h1 className="font-bold">Alur Pendaftaran</h1>

            <RegisterTimeline></RegisterTimeline>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-3">
        <div className="card shadow w-2/3 m-2">
          <div className="card-body">
            <div className="flex">
              <div className="justify-center flex flex-grow">
                <p className="text-center">
                  &copy; 2023 <a href="https://github.com/billalxcode" className="text-primary">Billal Fauzan</a>
                </p>
              </div>
              <div className="justify-end flex flex-row text-2xl">
                <a href="https://www.youtube.com/@KanzaTV" className="px-1"><FontAwesomeIcon icon={ faYoutube }></FontAwesomeIcon></a> 
                <a href="https://instagram.com/stemdja" className="px-1"><FontAwesomeIcon icon={ faInstagram }></FontAwesomeIcon></a>
                <a href="https://instagram.com/stemdja_production" className="px-1"><FontAwesomeIcon icon={ faInstagram }></FontAwesomeIcon></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}