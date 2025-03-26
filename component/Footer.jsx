"use client";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return pathname === "/" ? (
    <></>
  ) : (
    <footer className="fixed bottom-0 w-full bg-orange-200 text-pink-950 text-2xl font-bold text-center p-4">
      <h1>Developed by: Nilam</h1>
      <p>In final year diploma</p>
      <ul className="list-none">
        <li>DSA</li>
        <li>Full Stack</li>
        <li>Java</li>
      </ul>
    </footer>
  );
}
