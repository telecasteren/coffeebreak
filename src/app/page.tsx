"use client";

import CoffeeMug from "@/components/icons/fontawesome-icons";
import Header from "@/components/layout/Header";

export default function Landing() {
  return (
    <main>
      <Header />

      <a href="#" className="start-link">
        Start brewing <CoffeeMug />
      </a>
    </main>
  );
}
