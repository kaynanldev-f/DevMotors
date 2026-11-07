import { Submenu } from "@/components/home/submenu";
import { getData } from "@/utils/actions/getDataAction";
import { homeTypes } from "@/utils/types/homeType";
import { Hero } from "@/components/home/hero";
import { Phone } from "lucide-react";
import { Services } from "@/components/home/services";
import { Container } from "@/components/container";
import { Footer } from "@/components/home/footer";

export default async function Home() {
  const { object }: homeTypes = await getData();
  console.log(object);

  return (
    <main>
      <Submenu />

      <Hero
        heading={object.metadata.hero.heading}
        buttonTitle={object.metadata.hero.cta}
        buttonUrl={object.metadata.hero.url}
        bannerUrl={object.metadata.hero.banner.url}
        icon={<Phone size={24} color="#FFF" />}
      />

      <Container>
        <Services object={object} />
        <Footer object={object} />
      </Container>
    </main>
  );
}
