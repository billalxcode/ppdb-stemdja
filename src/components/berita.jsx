export default function Berita({ judul, konten, created_at, slug }) {
    const parseDate = (date) => {
        return new Date(date).toDateString()
        // return date
    }

    return (
        <div className="card shadow" key={slug}>
            <div className="card-body">
                <div className="flex justify-between">
                    <h1 className="font-bold text-sm">{ judul }</h1>
                    <span className="hidden text-sm lg:block md:block">{ parseDate(created_at) }</span>
                </div>
                <span className="text-sm">
                    { konten }
                </span>
            </div>
        </div>
    )
}