import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border absolute w-[92%] top-5 left-[4%]  border-[#263665] px-5 py-3 rounded-full bg-[#0311398f]">
      <nav>
        <ul className="flex text-white justify-between ">
          <Link>
            <li className="font-bold text-3xl">Flyo</li>
          </Link>
          <div className="box-center gap-10">
            <Link>
              <li>Support</li>
            </Link>
            <Link>
              <li>Login</li>
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
