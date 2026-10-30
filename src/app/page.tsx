import { Submenu } from "@/components/home/submenu";
import { getData } from "@/utils/actions/getDataAction";
import { homeTypes } from "@/utils/types/homeType";
export default async function Home() {
  const { object }: homeTypes = await getData();
  console.log(object);
  if (!object) return;
  return (
    <div>
      <main>
        <Submenu />
      </main>
    </div>
  );
}
