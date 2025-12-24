import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        {/* Logo - Left */}
        <Link to='/' className='flex items-center gap-2' onClick={() => {
          setActive("")
          window.scrollTo(0, 0)
        }}>
          <img src={logo} alt='logo' className='h-9 object-contain' />
        </Link>

        {/* Desktop Menu - Center */}
        <ul className='list-none hidden sm:flex flex-row gap-10 absolute left-1/2 transform -translate-x-1/2'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Button - Right (Desktop) */}
        <motion.a
          href='/CV_Yasser_MOUSSAOUI.pdf'
          download='CV_Yasser_MOUSSAOUI.pdf'
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(139, 92, 246, 0.8), 0 0 50px rgba(139, 92, 246, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className='hidden sm:block px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium text-[16px] cursor-pointer'
          style={{
            boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)"
          }}
        >
          Download CV
        </motion.a>

        {/* Mobile Menu */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl flex-col`}>
            <ul className='list-none flex flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(false)
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>

            {/* Mobile Button */}
            <motion.a
              href='/CV_Yasser_MOUSSAOUI.pdf'
              download='CV_Yasser_MOUSSAOUI.pdf'
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(139, 92, 246, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              className='mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium text-[14px] text-center'
              style={{
                boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)"
              }}
            >
              Download CV
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar