import RightArrowButton from '../buttons/RightArrowButton'
import IconCannibis from '@icons/cannabis.svg?react'

export default function QualitySection() {
  return (
    <div className="grid grid-cols-7 ">
      <div className="bg-white col-span-4 grid pl-10">
        <div>
          <img
            src="./images/kiwis-removebg.png"
            className="size-40 -translate-y-18"
            alt="2-kiwis"
          />
        </div>

        <img
          src="./images/vege_basket_removebg.png"
          className="m-auto -translate-y-20"
          alt="basket-of-vegetables"
        />
      </div>
      <div className="bg-app-yellow col-span-3 grid">
        <div className="my-auto">
          <p className="text-kelly-green leading-0 text-5xl font-extrabold comissioner-font -translate-x-18">
            GREEN
          </p>
          <br />
          <span className="text-5xl font-extrabold comissioner-font text-white">
            QUALITY
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
              <div className="bg-white rounded-full w-fit p-1 grid">
                <IconCannibis className="m-auto size-8 text-kelly-green" />
              </div>
              <p className="text-xs font-bold">
                Lorem ispum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <RightArrowButton
                label="See more"
                style="text-white border-white/30 border-2"
              />
              <img
                alt="sliced-half-orange"
                src="./images/orange_removebg.png"
                className="size-24 scale-150"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
