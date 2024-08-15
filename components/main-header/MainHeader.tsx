'use client';
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentPath = usePathname();

  const isActive = (path: string) => {
    return currentPath.includes(path) ? " border border-white" : "";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="bg-mantle border-b-2 border-mantle p-4 fixed top-0 left-0 w-full z-50">
        <div className="flex items-center justify-center">
          <Link href="/" className="text-blue text-2xl p-3" onClick={closeMenu}>
            BILLY
          </Link>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`burger-menu text-white hover:text-gray-400 p-2 border border-white rounded ${isMenuOpen ? "open" : ""}`}
            >
              ☰
            </button>
          </div>
          <ul className="hidden md:flex justify-center space-x-4">
            <li>
              <Link
                href="/projects"
                className={`text-peach text-xl hover:text-gray-400 p-3${isActive("/projects")}`}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`text-green text-xl hover:text-gray-400 p-3${isActive("/blog")}`}
              >
                BLOG
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`text-red text-xl hover:text-gray-400 p-3${isActive("/about")}`}
              >
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <Link
                  href="/projects"
                  className={`text-white text-xl hover:text-gray-400 p-3${isActive("/projects")}`}
                  onClick={closeMenu}
                >
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={`text-white text-xl hover:text-gray-400 p-3${isActive("/blog")}`}
                  onClick={closeMenu}
                >
                  BLOG
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`text-white text-xl hover:text-gray-400 p-3${isActive("/about")}`}
                  onClick={closeMenu}
                >
                  ABOUT
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
