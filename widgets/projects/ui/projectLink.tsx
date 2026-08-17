import Image from "next/image"

export default function ProlectLink() {
  return (
    <div className="container">
      <div className=" border-b border-[#E1E1E1] py-8">
        <div className=" flex justify-between items-center ">
          <h1 className="font-semibold text-[50px]">Все проекты</h1>
          <a href="#">
            <Image
              src='/Group 845213540.svg'
              alt=''
              width={45}
              height={45}
              className="brightness-0"
            />
          </a>
        </div>
      </div>
    </div>
  )
}