import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="flex md:justify-center py-5">
            <div className="mr-auto ml-10 text-purple-700 text-opacity-100 font-bold text-xl md:block hidden">Rydl3r</div>
            <div className="flex justify-around mx-auto md:ml-auto md:mr-10">
                <Link href="/"><a className="mx-3 md:mx-5 cursor-pointer transition hover:text-gray-800">Home</a></Link>
                <Link href="/about"><a className="mx-3 md:mx-5 cursor-pointer transition hover:text-gray-800">About</a></Link>
                <Link href="/skills"><a className="mx-3 md:mx-5 cursor-pointer transition hover:text-gray-800">Skills</a></Link>
                <Link href="/contact"><a className="mx-3 md:mx-5 cursor-pointer transition hover:text-gray-800">Contact</a></Link>
            </div>
        </div>
    )
}

export default Navbar
