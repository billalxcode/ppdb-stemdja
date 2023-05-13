import React, { useCallback, useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { getAllBerita } from "../../service/berita"
import Berita from "../../components/berita"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { useNavigate } from "react-router-dom"
import packageJson from '../../../package.json'
import { getSession } from "../../service/session"

export default function Dashboard() {
    let [berita, setBerita] = useState([])  
    const navigate = useNavigate()
    
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

    const beritaProcess = useCallback(async () => {
        let databerita = await getAllBerita()
        let response = databerita.data.data
        setBerita(response)
    }, [])

    const checklogged = useCallback(async () => {
        let userdata_session = getSession('user')
        let userdata_json = JSON.parse(userdata_session)
        if (userdata_json === null) {
            navigate('/login')
        }
    }, [navigate])

    useEffect(() => {
        beritaProcess()
        checklogged()
    }, [beritaProcess, checklogged])
    return (
        <>
            <div className="flex justify-center mt-5">
                <div className="card shadow w-9/12 lg:w-3/4">
                    <div className="card-body">
                        <h4 className="font-bold">Selamat datang admin di PPDB SMKN 1 Maja</h4>
                        <p>
                            Selamat datang di Penerimaan Peserta Didik Baru Sekolah Menengah Kejuruan Negeri 1 Maja, Majalengka, Jawa Barat
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-5">
                <div className="card shadow w-9/12 lg:w-3/4" key={'pertanyaan'}>
                    <div className="card-body">
                        <h1 className="font-bold">Pertanyaan umum</h1>
                        {/* <div className="flex justify-between">
                            <span>
                                <button className="btn btn-primary btn-sm">New</button>
                            </span>
                        </div> */}

                        <p className="text-center">
                            Belum ada pertanyaan
                        </p>
                        <button className="btn btn-primary w-full" onClick={showModal}>Create new</button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-5">
                <div className="card shadow w-9/12 lg:w-3/4" key={'berita'}>
                    <div className="card-body">
                        <h1 className="font-bold">Berita Terbaru</h1>
                        {/* <div className="flex justify-between">
                            <span>
                                <button className="btn btn-primary btn-sm">New</button>
                            </span>
                        </div> */}

                        {berita.length > 0 ? berita.map((data, index) => {
                            return <Berita judul={data.judul} konten={data.konten} created_at={data.created_at} slug={data.slug} index={index}></Berita>
                        }) : <p className="text-center">Belum ada berita</p>}

                        <button className="btn btn-primary w-full" onClick={showModal}>Create new</button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-5">
                <div className="card shadow w-9/12 lg:w-3/4" key={'footer'}>
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