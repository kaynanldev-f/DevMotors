"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

import { X, Menu } from "lucide-react";
import { submenuTypes } from "@/utils/types/submenuType";

interface SubmenuProps {
  menu: submenuTypes["objects"];
}
export function Submenu({ menu }: SubmenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(menu);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <section className={styles.submenu}>
      <div className={styles.submenuIcon} onClick={toggleMenu}>
        <Menu size={32} color="#121212" />
        Menu
      </div>

      <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>
        {isOpen && (
          <button onClick={toggleMenu} className={styles.closeButton}>
            <X size={32} color="#121212" />
          </button>
        )}

        {menu.map((item) => (
          <li key={item.slug}>
            <Link href={`post/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
