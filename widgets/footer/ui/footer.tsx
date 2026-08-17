import RotatingBadge from "@/widgets/hero/ui/rotatingBadge";
import Image from "next/image";

const SERVICE_COLUMNS = [
  {
    title: "ДИЗАЙН",
    items: ["UX/UI", "Фирменный стиль", "Сайты / Приложения", "Графический дизайн", "Инфографика", "3D"],
  },
  {
    title: "САЙТЫ",
    items: ["HTML / CSS / JS", "Backend / API", "CMS", "iOS / Android"],
  },
  {
    title: "КОПИРАЙТИНГ",
    items: ["SMM", "Сайты", "Ком. предложения", "Презентации", "Нейминг", "SEO тексты"],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0181C8] text-white mt-25">

      <div className="absolute inset-x-0 top-20 " />
      <div className="border-b border-white/25">
        <div className="container grid grid-cols-3 divide-x divide-white/25">
          <div className="">
            <div className="flex h-20 items-center  font-medium uppercase tracking-wide">
              01 // Подробнее
              <span className="h-2.5 w-2.5 rounded-full border border-white" />
            </div>
            <div className="text-4xl font-bold leading-tight pt-[252px]">
              Создаем дизайн
              <br />
              для сильных брендов
            </div>
          </div>


          <div className="px-10 pb-7.5 ">
            <div className="flex h-20 items-center justify-between font-medium uppercase tracking-wide">
              02 // Услуги
              <span className="h-2.5 w-2.5 bg-white" />
            </div>
            <div className="flex gap-15 pt-[138px]">
              {SERVICE_COLUMNS.map((column) => (
                <div key={column.title} className="grid">
                  <h4 className="mb-4 font-bold">{column.title}</h4>
                  {column.items.map((item) => (
                    <a key={item} href="#" className="text-[14px] leading-[2]">
                      {item}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="pl-10">
            <div className="flex h-20 items-center justify-between font-medium uppercase tracking-wide">
              03 // Контакты
              <span className="h-2.5 w-2.5 bg-white" />
            </div>
            <div className="flex pt-[218px] items-end gap-[272px]">
              <div className="flex flex-col gap-4">
                <div className="flex gap-3.5">
                  <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-1">
                    <Image src="/Vector (3).svg" alt="vk" width={19} height={17} />
                  </a>
                  <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-1">
                    <Image src="/Vector (4).svg" alt="max" width={19} height={17} />
                  </a>
                  <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-1">
                    <Image src="/Telegram.svg" alt="telegram" width={18} height={17} />
                  </a>
                </div>

                <div>
                  <a href="#" className="block font-semibold">+7 999 999 99 99</a>
                  <a href="#" className="block text-sm opacity-90">team@TestCompany.ru</a>
                </div>
              </div>

              <RotatingBadge size={121} variant="light" />
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-white/25 py-6 mt-[310px]">
        <div className="container flex items-center justify-between text-[13px] opacity-85">
          <p>@ [2026] TestCompany.</p>
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Условия и положения</a>
        </div>
      </div>
    </footer>
  );
}