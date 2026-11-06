'use client'

import Image from "next/image"
import Actions from "./actions"
import Logo from "./logo"
import Nav from "./nav"
import { useState } from "react"

const mobileLinks = [
  { label: 'О нас', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Контакты', href: '#contacts' },
]


export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(true)

  return (
    <header className="relative border-b border-[#EBEBEB]">
      <div className="container grid grid-cols-[auto_1fr_auto] items-stretch">
        <div className="flex items-center py-3.5 pr-13 border-r border-[#EBEBEB]">
          <Logo />
        </div>
        <div className="hidden items-center justify-center py-3.5 px-8 border-r border-[#EBEBEB] lg:flex">
          <Nav />
        </div>
        <div className="flex items-center gap-4 py-3.5 pl-13">
          <div className="hidden sm:block sm:ml-auto">
            <Actions />
          </div>
          <button className="lg:hidden " onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Image
              src={'/test-company/Union.svg'}
              alt="burger"
              width={24}
              height={16}
            />
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-full z-50 flex min-h-screen flex-col items-center
          justify-center gap-10 lg:hidden bg-[#0181C8] text-white text-lg">
            {mobileLinks.map((link) => (
              <a onClick={() => setIsMenuOpen(false)} href={link.href}>{link.label}</a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}



