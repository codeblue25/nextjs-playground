"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  console.log(path);

  const newLocal = "";
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "✅" : ""}
        </li>
        <li>
          <Link href="/supervise">Supervise</Link>{" "}
          {path === "/supervise" ? "✅" : ""}
        </li>
      </ul>
    </nav>
  );
}