"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useCart from "@/stores/cart.store";
import CartModal from "./Cart/CartModal";
import { MobileMenu } from "@/components";

export const Navbar = () => {
  const pathname = usePathname();
  const cartItems = useCart((state?: any) => state.cart);
  const openModal = useCart((state?: any) => state.openModal);
  const handleOpenModal = useCart((state?: any) => state.setOpenModal);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

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

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const isHomepage = pathname === "/";
  const totalQuantity = cartItems.reduce(
    (acc: number, item: any) => acc + item.quantity,
    0
  );

  return (
    <>
      {openModal && <CartModal />}
      {openMenu && <MobileMenu handleClose={handleOpenMenu} />}
      <nav
        className={`fixed top-0 z-30 flex w-full items-center justify-between p-4 transition-all duration-200 ease-in-out md:px-16 ${
          isScrolled
            ? isHomepage
              ? "bg-white invert-0"
              : "bg-white"
            : isHomepage
              ? "hidden"
              : ""
        }`}>
        <Link href="/" className="text-lg font-semibold uppercase">
          Emporium
        </Link>

        {isMobile ? (
          <button
            onClick={handleOpenMenu}
            className="group ml-2 mr-auto flex cursor-pointer flex-col space-y-[3px]">
            <span className="block h-[2px] w-6 rounded bg-black transition-all group-hover:w-4"></span>
            <span className="block h-[2px] w-4 rounded bg-black transition-all group-hover:w-6"></span>
            <span className="block h-[2px] w-3 rounded bg-black transition-all group-hover:w-4"></span>
          </button>
        ) : (
          <ul className="navTheme-ul flex gap-4 px-6 text-sm tracking-wide">
            {[
              ["Home", "/"],
              ["Products", "/#products"],
              ["Contact", "/#contact"],
            ].map(([title, url]) => (
              <Link key={title} href={url} className="px-2 hover:opacity-75">
                {title}
              </Link>
            ))}
          </ul>
        )}

        <div className="flex items-center gap-6">
          <img src="/user.svg" className="hidden md:block" />
          <button onClick={handleOpenModal} className="flex items-center gap-1">
            <img src="/cart.svg" />
            {totalQuantity ?? (
              <span className="ml-1 text-sm">{totalQuantity}</span>
            )}
          </button>
        </div>
      </nav>
    </>
  );
};
