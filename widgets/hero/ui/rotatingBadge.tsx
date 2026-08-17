"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

type Props = {
  size?: number;
  variant?: "filled" | "outline" | "light";
};

export default function RotatingBadge({ size = 216, variant = "filled" }: Props) {
  const circleRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = circleRef.current;
    if (!el) return;

    const tween = gsap.to(el, {
      rotation: 360,
      duration: 14,
      repeat: -1,
      ease: "none",
      transformOrigin: "50% 50%",
    });

    return () => {
      tween.kill();
    };
  }, []);

  const wrapperClass =
    variant === "outline"
      ? "border border-white"
      : variant === "light"
        ? "border border-[#0181C8] bg-white"
        : "bg-[#0181C8]";

  const textColor = variant === "light" ? "#0181C8" : "#fff";

  return (
    <div>
      <a
        href=""
        className={`relative flex ml-auto mr-[120px] items-center justify-center rounded-full ${wrapperClass}`}
        style={{ height: size, width: size }}
      >
        <svg ref={circleRef} viewBox="0 0 216 216" className="absolute inset-0 p-4">
          <defs>
            <path id="badge-circle-path" d="M 108,108 m -84,0 a 84,84 0 1,1 168,0 a 84,84 0 1,1 -168,0" />
          </defs>
          <text fontSize="28" fontWeight="400" letterSpacing="8" fill={textColor}>
            <textPath href="#badge-circle-path" startOffset="0%">
              ПРЕЗЕНТАЦИЯ ПРЕЗЕНТАЦИЯ &nbsp;
            </textPath>
          </text>
        </svg>

        <div className="relative">
          {variant === "light" ? (
            <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px] text-[#0181C8] rounded-2xl ">
              <path
                d="M6 18L18 6M18 6H9M18 6V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"

              />
            </svg>
          ) : (
            <Image
              src="/Group 845213540.svg"
              alt=""
              width={37}
              height={37}
            />
          )}
        </div>
      </a>

    </div>
  )
}

