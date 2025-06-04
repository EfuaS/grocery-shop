import RightArrowButton from "../buttons/RightArrowButton";
import Header from "./Header";

export default function HeroSection() {  return (
    <div className="h-screen w-full  grid grid-cols-7 ">
      <div className="bg-antiflash-white col-span-4 grid pl-10" >
        <div className="my-auto space-y-4">
        <div className="text-7xl font-extrabold comissioner-font">
            <span className="text-kelly-green">HEALTHY </span> <br/> <span className="text-[#FEB61Aff]">LIVING </span>
        </div>
      <p className="w-[70%] text-sm">Lorem ispum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      

      <RightArrowButton/>
      </div>
      </div>
      <div className="bg-app-yellow col-span-3">
          <Header/>


      </div>
    </div>
  )
}
