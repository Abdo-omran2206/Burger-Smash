"use client";
import Burger from './combonnent/Burger';
import { motion } from "motion/react";
import About from './combonnent/About';
import Menu from "./combonnent/Menu";
import CTA from './combonnent/cta';
import Contact from './combonnent/contact';
import Footer from './combonnent/footer';
import { useEffect, useState } from "react";
export default function Home() {
  return (
    <>
      <header className="w-screen flex justify-center items-center mt-5 fixed">
        <Navbar/>
      </header>
      <main className="w-screen h-screen overflow-x-hidden bg-black">
        <section id='home' className="bg-[url(/360_F_416281579_t45mfWPWBlgGi9QV2KmqVem5aJfgXN9G.jpg)] bg-no-repeat bg-cover bg-center w-full h-full">
          <Burger/>
        </section>
        <section id='about' className="w-full h-full flex justify-center items-center max-sm:h-auto">
          <About/>
        </section>
        <section id='menu' className="w-full min-h-screen flex justify-center p-20 max-sm:p-3">
          <Menu/>
        </section>
        <section className="w-full h-full flex justify-center items-center">
          <CTA/>
        </section>
        <section id='contact' className='w-full h-auto'>
          <Contact/>
        </section>
        <footer id='footer' className='w-full h-auto'>
          <Footer/>
        </footer>
      </main>
    </>
  );
}

function Navbar() {
  const [active, setActive] = useState("home");

  // Sections you have on the page
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navItems = ["home", "about", "menu", "contact"];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-10% 0px -70% 0px", // trigger earlier
      threshold: 0.1, // even a little visibility counts
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, options);

    navItems.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      navItems.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, [navItems]);

  const item =
    "relative overflow-hidden transition-all duration-300 ease-in-out p-3 m-1 cursor-pointer before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-[#E69E0A] before:transition-all before:duration-300 before:ease-in-out hover:before:w-full max-sm:px-2";

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 px-5 bg-transparent backdrop-blur-lg rounded-3xl shadow-[1px_1px_20px_-4px_rgba(230,158,10,0.5)] border border-gray-700 z-50 max-sm:px-3"
    >
      <ul className="flex flex-row gap-6 md:gap-10 text-white font-medium text-center max-sm:text-sm max-sm:gap-3">
        {navItems.map((nav, i) => (
          <motion.li
            key={i}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick(nav)}
            className={`${item} ${
              active === nav ? "text-[#E69E0A] before:w-full" : "text-white"
            }`}
          >
            {nav.charAt(0).toUpperCase() + nav.slice(1)}
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
