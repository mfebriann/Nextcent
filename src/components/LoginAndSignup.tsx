import React from "react";

interface LoginAndSignupProps {
  isMobileHide: true | false;
}

const LoginAndSignup: React.FC<LoginAndSignupProps> = ({ isMobileHide }) => {
  return (
    <ul
      className={`gap-8 ${isMobileHide ? "hidden xl:flex" : "mt-5 flex w-full flex-col border-t border-secondary/20 px-5 pt-5 xl:hidden"}`}
    >
      <li>
        <a
          href="#"
          className="text-sm font-medium text-primary hover:text-shade2 md:text-base"
        >
          Login
        </a>
      </li>
      <li>
        <a
          href="#"
          className="rounded-md bg-primary px-5 py-3 text-white hover:bg-shade2"
        >
          Sign up
        </a>
      </li>
    </ul>
  );
};

export default LoginAndSignup;
