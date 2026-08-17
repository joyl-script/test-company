import Image from "next/image"
import ProlectLink from "./projectLink"

export default function Project() {

  const PROJECT = [
    { title: 'MIUZ Diamonds', tags: ['Брендбук', 'Презентация'], desc: 'Ювелирный дом полного цикла  с собственным производством  и федеральной сетью магазинов.', image: '/Frame 845213912.png' },
    { title: 'HSE', tags: ['Упаковка', '7 концепций'], desc: 'Школа дизайна, моды и искусства НИУ ВШЭ. Лидер рейтинга Forbes по репутации у работодателей.', image: '/Frame 845213910.png' },
    { title: 'Энерготэк', tags: ['3D', 'AR-приложение'], desc: 'Разработчик и производитель систем для прокладки и защиты кабельных линий.', image: '/Frame 845213909.png' },
    { title: 'Киноуроки', tags: ['Мерч', 'Презентация'], desc: 'Культурно-образовательный проект, который знакомит школьников с 99 важными человеческими качествами  и помогает развивать их на практике.', image: '/Frame 845213911.png' },
    { title: 'H-ONE', tags: ['Брендбук', 'Логотип', 'Сайт'], desc: 'Комплексное производство мерча  и промопродукции — от разработки концепции до передачи готового тиража клиенту.', image: '/Frame 845213908.png' },
  ]

  return (
    <section className="mt-25">
      <div className="container ">
        {PROJECT.map((project) => (
          <div key={project.title} className="flex items-center gap-16 border-b border-[#E1E1E1] py-8">
            <div key={project.title} className="">
              <h1 className="font-semibold text-[50px]">{project.title}</h1>
              <div className="flex gap-2 mt-[173px]">
                {project.tags.map((tag) => (
                  <span className="border border-[#B5B5B5] py-1.5 px-4 text-[#9E9E9E] rounded-lg " key={tag}>{tag}</span>

                ))}
              </div>
              <p className="text-[18px] text-black mt-4 max-w-[720px]">{project.desc}</p>
            </div>
            <Image
              src={project.image}
              alt={project.title}
              width={880}
              height={371}
              className="ml-auto"
            />
          </div>
        ))}
      </div>
      <ProlectLink />
    </section>
  )
}