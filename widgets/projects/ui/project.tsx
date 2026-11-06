import Image from "next/image"
import ProlectLink from "./projectLink"

export default function Project() {

  const PROJECT = [
    { title: 'MIUZ Diamonds', tags: ['Брендбук', 'Презентация'], desc: 'Ювелирный дом полного цикла  с собственным производством  и федеральной сетью магазинов.', image: '/test-company/Frame 845213912.png' },
    { title: 'HSE', tags: ['Упаковка', '7 концепций'], desc: 'Школа дизайна, моды и искусства НИУ ВШЭ. Лидер рейтинга Forbes по репутации у работодателей.', image: '/test-company/Frame 845213910.png' },
    { title: 'Энерготэк', tags: ['3D', 'AR-приложение'], desc: 'Разработчик и производитель систем для прокладки и защиты кабельных линий.', image: '/test-company/Frame 845213909.png' },
    { title: 'Киноуроки', tags: ['Мерч', 'Презентация'], desc: 'Культурно-образовательный проект, который знакомит школьников с 99 важными человеческими качествами  и помогает развивать их на практике.', image: '/test-company/Frame 845213911.png' },
    { title: 'H-ONE', tags: ['Брендбук', 'Логотип', 'Сайт'], desc: 'Комплексное производство мерча  и промопродукции — от разработки концепции до передачи готового тиража клиенту.', image: '/test-company/Frame 845213908.png' },
  ]

  return (
    <section className=" mt-8 lg:mt-25">
      <div className="container ">
        {PROJECT.map((project) => (
          <div key={project.title} className="items-center gap-5 lg:gap-16 border-b border-[#E1E1E1] py-8 flex flex-wrap-reverse">
            <div key={project.title} className="block sm:flex sm:items-end sm:gap-10 lg:block">
              <h1 className="font-semibold text-[24px] sm:text-3xl md:text-5xl">{project.title}</h1>
              <div>
                <div className="flex gap-2 mt-[173px]">
                  {project.tags.map((tag) => (
                    <span className="border border-[#B5B5B5] py-1.5 px-4 text-[#9E9E9E] rounded-lg " key={tag}>{tag}</span>

                  ))}
                </div>
                <p className="text-[18px] text-black mt-4 max-w-[393px] sm:max-w-[344px] md:max-w- [720px]">{project.desc}</p>
              </div>
            </div>
            <Image
              src={project.image}
              alt={project.title}
              width={393}
              height={160}
              className="ml-auto sm:w-[688px] sm:h-[250px] md:w-[880px] md:h-[371px]"
            />
          </div>
        ))}
      </div>
      <ProlectLink />
    </section>
  )
}