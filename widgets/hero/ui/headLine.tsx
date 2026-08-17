import Image from "next/image";

export default function Headline() {
  return (
    <h1 className="max-w-[403px] ml-30 text-[50px] font-semibold leading-[1.12] ">
      СОЗДАЕМ
      <br />
      <span className="mx-1.5 inline-flex items-center mr-4">
        <Image src="/Frame 2147227884.svg" alt="" width={165} height={24} className="" />
      </span>
      ДИЗАЙН
      <br />
      ДЛЯ СИЛЬНЫХ
      <br />
      <span className="inline-flex items-center">БРЕНД<Image src='/_ (1).svg'
        alt=""
        width={38}
        height={34}
        className=""
      />В</span>
    </h1>
  );
}