"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {["about", "projects", "experience", "certifications"].map((section) => (
          <li key={section}>
            <a
              className={`group flex items-center py-3 ${
                activeSection === section ? "text-white font-bold" : "text-slate-500"
              }`}
              href={`#${section}`}
            >
              <span
                className={`nav-indicator mr-4 h-px w-8 transition-all ${
                  activeSection === section ? "bg-white w-16" : "bg-slate-600"
                }`}
              ></span>
              <span className="nav-text text-xs uppercase tracking-widest group-hover:text-white">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;