import Icons from "@components/ui/icons/Icons";
import ResumeVersionsMenu from "@components/widgets/resume-version/menu/ResumeVersionsMenu";
import React, { useEffect, useRef, useState } from "react";

const ViewResumeVersionsManager: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Efecto para cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full  text-accent-900 dark:text-accent-300  transition-all duration-300 transform hover:scale-105"
        aria-label="Menú de versiones del currículum"
      >
        {isOpen ? <Icons.Cross /> : <Icons.Menu />}
      </button>

      <div
        className={`absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform origin-top-right z-50 ${isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
      >
        <ResumeVersionsMenu />
      </div>
    </div>
  );
};

export default ViewResumeVersionsManager;