import { Hero } from "./components/hero";
import { SectionServices } from "./components/section-services";
import { SectionUniqueExperiences } from "./components/section-unique-experiences";
import { SectionWhoWeAre } from "./components/section-who-we-are";


export default function Home() {
  return (
    <main>
      <Hero/>
      <SectionWhoWeAre />
      <SectionUniqueExperiences/>
      <SectionServices />
    </main>
  );
}
