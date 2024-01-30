"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useCart from "@/stores/cart.store";
import CartModal from "./CartModal";

export const Navbar = () => {
  const pathname = usePathname();
  const cartItems = useCart((state?: any) => state.cart);
  const openModal = useCart((state?: any) => state.openModal);
  const handleOpenModal = useCart((state?: any) => state.setOpenModal);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isHomepage = pathname === "/";

  return (
    <>
      {openModal && <CartModal />}

      <nav
        className={`fixed top-0 z-30 flex w-full items-center justify-between p-4 transition-all duration-200 ease-in-out md:px-16 ${
          isScrolled ? (isHomepage ? "bg-white invert-0" : "bg-white") : isHomepage ? "invert" : ""
        }`}
      >
        <Link href="/" className="mr-2 text-lg font-semibold uppercase">
          Emporium
        </Link>

        {isMobile ? (
          <div className="group mr-auto flex cursor-pointer flex-col space-y-[3px]">
            <span className="block h-[2px] w-6 rounded bg-black transition-all group-hover:w-4"></span>
            <span className="block h-[2px] w-4 rounded bg-black transition-all group-hover:w-6"></span>
            <span className="block h-[2px] w-3 rounded bg-black transition-all group-hover:w-4"></span>
          </div>
        ) : (
          <ul className="navTheme-ul flex gap-4">
            {[
              ["Home", "/"],
              ["Products", "/#products"],
              ["Contact", "/#contact"],
            ].map(([title, url]) => (
              <Link key={title} href={url} className="px-2 opacity-70 hover:opacity-100">
                {title}
              </Link>
            ))}
          </ul>
        )}

        {isMobile ? (
          <button className="flex" onClick={handleOpenModal}>
            <img src="/cart.svg" />
            {cartItems.length > 0 && (
              <span className="h-6 w-6 rounded-full bg-black text-white">{cartItems.length}</span>
            )}
          </button>
        ) : (
          <div className="flex items-center gap-6">
            <img src="/search.svg" />
            <Link href="/account">
              <img src="/user.svg" />
            </Link>
            <button onClick={handleOpenModal} className="flex items-center gap-1">
              <img src="/cart.svg" />
              {cartItems.length > 0 && (
                <span className="h-6 w-6 rounded-full bg-black text-white">{cartItems.length}</span>
              )}
            </button>
          </div>
        )}
      </nav>
    </>
  );
};
