import React from "react"
import RegisterTimeline from "../components/timeline"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons"
import SEO from "../components/seo"
import Requirements from "../components/requirements"

export default function Home() {
  return (
    <>
      <SEO></SEO>

      <div className="flex justify-center mt-5">
        <div className="card shadow w-9/12 lg:w-3/4">
          <div className="card-body">
            <h4 className="font-bold">Selamat datang di PPDB SMKN 1 Maja</h4>
            <p>
              Selamat datang di Penerimaan Peserta Didik Baru Sekolah Menengah Kejuruan Negeri 1 Maja, Majalengka, Jawa Barat
            </p>

            <div className="flex relative pt-4 flex-col lg:flex-row">
              <a href="/daftar" className="btn btn-primary mx-1 btn-md w-full my-1 lg:w-max">Daftar</a>
              <a href="/cek" className="btn btn-info text-white mx-1 btn-md w-full my-1 lg:w-max">Cek Pendaftar</a>
              <a href="/download" className="btn btn-success text-white mx-1 btn-md w-full my-1 lg:w-max">Download Brosur</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div className="card shadow w-9/12 lg:w-3/4">
          <div className="card-body">
            <h1 className="font-bold">Alur Pendaftaran</h1>

            <RegisterTimeline></RegisterTimeline>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <div className="card shadow w-9/12 lg:w-3/4">
          <div className="card-body">
            <h1 className="font-bold">Apa saja persyaratan yang harus dilengkapi??</h1>

            <Requirements></Requirements>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <div className="card shadow w-9/12 lg:w-3/4">
          <div className="card-body">
            <h1 className="font-bold">Berita Terbaru</h1>
            
            <p className="text-center">
              Tidak ada berita
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <div className="card shadow w-9/12 lg:w-3/4">
          <div className="card-body">
            <h1 className="font-bold">Pertanyaan Umum</h1>
            
            <p className="text-center">
              Tidak ada pertanyaan
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <div className="card shadow w-9/12 lg:w-3/4">
          <div className="card-body">
            <div className="flex">
              <div className="justify-center flex flex-grow">
                <p className="text-center">
                  &copy; 2023 <a href="https://github.com/billalxcode" className="text-primary dark:text-white">Billal Fauzan</a>
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