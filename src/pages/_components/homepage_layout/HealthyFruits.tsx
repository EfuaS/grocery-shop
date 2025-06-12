import RightArrowButton from '../buttons/RightArrowButton'
import IconCannibis from '@icons/cannabis.svg?react'

export default function HealthyFruits() {
  return (
    <div className="grid grid-cols-7 bg-antiflash-white h-screen ">
      <div className=" col-span-4 flex items-center justify-end pl-10">
        <div className="my-auto flex flex-col items-end">
          <p className="text-app-purple leading-0 text-5xl font-extrabold comissioner-font translate-x-18">
            HEALTHY
          </p>
          <br />
          <span className="text-5xl font-extrabold comissioner-font text-app-yellow">
            FRUITS
          </span>
          <div className="bg-green-300 mt-6 w-fit flex flex-col items-end">
            <p className="text-black font-bold text-2xl">
              40% off on selected items
            </p>
            <div className="flex  items-start gap-2 w-fit mt-4">
              <div className="bg-kelly-green rounded-full w-fit p-1 grid">
                <IconCannibis className="m-auto size-8 text-white" />
              </div>
              <p className="text-xs font-bold w-1/3">
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
      <div className=" col-span-3 grid">
                <img
          src="./images/vege_basket_removebg.png"
          className="m-auto -translate-y-20"
          alt="basket-of-vegetables"
        />

      </div>
    </div>
  )
}
