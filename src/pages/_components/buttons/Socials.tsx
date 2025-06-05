import type { ReactNode } from 'react'
import IconMail from '@icons/mail.svg?react'

type SocialsType = {
  name: string
  icon: ReactNode
}

export default function Socials() {
  const socials: SocialsType[] = [
    {
      name: 'email',
      icon: <IconMail />,
    },
    {
      name: 'facebook',
      icon: <IconMail />,
    },
  ]

  return (
    <div className="space-y-2 mr-4">
      {socials.map((social) => (
        <div
          className="hover:cursor-pointer bg-white text-app-yellow p-1 w-fit rounded-full"
          key={social.name}
        >
          {social.icon}
        </div>
      ))}
      <button></button>
    </div>
  )
}
