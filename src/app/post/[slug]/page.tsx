import { Suspense } from "react";
import styles from "./styles.module.scss";
import { getPageSlug } from "@/utils/actions/getDataAction";
import { PostProps } from "@/utils/types/post.type";
import { Phone } from "lucide-react";
import { Container } from "@/components/container";
import Image from "next/image";
import { Hero } from "@/components/home/hero";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default function Page({ params }: PageProps) {
  return (
    <Suspense fallback={<div>Carregando post...</div>}>
      <PostContent params={params} />
    </Suspense>
  );
}

async function PostContent({ params }: PageProps) {
  const { slug } = await params;

  const data: PostProps = await getPageSlug(slug);
  const post = data.metadata;
  console.log(post);
  if (!post) {
    return <div>Post não encontrado.</div>;
  }

  return (
    <>
      <Hero
        heading={"imagem de hero"}
        buttonTitle={"fale mais sobre"}
        buttonUrl={post.hero.cta_button}
        bannerUrl={post.hero.banner.url}
        icon={<Phone size={24} color="#FFF" />}
      />

      <Container>
        <section className={styles.about}>
          <article className={styles.innerAbout}>
            <h1 className={styles.title}>{post.about.heading}</h1>

            <p>{post.about.description}</p>

            <a
              href={post.about.cta_button}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {post.about.cta_button}
            </a>
          </article>

          <div className={styles.bannerAbout}>
            <Image
              className={styles.imageAbout}
              alt={"imagem de about"}
              quality={100}
              fill={true}
              src={post.about.banner.url}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </section>
      </Container>
    </>
  );
}
