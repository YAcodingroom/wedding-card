import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  function handleToggleNavbar() {
    setIsOpen((isOpen) => !isOpen);
  }

  function handleLinkClick() {
    console.log("click");
    if (!isLargeScreen) {
      setIsOpen(false);
    }
  }

  const handleResize = useCallback(() => {
    setIsLargeScreen(window.innerWidth >= 768);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <header className="sticky left-0 top-0 z-50 w-full border-stone-900 bg-white text-base lg:text-xl">
      <nav className="flex items-center justify-between px-4 py-3 shadow-sm shadow-stone-300 md:px-6 md:py-4">
        <a
          className="block font-semibold tracking-widest md:mr-auto"
          href="#main"
        >
          Ivy & Johnny
        </a>
        <Button
          className={`md:hidden ${isOpen ? "hidden" : ""}`}
          onClick={handleToggleNavbar}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <div
          className={`fixed right-0 top-0 h-full w-56 bg-[rgba(255,212,191,0.5)] py-3 text-stone-700 backdrop-blur-[2px] transition-transform duration-300 ease-in-out ${
            isOpen ? "-translate-x-0" : "translate-x-full"
          } right-0 top-0 md:static md:flex md:w-auto md:transform-none md:space-x-4 md:bg-transparent md:py-0 md:text-stone-700`}
        >
          <Button
            className="mx-4 ml-auto block text-stone-700 md:hidden"
            onClick={handleToggleNavbar}
          >
            <FontAwesomeIcon icon={faXmark} />
          </Button>

          <a
            href="#home"
            onClick={handleLinkClick}
            className="my-4 block px-4 font-medium tracking-widest md:my-0 md:px-2"
          >
            <span className="md:block">Home</span>
            <span className="md:block">首頁</span>
          </a>

          <a
            href="#story"
            onClick={handleLinkClick}
            className="my-4 block px-4 font-medium tracking-widest md:my-0 md:px-2"
          >
            <span className="md:block">Our Story</span>
            <span className="md:block">關於幸福</span>
          </a>

          <a
            href="#gallery"
            onClick={handleLinkClick}
            className="my-4 block px-4 font-medium tracking-widest md:my-0 md:px-2"
          >
            <span className="md:block">Gallery</span>
            <span className="md:block">婚紗照</span>
          </a>

          <a
            href="#infomation"
            onClick={handleLinkClick}
            className="my-4 block px-4 font-medium tracking-widest md:my-0 md:px-2"
          >
            <span className="md:block">Info</span>
            <span className="md:block">婚禮地點</span>
          </a>

          <a
            href="#rsvp"
            onClick={handleLinkClick}
            className="my-4 block px-4 font-medium tracking-widest md:my-0 md:px-2"
          >
            <span className="md:block">RSVP</span>
            <span className="md:block">回覆我們</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
