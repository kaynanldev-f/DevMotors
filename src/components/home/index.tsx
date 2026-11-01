import styles from "./styles.module.scss";
import Image from "next/image";
interface HeroProps {
  heading: string;
  cta: string;
  url: string;
  banner: string;
  icon?: React.ReactNode;
}

export default function Hero({ heading, cta, url, banner, icon }: HeroProps) {
  return (
    <main className={styles.main}>
      <div className={styles.containerHero}>
        <h1 className={styles.title}>{heading}</h1>

        <a target="_blank" href={url} className={styles.link}>
          {icon}
          {cta}
        </a>
      </div>

      <div className={styles.contentBanner}>
        <Image
          className={styles.banner}
          alt={heading}
          src={banner}
          priority={true}
          quality={100}
          fill={true}
        />
      </div>
    </main>
  );
}
