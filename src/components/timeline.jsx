export default function RegisterTimeline() {
    const timelines = [
        {
            date: '06-10 Juni 2023',
            title: 'Pendaftaran Tahap 1',
            description: <span>Daring oleh sekolah asal atau sekolah tujuan <a href="https://pendaftaran.ppdb.disdik.jabarprov.go.id" className="text-info">disini</a> dan daring mandiri <a href="https://pendaftaran.ppdb.jabarprov.go.id" className="text-info">disini</a></span>,
            link: '/cara-daftar'
        },
        {
            date: '7-12 Juni 2023',
            title: 'Verifikasi dan Validasi',
            description: 'Waktu yang diberikan kepada pendaftar untuk melakukan sanggahan terhadap hasil verifikasiyang salah, untuk diperbaiki verifikator',
            link: null
        },
        {
            date: '16-17 Juni 2023',
            title: "Rapat Dewan Guru penetapan hasil seleksi PPDB tahap 1",
            description: 'Penetapan hasil seleksi PPDB tahap 1 pihak berwenang dan koordinasi satdik dan cadisdik',
            link: null
        },
        {
            date: '20 Juni 2023',
            title: 'Pengumuman hasil PPDB tahap 1',
            description: 'Pengumuman hasil PPDB dapat dilihat dari web ppdb.smkn1maja.sch.id atau ppdb.jabarprov.go.id'
        },
        {
            date: '21-23 Juni 2023',
            title: 'Daftar Ulang PPDB Tahap 1',
            description: 'Siswa yang selesai seleksi diharapkan segera daftar ulang secara offline atau datang langsung ke sekolah dengan membawa berkas.'
        },
        {
            date: '26-20 Juni 2023',
            title: 'Pendaftaran Tahap 2',
            description: <span>Daring oleh sekolah asal atau sekolah tujuan <a href="https://pendaftaran.ppdb.disdik.jabarprov.go.id" className="text-info">disini</a> dan daring mandiri <a href="https://pendaftaran.ppdb.jabarprov.go.id" className="text-info">disini</a></span>,
            link: '/cara-daftar'
        },
        {
            date: '28 Juni-3 Juli 2023',
            title: "Masa sanggah verifikasi",
            description: 'Waktu yang diberikan kepada pendaftar untuk melakukan sanggahan terhadap hasil verifikasi yang salah untuk diperbaiki verifikator',
            link: null
        },
        {
            date: '3-4 Juli 2023',
            title: "Test minat bakat program/bidang keahlian",
            description: 'Panitia PPDB tingkat SMK Negeri dan Swasta, dapat bekerja sama dengan tenaga ahli/DUDI',
            link: null
        },
        {
            date: '5 Juli 2023',
            title: "Rapat Dewan Guru penetapan hasil seleksi PPDB tahap 2 dan Koordinasi Satdik dan Casdisdik",
            description: 'Pengawas Pembina, Kepala Sekolah, Dewan Guru Kepala Sekolah dan KCD/Panitia',
            link: null
        },
        {
            date: '6 Juli 2023',
            title: 'Pengumuman hasil PPDB tahap 2',
            description: 'Pengumuman hasil PPDB dapat dilihat dari web ppdb.smkn1maja.sch.id atau ppdb.jabarprov.go.id'
        },
        {
            date: '10-11 Juli 2023',
            title: 'Daftar Ulang PPDB Tahap 2',
            description: 'Siswa yang selesai seleksi diharapkan segera daftar ulang secara offline atau datang langsung ke sekolah dengan membawa berkas.'
        },
        {
            date: '12-14 Juli 2023',
            title: 'Masa Pengenalan Lingkungan Sekolah',
            description: 'Siswa yang selesai seleksi wajib hadir dalam Masa Pengenalan Lingkungan Sekolah yang akan diadakan di Kampus SMKN 1 Maja'
        },
    ]
    return (
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {timelines.map((timeline, index) => {
                if (timeline.link === null) {
                    return (
                        <li className={ index === (timelines.length - 1) ? "ml-4" : 'mb-10 ml-3'} key={index}>
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{ timeline.date } </time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{ timeline.title }</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{ timeline.description}</p>
                            <a href="/cara-daftar" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Pelajari <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></a>
                        </li>
                    )
                } else {
                    return (
                        <li className={ index === (timelines.length - 1) ? "ml-4" : 'mb-10 ml-3'} key={index}>
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{ timeline.date }</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{ timeline.title }</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">{ timeline.description }</p>
                        </li>
                    )
                }
            })}
            
            {/* <li className="ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">5 Juli 2023</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Pendaftaran Tahap 2</h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Siswa baru mendaftar dengan jalur Daring</p>
                <a href="/cara-daftar" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Pelajari <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></a>
            </li> */}
        </ol>
    )
}