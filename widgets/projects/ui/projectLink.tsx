import Image from "next/image"

export default function ProlectLink() {
  return (
    <div className="container">
      <div className=" border-b border-[#E1E1E1] py-8">
        <div className=" flex justify-between items-center ">
          <h1 className="font-semibold text-2xl sm:text-3xl md:text-5xl ">Все проекты</h1>
          <a href="#">
            <Image
              src='/test-company/Group 845213540.svg'
              alt=''
              width={17}
              height={17}
              className="brightness-0 sm:w-[31px] sm:h-[31px] md:w-[45px] md:h-[45px]"
            />
          </a>
        </div>
      </div>
    </div>
  )
}