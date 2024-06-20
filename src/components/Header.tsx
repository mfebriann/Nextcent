import { Logo } from "../assets/icons";
import { useState } from "react";
import LoginAndSignup from "./LoginAndSignup";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const activeClick = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-40 bg-silver">
      <nav className="container relative flex items-center justify-between px-5 py-6 md:px-0">
        <a href="/" className="flex items-center gap-2">
          <img src={Logo} alt="logo" />
          <span className="text-3xl font-bold text-secondary">Nexcent</span>
        </a>
        <ul
          className={`fixed ${isActive ? "right-0" : "-right-full"} bottom-0 top-0 z-50 flex w-56 flex-col items-end gap-y-2 bg-silver pt-6 duration-300 ease-in sm:w-72 xl:static xl:w-auto xl:flex-row xl:gap-10 xl:bg-transparent xl:pt-0`}
        >
          <li
            className="cursor-pointer px-5 hover:opacity-40 sm:pr-7 md:pr-12 xl:hidden"
            onClick={activeClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="rgba(0,0,0,1)"
              className="ml-auto"
            >
              <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
            </svg>
          </li>
          <li className="w-full">
            <a
              href="#"
              className="duration-100ms f block px-5 py-3 text-sm font-semibold text-grey-900 ease-in hover:bg-tint5 hover:text-secondary/60 md:text-base xl:p-0 xl:hover:bg-transparent"
            >
              Home
            </a>
          </li>
          <li className="w-full">
            <a
              href="#"
              className="duration-100ms block px-5 py-3 text-sm font-medium text-grey-900 ease-in hover:bg-tint5 hover:text-secondary/60 md:text-base xl:p-0 xl:hover:bg-transparent"
            >
              Service
            </a>
          </li>
          <li className="w-full">
            <a
              href="#"
              className="duration-100ms block px-5 py-3 text-sm font-medium text-grey-900 ease-in hover:bg-tint5 hover:text-secondary/60 md:text-base xl:p-0 xl:hover:bg-transparent"
            >
              Feature
            </a>
          </li>
          <li className="w-full">
            <a
              href="#"
              className="duration-100ms f block px-5 py-3 text-sm font-medium text-grey-900 ease-in hover:bg-tint5 hover:text-secondary/60 md:text-base xl:p-0 xl:hover:bg-transparent"
            >
              Product
            </a>
          </li>
          <li className="w-full">
            <a
              href="#"
              className="duration-100ms block px-5 py-3 text-sm font-medium text-grey-900 ease-in hover:bg-tint5 hover:text-secondary/60 md:text-base xl:p-0 xl:hover:bg-transparent"
            >
              Testimonial
            </a>
          </li>
          <li className="w-full">
            <a
              href="#"
              className="duration-100ms block px-5 py-3 text-sm font-medium text-grey-900 ease-in hover:bg-tint5 hover:text-secondary/60 md:text-base xl:p-0 xl:hover:bg-transparent"
            >
              FAQ
            </a>
          </li>
          <LoginAndSignup isMobileHide={false} />
        </ul>
        <LoginAndSignup isMobileHide />
        <div
          className="relative cursor-pointer xl:hidden"
          onClick={activeClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="rgba(0,0,0,1)"
          >
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Header;
