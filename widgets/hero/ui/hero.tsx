import HeadLine from "./headLine";
import RotatingBadge from "./rotatingBadge";

export default function Hero() {
  return (
    <section style={{ backgroundImage: "url('/Group 845213655.png')" }} className=" py-24 ">
      <div className="container grid gap-87">
        <HeadLine />
        <RotatingBadge />
      </div>
    </section>
  )
}