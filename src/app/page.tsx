import Hero from "@/components/hero/Hero";
import Core from "@/components/core/Core";
import CoreItems from "@/components/coreItems/CoreItems";
import Services from "@/components/services/Services";
import Team from "@/components/team/Team";
import Innovation from "@/components/innovation/Innovation";

export default function Home() {
  return (
    <>
        <Hero />
        <Core />
        <CoreItems />
        <Services />
        <Team />
        <Innovation />
    </>
  );
}
