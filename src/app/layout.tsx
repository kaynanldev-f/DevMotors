import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/header";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Motor",
  description:
    "A Dev Motores é uma empresa dedicada a proporcionar aos seus clientes uma experiência automotiva excepcional, baseada em décadas de experiência, sólida credibilidade e um compromisso inabalável com a qualidade. Especializada em produtos e serviços automotivos, a Dev Motores oferece uma ampla gama de soluções projetadas para atender às necessidades de veículos de todos os tipos.",
  keywords: [
    "dev motor",
    "oficina de carros",
    "mecânica",
    "carros",
    "oficina mecânica",
  ],
  openGraph: {
    title: "Dev Motor",
    images: [`${process.env.NEXT_PUBLIC_API_URL}/logo.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-br" className={`${sora.variable} `}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
