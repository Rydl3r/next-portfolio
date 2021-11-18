import Image from 'next/image'
import Planes from '../lib/images/planes.png'

const contact = () => {
    return (
        <div className="h-full m-4 md:m-10 flex bg-indigo-800 py-5 px-10 justify-center text-white">
            <div className="w-full md:w-3/6 md:flex hidden justify-center">
                <Image src={Planes} width={400} height={300} className=""/>
            </div>
            <div className="md:w-3/6 w-full pl-10">
                <div className="text-4xl font-bold md:pt-10">Contact Me</div>
                <form>
                    <div>Name</div>
                    <input className="text-black rounded bg-gray-200 focus:outline-none p-2 mb-2" placeholder="Type something..." />
                    <div>Email</div>
                    <input className="text-black rounded bg-gray-200 focus:outline-none p-2 mb-2" placeholder="Type something..." />
                    <div>Message</div>
                    <input className="text-black rounded bg-gray-200 focus:outline-none p-2 mb-2" placeholder="Type something..." />
                </form>
                <div className="rounded-sm bg-gray-300 w-32 text-black text-center py-2 transition hover:bg-gray-400 cursor-pointer">Contact</div>
            </div>
            
        </div>
    )
}

export default contact
