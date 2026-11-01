import { Submenu } from "@/components/header/submenu";
import Hero from "@/components/home";
import { getData } from "@/utils/actions/getDataAction";
import { homeTypes } from "@/utils/types/homeType";
import { Phone } from "lucide-react";
export default async function Home() {
  const { object }: homeTypes = await getData();

  if (!object) return <div>Loading...</div>;
  return (
    <div>
      <main>
        <Submenu />
        <Hero
          heading={object.metadata.hero.heading}
          cta={object.metadata.hero.cta}
          url={object.metadata.hero.url}
          banner={object.metadata.hero.banner.imgix_url}
          icon={<Phone size={24} color="#fff" />}
        />
      </main>
    </div>
  );
}
