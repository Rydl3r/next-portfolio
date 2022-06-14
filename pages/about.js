import Image from "next/image";
import Phones from "../lib/images/phones.png";

const about = () => {
  return (
    <div className="h-full m-4 md:m-10 flex bg-indigo-800 py-5 px-10 justify-center text-white">
      <div className="md:w-3/6 w-full">
        <div className="text-4xl font-bold md:pt-10">A bit about me</div>
        <div className="text-md py-8">
          Hello, My name is Mukoed Ivan AKA rydl3r. <br />
          I am a Frontend Web Developer.
          <br />
          I’m currently learning UI/UX development. <br />
          Checkout my projects on github. <span>@rydl3r</span>
        </div>
        <div className="rounded-sm bg-gray-300 w-32 text-black text-center py-2 transition hover:bg-gray-400 cursor-pointer">
          Github
        </div>
      </div>
      <div>
        <Image
          src={Phones}
          width={400}
          height={300}
          className="mt-10 md:w-16 h-16 md:flex hidden justify-center"
        />
      </div>
    </div>
  );
};

export default about;
