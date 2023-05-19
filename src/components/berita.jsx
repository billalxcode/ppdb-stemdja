import { useCallback, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { deleteBerita } from "../service/berita"

export default function Berita({ judul, konten, created_at, slug, index, access_token }) {
    const navigate = useNavigate()

    let [showModalBerita, setShowModalBerita] = useState(false)
    let [alertBeritaMessage, setAlertBeritaMessage] = useState({})
    
    const parseDate = (date) => {
        return new Date(date).toDateString()
        // return date
    }

    const clickBeritaEvent = useCallback(() => {
        setShowModalBerita(true)
    }, [setShowModalBerita])

    const submitDeleteBerita = useCallback(async () => {
        const response = await deleteBerita(slug, access_token)
        let alertStatus = (response.data.error ? 'alert-error' : 'alert-success')
        setAlertBeritaMessage({
            message: response.data.message,
            type: alertStatus
        })
        navigate(0)
    }, [slug, access_token, navigate])

    return (
        <>
            <div className="card shadow transform transition duration-500 hover:scale-105" key={index} onClick={clickBeritaEvent}>
                <div className="card-body">
                    <div className="flex justify-between">
                        <Link to={'/baca/' + slug}><h1 className="font-bold text-sm">{ judul }</h1></Link>
                        <span className="hidden text-sm lg:block md:block">{ parseDate(created_at) }</span>
                    </div>
                    {/* <span className="text-sm">
                        { String(konten).substring(0, 100) }
                    </span> */}
                </div>
            </div>

            <div className={ "modal modal-bottom sm:modal-middle " + (showModalBerita ? 'modal-open' : '')}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Delete Berita {slug}!</h3>
                    { Object.keys(alertBeritaMessage).length > 0 ? 
                            <div className={"alert " + alertBeritaMessage.type}>
                                { alertBeritaMessage.message }
                            </div>
                        : ''}

                    <div className="modal-action">
                        <button className="btn btn-error" onClick={submitDeleteBerita}>Delete</button>
                        <button className="btn btn-ghost" onClick={(e) => setShowModalBerita(false)}>Close</button>
                    </div>
                </div>
            </div>
        </>
    )
}