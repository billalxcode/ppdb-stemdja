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
import packageJson from '../../package.json'
import { isMobile } from "react-device-detect"

export default function Home() {
  let [berita, setBerita] = useState([])

  const getAppVersion = () => {
    return packageJson.version
  }

  const showModal = (event) => {
    const MySwal = withReactContent(Swal)

    MySwal.fire({
      icon: "error",
      title: "Opops...",
      text: "Mohon maaf, fitur ini belum tersedia!",
    })
  }

  const handleOpenWhatsapp = (phone) => {
    const desktopLink = `https://api.whatsapp.com/send?phone=${phone}&text=Assalamualaikum`
    const mobileLink = `whatsapp://send?text=Assalamualaikum&phone=${phone}`

    if (isMobile) {
      window.open(mobileLink, "_blank", "noopener,noreferrer")
    } else {
      window.open(desktopLink, "_blank", "noopener,noreferrer")
    }
  }

  useEffect(() => {
    const beritaProcess = async () => {
      let databerita = await getAllBerita()
      let response = databerita.data.data
      setBerita(response)
    }

    beritaProcess()
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
              <a href="/#" onClick={showModal} className="btn btn-primary mx-1 btn-md w-full my-1 lg:w-max">Daftar</a>
              <a href="/#" onClick={showModal} className="btn btn-info text-white mx-1 btn-md w-full my-1 lg:w-max">Cek Pendaftar</a>
              <a href="/poster.png" className="btn btn-success text-white mx-1 btn-md w-full my-1 lg:w-max" download={true}>Download Brosur</a>
              <a href="/#hubungi" className="btn btn-secondary text-white mx-1 btn-md w-full my-1 lg:w-max">Hubungi kami</a>
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

      <div className="flex justify-center mt-5" id="hubungi">
        <div className="card shadow w-9/12 lg:w-3/4">
          <div className="card-body">
            <h1 className="font-bold">Hubungi</h1>

            <div className="flex flex-row px-5">
              <div className="card shadow transform transition duration-500 hover:scale-105 w-1/3 mx-2">
                <div className="card-body">
                  <div className="flex justify-center">
                    <h1 className="font-semibold text-center">Agus Mulyana</h1>

                  </div>
                  <div className="my-4">
                    <button className="btn w-full btn-success" onClick={(e) => { handleOpenWhatsapp('6281395564844') }}>
                      Hubungi via Whatsaap
                    </button>
                  </div>
                </div>
              </div>

              <div className="card shadow transform transition duration-500 hover:scale-105 w-1/3 mx-2">
                <div className="card-body">
                  <div className="flex justify-center">
                    <h1 className="font-semibold text-center">Yanto Bendi</h1>

                  </div>
                  <div className="my-4">
                    <button className="btn w-full btn-success" onClick={(e) => { handleOpenWhatsapp('6281324047610') }}>
                      Hubungi via Whatsaap
                    </button>
                  </div>
                </div>
              </div>

              <div className="card shadow transform transition duration-500 hover:scale-105 w-1/3 mx-2">
                <div className="card-body">
                  <div className="flex justify-center">
                    <h1 className="font-semibold text-center">Dendi Juliansyah</h1>

                  </div>
                  <div className="my-4">
                    <button className="btn w-full btn-success" onClick={(e) => { handleOpenWhatsapp('6285294173692') }}>
                      Hubungi via Whatsaap
                    </button>
                  </div>
                </div>
              </div>
            </div>
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

            {berita.length > 0 ? berita.map((data) => {
              return <Berita judul={data.judul} konten={data.konten} created_at={data.created_at} slug={data.slug}></Berita>
            }) : <p className="text-center">Belum ada berita</p>}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <div className="card shadow w-9/12 lg:w-3/4">
          <div className="card-body">
            <div className="flex">
              <div className="justify-start text-sm">
                App version: {getAppVersion()}
              </div>
              <div className="justify-center flex flex-grow">
                <p className="text-center">
                  &copy; 2023 <a href="https://github.com/billalxcode" className="text-primary dark:text-white">Billal Fauzan</a>
                </p>
              </div>
              <div className="justify-end flex flex-row text-2xl">
                <a href="https://www.youtube.com/@KanzaTV" className="px-1"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a>
                <a href="https://instagram.com/stemdja" className="px-1"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                <a href="https://instagram.com/stemdja_production" className="px-1"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}