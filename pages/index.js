import Image from "next/image";
import Laptop from "../lib/images/laptop.png";

export default function Home() {
  return (
    <div className="flex bg-gray-100 m-4 md:mx-10 md:my-5 p-5 justify-center rounded">
      <div className="md:w-3/6 w-full pt-10">
        <div className="text-4xl font-bold pt-3 md:pt-10">
          Hello,<br></br>I am <span className="text-purple-800">Rydl3r.</span>
        </div>
        <div className="text-2xl text-gray-800 py-4">
          Web Designer/Developer
        </div>
        <div className="flex pt-5">
          <div className="mr-3 rounded-sm bg-purple-800 w-32 text-white text-center py-2 transition hover:bg-purple-900 cursor-pointer">
            Contact
          </div>
          <div className="mx-3 rounded-sm bg-gray-300 w-32 text-black text-center py-2 transition hover:bg-gray-400 cursor-pointe">
            Projects
          </div>
        </div>
      </div>
      <div>
        <Image
          src={Laptop}
          className="md:w-3/6 md:flex hidden justify-center"
        />
      </div>
    </div>
  );
}
