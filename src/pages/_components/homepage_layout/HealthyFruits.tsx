import RightArrowButton from '../buttons/RightArrowButton'
import IconCannibis from '@icons/cannabis.svg?react'

export default function HealthyFruits() {
  return (
    <div className="grid grid-cols-7 bg-antiflash-white h-screen ">
      <div className=" col-span-4 flex items-center justify-end pl-10">
        <div className="my-auto">
          <p className="text-app-purple leading-0 text-5xl font-extrabold comissioner-font translate-x-18">
            HEALTHY
          </p>
          <br />
          <span className="text-5xl font-extrabold comissioner-font text-app-yellow">
            FRUITS
          </span>
          <div className="ml-8 mt-6">
            <p className="text-black font-bold text-2xl">
              40% off on selected items
            </p>
            <p className="text-sm w-1/2 mt-3">
              Lorem ispum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </p>
            <div className="flex justify-between items-start gap-8 mt-4">
              <div className="bg-kelly-green rounded-full w-fit p-1 grid">
                <IconCannibis className="m-auto size-8 text-white" />
              </div>
              <p className="text-xs font-bold">
                Lorem ispum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <RightArrowButton
                label="See more"
                style="text-white border-white/30 border-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" col-span-3 grid"></div>
    </div>
  )
}
