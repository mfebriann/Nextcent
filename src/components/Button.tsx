import React from "react";

const Button: React.FC<{ text: string; isHaveArrow?: boolean }> = ({
  text,
  isHaveArrow,
}) => {
  return (
    <a
      href="#"
      className="mt-8 flex w-max items-center gap-2 rounded-md bg-primary px-8 py-3 font-medium text-white hover:bg-shade2"
    >
      {text}
      {isHaveArrow && (
        <svg
          width="17"
          height="11"
          viewBox="0 0 17 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-1"
        >
          <path
            d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}
    </a>
  );
};

export default Button;
