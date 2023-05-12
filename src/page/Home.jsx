import React, { useEffect, useState } from "react"
import RegisterTimeline from "../components/timeline"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons"
import SEO from "../components/seo"
import Requirements from "../components/requirements"
import { getAllBerita } from "../service/berita"
import Berita from "../components/berita"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { Link } from "react-router-dom"

export default function Home() {
  let [ berita, setBerita ] = useState([])

  const showModal = (event) => {
    const MySwal = withReactContent(Swal)

    MySwal.fire({
      icon: "error",
      title: "Opops...",
      text: "Mohon maaf, fitur ini belum tersedia!",
    })
  }

  useEffect(() => {
    const process = async () => {
      let databerita = await getAllBerita()
      let response = databerita.data.data
      setBerita(response)
    }
    
    process()
  }, [setBerita])
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
              <a href="/#" onClick={ showModal } className="btn btn-primary mx-1 btn-md w-full my-1 lg:w-max">Daftar</a>
              <a href="/#" onClick={ showModal } className="btn btn-info text-white mx-1 btn-md w-full my-1 lg:w-max">Cek Pendaftar</a>
              <a href="/poster.png" className="btn btn-success text-white mx-1 btn-md w-full my-1 lg:w-max" download={true}>Download Brosur</a>
              <Link to={'/hubungi'} className="btn btn-secondary text-white mx-1 btn-md w-full my-1 lg:w-max">Hubungi kami</Link>
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
            <h1 className="font-bold">Berita Terbaru</h1>
            
            { berita.map((data) => {
              return <Berita judul={data.judul} konten={data.konten} created_at={data.created_at} slug={data.slug}></Berita>
            })}
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