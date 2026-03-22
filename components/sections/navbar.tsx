"use client";

import { MenuIcon, PhoneCall, XIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
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
import { cn } from "@/lib/utils";
import Image from "next/image";

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
      <div
        className="fixed top-4 right-4 z-50 rounded-full md:rounded-none"
        ref={navRef}
      >
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          {/* ── Trigger button ─────────────────────────────────────── */}
          <SheetTrigger>
            <div
              id="mobile-nav"
              className="h-10 w-10 bg-white/20 backdrop-blur-sm rounded-full flex justify-center items-center"
            >
              <MenuIcon stroke="#d4d4d4" size={20} />
            </div>
          </SheetTrigger>

          {/* ── Drawer ─────────────────────────────────────────────── */}
          <SheetContent
            side="right"
            className={cn(
              "w-full sm:w-96 flex flex-col p-0 gap-0 border-0",
              "bg-black/40",
              "backdrop-blur-2xl",
            )}
            showCloseButton={false}
          >
            {/* Header */}
            <SheetHeader className="px-6 pt-8 pb-5 relative">
              {/* Logo / brand row */}
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-white flex items-center justify-center shadow-md shrink-0">
                  <span className="text-white font-extrabold text-sm tracking-tight">
                    <Image
                      src="/images/favicon.ico"
                      alt=""
                      // fill
                      width={32}
                      height={32}
                      // className="w-7! h-7!"
                    />
                  </span>
                </div>
                <div>
                  <SheetTitle className="text-xl font-extrabold tracking-tight text-white leading-none">
                    Care 32 Dental
                  </SheetTitle>
                  <p className="text-xs font-medium uppercase tracking-widest text-teal-500 mt-0.5">
                    Committed to your oral health
                  </p>
                </div>
              </div>
              <SheetClose className="absolute right-4">
                <XIcon className="text-white" size={20} />
              </SheetClose>
            </SheetHeader>

            {/* Divider */}
            <div className="mx-6">
              <Separator className="bg-black/10 dark:bg-white/10" />
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-3 py-4 overflow-y-auto">
              <ul className="flex flex-col gap-1">
                {NAV_MENUS.map((nav, index) => (
                  <li key={nav.id}>
                    <Link
                      href={nav.link}
                      onClick={(e) => {
                        e.preventDefault();
                        const smoother = ScrollSmoother.get();
                        smoother?.scrollTo(nav.link, true, "top top");
                        setSheetOpen(false);
                      }}
                      className={cn(
                        "group relative flex items-center justify-between",
                        "rounded-xl px-4 py-3.5",
                        "text-sm font-semibold text-slate-700 dark:text-neutral-200",
                        "hover:bg-white/50 dark:hover:bg-white/10",
                        "active:scale-[0.98]",
                        "transition-all duration-200",
                      )}
                      style={{ animationDelay: `${index * 40}ms` }}
                    >
                      {/* Index number */}
                      <span className="mr-3 text-[10px] font-bold tabular-nums text-teal-400/70 w-4 shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="flex-1 text-white">{nav.name}</span>

                      {/* Arrow */}
                      <span
                        className={cn(
                          "text-primary text-base leading-none",
                          "opacity-0 -translate-x-1",
                          "group-hover:opacity-100 group-hover:translate-x-0",
                          "transition-all duration-200",
                        )}
                      >
                        →
                      </span>

                      {/* Hover background pill */}
                      <span className="absolute left-0 right-0 top-0 bottom-0 rounded-xl bg-teal-400/0 group-hover:bg-teal-400/5 transition-colors duration-200 -z-10" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <div className="mx-6 mb-1">
              <Separator className="bg-black/10 dark:bg-white/10" />
            </div>
            <div className="px-6 py-5 flex items-center justify-between">
              <p className="text-xs text-slate-400 dark:text-neutral-500">
                Tue – Sun &nbsp;·&nbsp; 9:00 AM – 7:00 PM
              </p>
              <a
                href="tel:9813510103"
                className={cn(
                  "flex items-center gap-1.5 rounded-full",
                  "bg-primary/10 hover:bg-primary/20",
                  "px-3 py-1.5 transition-colors",
                  "text-xs font-semibold text-primary",
                )}
              >
                <PhoneCall size={11} strokeWidth={2.5} />
                Call Us
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    );
  }
  return (
    <div className="fixed top-0 left-0 w-full z-50">
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
