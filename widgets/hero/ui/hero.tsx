import HeadLine from "./headLine";
import RotatingBadge from "./rotatingBadge";

export default function Hero() {
  return (
    <section style={{ backgroundImage: "url('/test-company/Group 845213655.png')" }} className=" py-24 ">
      <div className="container grid gap-61 lg:gap-87">
        <HeadLine />
        <RotatingBadge />
      </div>
    </section>
  )
}