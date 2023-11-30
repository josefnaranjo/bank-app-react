import React from 'react'
import { useState, useEffect } from 'react'  // Hook

import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
function Navbar() {
  const [toggle, setToggle] = useState(false)
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0 && !isNavbarFixed) {
        setIsNavbarFixed(true);
      } else if (offset === 0 && isNavbarFixed) {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isNavbarFixed]);

  return (
    <div className={`w-full flex py-6 justify-between items-center ${isNavbarFixed ? 'fixed top-0 bg-black-gradient shadow-md' : ''} z-[10]`} style={{ width: '50vw', maxWidth: '100%', padding: '15px' }}>
      <img src= {logo} alt='hoobank' className='w-[124px] h-[32px]' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1 links'>
      {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer 
          text-[16px] ${index === navLinks.length - 1 ? 
            'mr-0' : 'mr-10'} text-white hover:text-secondary`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} 
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prevState) => !prevState)}
        />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
            <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer 
              text-[16px] ${index === navLinks.length - 1 ? 
              'mr-0' : 'mb-4'} text-white`}
            >
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar