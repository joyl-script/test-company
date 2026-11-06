import Image from "next/image";

export default function Headline() {
  return (
    <h1 className="max-w-[403px] ml-25 text-2xl sm:text-3xl md:text-5xl font-semibold leading-[1.12] ">
      СОЗДАЕМ
      <br />
      <span className="mx-1.5 inline-flex items-center mr-4">
        <Image src="/test-company/Frame 2147227884.svg" alt="" width={79} height={16} className="sm:w-[94px] sm:h-[20px] md:w-[164px] md:h-[24px]" />
      </span>
      ДИЗАЙН
      <br />
      ДЛЯ СИЛЬНЫХ
      <br />
      <span className="inline-flex items-center">БРЕНД<Image src='/test-company/_ (1).svg'
        alt=""
        width={20}
        height={18}
        className="sm:w-[24px] sm:h-[22px] md:w-[38px] md:h-[34px]"
      />В</span>
    </h1>
  );
}