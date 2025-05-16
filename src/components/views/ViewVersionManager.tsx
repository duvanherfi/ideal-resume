import Icons from "@components/ui/icons/Icons";
import VersionManagerMenu from "@components/widgets/version-manager/menu/VersionManagerMenu";
import React, { useEffect, useRef, useState } from "react";

const ViewVersionManager: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
        className="flex items-center justify-center w-10 h-10 rounded-full  text-primary-900 dark:text-primary-200 transition-all duration-300 transform hover:scale-105"
        aria-label="Menú de versiones del currículum"
      >
        {isOpen ? <Icons.Cross /> : <Icons.Menu />}
      </button>
      <VersionManagerMenu isOpen={isOpen} />
    </div>
  );
};

export default ViewVersionManager;