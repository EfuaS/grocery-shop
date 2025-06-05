import IconRightArrow from '@icons/right_arrrow.svg?react'

type PropType = {
  label: string
  style: string
}

export default function RightArrowButton({ label, style }: PropType) {
  return (
    <button
      className={` flex gap-2 ${style} py-1.5 px-4 font-medium rounded-[2px]`}
    >
      <p className="whitespace-nowrap">{label}</p>
      <IconRightArrow />
    </button>
  )
}
