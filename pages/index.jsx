import Blogs from "@/components/shared/Blogs";
import Clients from "@/components/shared/Clients";
import Contact from "@/components/shared/Contact";
import Cta from "@/components/shared/Cta";
import Faq from "@/components/shared/Faq";
import Feat from "@/components/shared/Feat";
import Hero from "@/components/shared/Hero";
import Points from "@/components/shared/Points";
import Pricing from "@/components/shared/Pricing";
import Testimonials from "@/components/shared/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <Clients /> */}
      {/* <Points /> */}
      <Feat />
      <Pricing />
      <Testimonials />
      {/* <Contact /> */}
      {/* <Faq /> */}
      {/* <Cta /> */}
      {/* <Blogs /> */}
    </div>
  )
}
