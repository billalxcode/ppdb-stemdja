export default function Requirements() {
    const requirements = [
        {
            name: "Umum",
            data: [
                "Ijazah/Surat Keterangan Lulus/Kartu peserta Ujian Sekolah",
                "Akta Kelahiran/Surat Keterangan Lahir",
                "Kartu Keluarga (minimal satu tahun), KTP",
                "Buku Rapor (semester 1 s.d. 5)",
                "Surat Tanggung Jawab Mutlak Orang Tua"
            ]
        },
        {
            name: "Khusus",
            data: [
                "Kartu Program Penanganan Kemiskinan/Terdaftar pada DTKS Dinsos (bagi jalur - afirmasi/KETM)",
                "Surat Keterangan Domisili dari RT/RW (bagi afirmasi korban bencana alam/sosial)",
                "Surat Tugas Orangtua (bagi jalur perpindahan tugas orangtua/wali, maks. 3 tahun/anak guru)",
                "Surat keputusan satgas covid bagi afirmasi kondisi tertentu penanganan Covid-19",
                "Piagam dan Dokumentasi Prestasi (untuk jalur prestasi kejuaraan) maks. 5 tahun, min. 6 bulan"
            ]
        }
    ];

    return (
        <ul className="mb-8 space-y-4 ml-4 text-gray-500 dark:text-gray-400" style={{ listStyleType: 'inherit'}}>
            { requirements.map((data, index) => {
                return (
                    <li className="" key={index}>
                        { data.name }
                        <ol style={{ listStyleType: 'revert'}} className="ml-3 list-outside sm:list-inside">
                            { data.data.map((datx, index) => {
                                return (
                                    <li>{ datx }</li>
                                )
                            })}
                        </ol>
                    </li>
                )
            })}
        </ul>
    )
}