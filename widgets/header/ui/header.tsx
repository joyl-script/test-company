'use client'

import Actions from "./actions"
import Logo from "./logo"
import Nav from "./nav"

export default function Header() {

  return (
    <header className="border-b border-[#EBEBEB]">
      <div className="container grid grid-cols-[auto_1fr_auto] items-stretch">
        <div className="flex items-center py-3.5 pr-13 border-r border-[#EBEBEB]">
          <Logo />
        </div>
        <div className="flex items-center justify-center py-3.5 px-8 border-r border-[#EBEBEB]">
          <Nav />
        </div>
        <div className="flex items-center py-3.5 pl-13">
          <Actions />
        </div>
      </div>
    </header>
  )
}