import { useCallback, useState } from "react"
import { Link } from "react-router-dom"

export default function Berita({ judul, konten, created_at, slug, index }) {
    let [showModalBerita, setShowModalBerita] = useState(false)

    const parseDate = (date) => {
        return new Date(date).toDateString()
        // return date
    }

    const clickBeritaEvent = useCallback(() => {
        setShowModalBerita(true)
    }, [setShowModalBerita])

    const submitDeleteBerita = useCallback(() => {
        console.log("Delete beria on slug " + slug)
    }, [slug])

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
                    
                    <div className="modal-action">
                        <button className="btn btn-error" onClick={submitDeleteBerita}>Delete</button>
                        <button className="btn btn-ghost" onClick={(e) => setShowModalBerita(false)}>Close</button>
                    </div>
                </div>
            </div>
        </>
    )
}