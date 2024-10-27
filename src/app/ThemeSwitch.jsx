"use client";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

function SwitchMode() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const imgSrc = "/Icon Shape.svg";

  return (
    <div>
      {/* <Switch
        isSelected={theme === "dark"}
        onValueChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      /> */}

      <button
        className="flex"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {/* <Image
          src={theme === "dark" ? imgSrc : "/Eco sys.svg"}
          width={30}
          height={30}
        /> */}

        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-moon size-8 cursor-pointer"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-sun-medium size-8 cursor-pointer"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 3v1"></path>
            <path d="M12 20v1"></path>
            <path d="M3 12h1"></path>
            <path d="M20 12h1"></path>
            <path d="m18.364 5.636-.707.707"></path>
            <path d="m6.343 17.657-.707.707"></path>
            <path d="m5.636 5.636.707.707"></path>
            <path d="m17.657 17.657.707.707"></path>
          </svg>
        )}
      </button>
    </div>
  );
}

export default SwitchMode;
