import RightArrowButton from '../buttons/RightArrowButton'
import Socials from '../buttons/Socials'
import Header from './Header'

export default function HeroSection() {
  return (
    <div className="h-screen w-full  grid grid-cols-7 ">
      <div className="bg-antiflash-white col-span-4 grid pl-10">
        <div className="my-auto space-y-4">
          <span className="text-5xl italic">Super Market</span>
          <div className=" text-6xl xl:text-8xl font-extrabold comissioner-font">
            <span className="text-kelly-green">HEALTHY </span> <br />
            <span className="text-[#FEB61Aff]">LIVING </span>
          </div>
          <p className="w-[70%] text-sm">
            Lorem ispum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          <RightArrowButton label="Shop" style="text-white bg-app-green" />
          <div className="bg-app-yellow size-40 rounded-full translate-y-20" />
        </div>
      </div>
      <div className="bg-app-yellow col-span-3 ">
        <Header />

        <p className="text-9xl font-extrabold text-white/15 -translate-x-6 overflow-hidden">
          VEGETABLES
        </p>
        <div className="w-full flex items-center justify-between">
          <div className="bg-antiflash-white w-fit rounded-full -translate-x-44">
            <img
              src="./images/veges-removebg.png"
              alt="cluster of veges"
              className="w-[450px] h-[450px] m-2 rounded-full  bg-antiflash-white"
            />
          </div>
          <Socials />
        </div>
        <div className="flex justify-end translate-x-28 -translate-y-52">
          <div className="size-80 border-[17px] rounded-full border-[#FFA700] " />
        </div>
      </div>
    </div>
  )
}
