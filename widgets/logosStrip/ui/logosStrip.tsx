import Image from "next/image"

export default function LogosStrip() {

  const LOGOS = [
    { name: "СУПЕР Моторика", src: "/test-company/Group 845212642 (1).svg" },
    { name: "MIUZ Diamonds", src: "/test-company/Group 845213455 (1).svg" },
    { name: "Тинькофф", src: "/test-company/ece38c8f-4d3b-4b22-a7ee-05449e43c2c5 1.svg" },
    { name: "Tomi.ai", src: "/test-company/tomiai-page-logo.svg.svg" },
    { name: "Энерготэк", src: "/test-company/energotekAR-page-logo.svg (1).svg" },
    { name: "Генезис Проект", src: "/test-company/genezisproject-page-logo.svg.svg" },
    { name: "Polar Bear", src: "/test-company/polarbear-page-logo.svg.svg" },
    { name: "Ukigassen", src: "/test-company/ukigassen-page-logo.svg.svg" },
  ];

  return (
    <section className="border-b border-[#E0E0E0] overflow-hidden">
      <div className="group flex w-max animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
        {[...LOGOS, ...LOGOS].map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex shrink-0 items-center justify-center border-l border-[#E0E0E0] p-11 md:p-13.5"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={118}
              height={47}
              className="grayscale md:w-[150px] md:h-[60px]"
            />
          </div>
        ))}
      </div>
    </section>
  )
}