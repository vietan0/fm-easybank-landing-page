import { useEffect, useRef, useState } from "react";
import { XMarkIcon, Bars4Icon } from "@heroicons/react/24/solid";
import logo from "./assets/images/logo.svg";
import CTAButton from "./CTAButton";
type Props = {};

const navs = ["Home", "About", "Contact", "Blog", "Careers"];

export default function Header({}: Props) {
  const [navIsOpen, setNavIsOpen] = useState(false);
  function toggleNavIsOpen(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation(); // stop triggering closeNavWhenClickOutside (which attached to document)
    setNavIsOpen((prev) => !prev);
  }

  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function resetNavIsOpen() {
      if (window.innerWidth >= 768) setNavIsOpen(false);
    }
    window.addEventListener("resize", resetNavIsOpen);

    return () => window.removeEventListener("resize", resetNavIsOpen);
  }, []);

  useEffect(() => {
    function closeNavWhenClickOutside(e: MouseEvent) {
      if (navIsOpen && !navRef.current!.contains(e.target as Node)) {
        setNavIsOpen(false);
      }
    }
    document.addEventListener("click", closeNavWhenClickOutside);

    return () =>
      document.removeEventListener("click", closeNavWhenClickOutside);
  }, [navIsOpen]);

  return (
    <header className="sticky top-0 z-10 overflow-visible bg-white px-4 xs:px-10 lg:px-20">
      <div className="wrapper flex h-16 justify-between lg:h-20">
        <a href="/" className="self-center">
          <img src={logo} alt="logo" className="min-w-[139px] max-w-[139px]" />
        </a>
        <button
          className="self-center rounded-md p-3 hover:bg-black/10 md:hidden"
          onClick={toggleNavIsOpen}
        >
          {navIsOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars4Icon className="h-6 w-6" />
          )}
        </button>
        <nav
          ref={navRef}
          className={`${navIsOpen ? "translate-x-0" : "translate-x-[500px]"} fixed right-4 top-20 z-10 flex h-fit w-[calc(100%_-_32px)] flex-col overflow-hidden rounded-lg bg-white shadow-2xl outline outline-2 outline-slate-300 duration-150 ease-out xs:right-12 xs:w-52 md:static md:h-auto md:w-full md:translate-x-0 md:flex-row md:justify-end md:gap-16 md:p-0 md:shadow-none md:outline-none`}
        >
          <ul className="flex h-full flex-col gap-0 py-3 md:flex-row md:py-0">
            {navs.map((text) => (
              <li key={text}>
                <a
                  className="grid h-full place-content-center px-3 py-4 text-grey-blue hover:bg-slate-100 md:py-0 lg:px-4"
                  href="#"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
          <CTAButton className="hidden self-center md:block">
            Request Invite
          </CTAButton>
        </nav>
      </div>
    </header>
  );
}
