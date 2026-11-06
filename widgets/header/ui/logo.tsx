import Image from "next/image"

export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-5 ">
      <Image
        src='/test-company/Simbol.svg'
        alt="logo"
        width={36}
        height={36}
      />
      <span className="h-1 w-1 rounded-full bg-[#0181C8]" />
      <span className="font-normal text-black hover:text-[#0181C8] transition duration-300 ease-in-out"> Test Company</span>
    </a>
  )
}