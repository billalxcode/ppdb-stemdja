export default function Requirements() {
    const requirements = [
        'Ijazah/Surat Keterangan Lulus/Kartu Peserta Ujian Sekolah (ijazah dapat diserahkan setelah terbit atau tanggal 16—17 Juni); [UMUM]',
        'Kartu Keluarga (minimal satu tahun); [UMUM]',
        'Buku Rapor (semester 1—5); [UMUM]',
        'Kartu Program Penanganan Kemiskinan/Terdaftar pada Data Terpadu Kesejahteraan Sosial (DTKS) Dinas Sosial (bagi jalur afirmasi/KETM); [KHUSUS]',
        'Surat Tugas Orang Tua bagi jalur perpindahan tugas orang tua/wali, maks.3 tahun/anak guru dan bagi afirmasi kondisi tertentu penanganan Covid-19; [KHUSUS]',
        'Kartu Tanda Penduduk (KTP); [UMUM]',
        'Surat Tanggung Jawab Mutlak Orang Tua. [UMUM]',
        'Surat Keterangan Domisili dari RT/RW (bagi afirmasi korban bencana alam/sosial); [KHUSUS]',
        'Piagam dan dokumentasi prestasi (untuk jalur prestasi kejuaraan), maks.5 tahun, min. 6 bulan. [KHUSUS]'
    ];

    return (
        <ul class="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
            { requirements.map((data, index) => {
                return (
                    <li class="flex items-center space-x-3">
                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>{ data }</span>
                    </li>
                )
            })}
        </ul>
    )
}