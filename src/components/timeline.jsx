export default function RegisterTimeline() {
    const timelines = [
        {
            date: '15 Juni 2023',
            title: 'Pendaftaran Tahap 1',
            description: 'Siswa baru mendaftar dengan jalur Daring',
            link: '/cara-daftar'
        },
        {
            date: '25 Juni 2023',
            title: 'Verifikasi dan Validasi',
            description: 'Data siswa akan diverififikasi dan divalidasi berdasarkan data dapodik',
            link: null
        },
        {
            date: '1 Juli 2023',
            title: 'Pendaftaran Tahap 2',
            description: 'Siswa baru mendaftar dengan jalur Daring',
            link: '/cara-daftar'
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