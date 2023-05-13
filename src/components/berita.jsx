import { Link } from "react-router-dom"

export default function Berita({ judul, konten, created_at, slug, index }) {
    const parseDate = (date) => {
        return new Date(date).toDateString()
        // return date
    }

    return (
        <div className="card shadow transform transition duration-500 hover:scale-105" key={index}>
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
    )
}