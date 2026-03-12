"use client";

import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import { NAV_MENUS } from "@/lib/constant";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { ScrollSmoother } from "gsap/all";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

export default function Navbar() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "767px" });
  const navRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!navRef.current) return;

      ScrollTrigger.create({
        start: "top -80",
        onUpdate: (self) => {
          if (self.scroll() > 80) {
            gsap.to(navRef.current, {
              backgroundColor: "#00000080",
              backdropFilter: "blur(20px)",
              duration: 0.3,
              overwrite: "auto",
            });
          } else {
            gsap.to(navRef.current, {
              backgroundColor: "transparent",
              backdropFilter: "blur(0px)",
              duration: 0.3,
              overwrite: "auto",
            });
          }
        },
      });
    },
    { scope: navRef },
  );

  if (isMobile) {
    return (
      <div className="fixed top-4 right-4 z-50 rounded-full" ref={navRef}>
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger>
            <div
              id="mobile-nav"
              className="h-10 w-10 bg-white/20 backdrop-blur-sm rounded-full flex justify-center items-center"
            >
              <MenuIcon stroke="#d4d4d4" size={20} />
            </div>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="
    w-full sm:w-100
    bg-white/30 dark:bg-neutral-900/70
    backdrop-blur-2xl
    border-l border-white/20 dark:border-white/10
    text-neutral-900 dark:text-white
    flex flex-col
  "
          >
            {/* Header */}
            <SheetHeader>
              <SheetTitle className="text-2xl font-extrabold tracking-tight text-primary">
                Care 32 Dental
              </SheetTitle>
              <p className="text-sm text-neutral-300 dark:text-neutral-300">
                Committed to your oral health
              </p>
            </SheetHeader>

            <div className="mx-4">
              <Separator className="bg-black/20" />
            </div>

            <nav className="flex-1">
              <ul className="space-y-0">
                {NAV_MENUS.map((nav) => (
                  <li key={nav.id} className="text-neutral-200">
                    <Link
                      href={nav.link}
                      onClick={(e) => {
                        e.preventDefault();
                        const smoother = ScrollSmoother.get();
                        smoother?.scrollTo(nav.link, true, "top top");
                        setSheetOpen(false);
                      }}
                      className="
              group flex items-center justify-between
              rounded-xl px-4 py-3
              text-base font-medium
              hover:bg-white/40 dark:hover:bg-white/10
              active:scale-[0.98]
              transition
            "
                    >
                      <span>{nav.name}</span>

                      {/* subtle arrow */}
                      <span
                        className="
                opacity-0 translate-x-2
                group-hover:opacity-100 group-hover:translate-x-0
                transition text-primary
              "
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50 hidden xl:block">
      <div
        id="nav"
        ref={navRef}
        className="mx-auto w-full px-10 py-4 flex items-center justify-between"
      >
        <div className="text-xl font-bold text-white">
          <Link href={"/"}>Care 32 Dental</Link>
        </div>

        <nav className="space-x-6 hidden md:flex items-center">
          {NAV_MENUS.map((nav, idx) => (
            <Link
              key={nav.id}
              href={nav.link}
              onClick={(e) => {
                e.preventDefault();

                const smoother = ScrollSmoother.get();
                smoother?.scrollTo(nav.link, true, "-8% top");
              }}
              className="text-white hover:text-primary transition"
            >
              {idx === NAV_MENUS.length - 1 ? (
                <Button className="cursor-pointer">{nav.name}</Button>
              ) : (
                nav.name
              )}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
