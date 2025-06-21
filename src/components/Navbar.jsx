import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo, menu, close, gd_resume } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleLogoClick = () => {
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Trigger download
    const link = document.createElement("a");
    link.href = gd_resume;
    link.download = gd_resume.split("/").pop(); // fallback filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav>
      <div className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="logo"
              className="w-9 h-9 object-contain cursor-pointer"
              onClick={handleLogoClick}
            />
            <Link
              to="/"
              className="text-white text-[18px] font-bold cursor-pointer flex"
              onClick={() => setActive("")}
            >
              Gautam Dua &nbsp;
              <span className="sm:block hidden">| Software Developer</span>
            </Link>
          </div>

          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${active === nav.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />

            <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
              <ul className="list-none flex justify-start items-start flex-1 flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setActive(nav.title);
                      setToggle(false);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </nav>
  );
}
