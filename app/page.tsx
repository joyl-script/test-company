import Footer from "@/widgets/footer/ui/footer";
import Header from "@/widgets/header/ui/header";
import Hero from "@/widgets/hero/ui/hero";
import LogosStrip from "@/widgets/logosStrip/ui/logosStrip";
import Project from "@/widgets/projects/ui/project";



export default function Home() {
  return (
    <div >
      <Header />
      <Hero />
      <LogosStrip />
      <Project />
      <Footer />
    </div>
  );
}
