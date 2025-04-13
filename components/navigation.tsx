"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../app/styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={path === "/" ? styles.active : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={path === "/about-us" ? styles.active : ""}>
          <Link href="/about-us">About Us</Link>{" "}
        </li>
      </ul>
    </nav>
  );
}
