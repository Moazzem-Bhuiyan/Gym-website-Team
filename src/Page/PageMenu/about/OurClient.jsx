import { IoIosCheckmark } from "react-icons/io";
import About1 from '../../../assets/about-1.jpg'
import About2 from '../../../assets/about-2.jpeg'
export default function OurClient() {
  return (
    <div className="grid grid-cols-2 px-16">
      <div className="flex gap-8">
        <img className="max-w-[400px]" src={About1} alt="" />
        <img className="max-w-[400px]" src={About2} alt="" />
      </div>
      <div className="mt-9"> 
        <p>for our clients</p>
        <h1 className="font-semibold text-6xl py-6">Choose a healthy <br /> lifestyle now</h1>
        <p className="text-zinc-500 py-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor, <br /> sit amet consectetur adipisicing elit. Consectetur, in.</p>

        <div className="flex ">
        <IoIosCheckmark className="text-amber-500 text-5xl font-bold "/>
        <p className="mt-3 font-medium">Adipiscing eli sed eiusmod</p>
        </div>
        <div className="flex ">
        <IoIosCheckmark className="text-amber-500 text-5xl font-bold "/>
        <p className="mt-3 font-medium">Adipiscing eli sed eiusmod</p>
        </div>
        <div className="flex ">
        <IoIosCheckmark className="text-amber-500 text-5xl font-bold "/>
        <p className="mt-3 font-medium">Adipiscing eli sed eiusmod</p>
        </div>
        <button className="mt-8 bg-red-500 p-3 px-7">Our Services</button>
      </div>
      
    </div>
  )
}
