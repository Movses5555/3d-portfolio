import React, { useEffect, useState} from "react";
import { Link } from 'react-router-dom';

import { styles } from "../styles";
import { navLinks} from '../constants';
import { logo, logoNoBackground, menu, close } from '../assets';

const Navbar = () => {
  console.log(navLinks);
  const [active, setActive] = useState('')
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to='/'
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.screenTop(0, 0);
          }}
        >
          <img
            src={logoNoBackground}
            alt="logo"
            className="w-[40px] h-[40px]"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Movses <span className="sm:block hidden">| FullStack Engineer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {
            navLinks?.map((link) => {
              return (
                <li>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;