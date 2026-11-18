import { getPageSlug } from "@/utils/actions/getDataAction";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const submenu = await getPageSlug(slug);

  if (!submenu) {
    notFound();
  }

  return (
    <main>
      <h1>{submenu.title}</h1>
    </main>
  );
}
