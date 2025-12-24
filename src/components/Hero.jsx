import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const roles = [
  "CS Student",
  "Fullstack Developer", 
  "DevOps Enthusiast"
]

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (text.length < currentRole.length) {
          setText(currentRole.slice(0, text.length + 1))
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        // Deleting
        if (text.length > 0) {
          setText(currentRole.slice(0, text.length - 1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Yasser</span>
          </h1>
          
          <div className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span>I'm a </span>
            <span className='text-[#915eff] inline-block min-w-[280px]'>
              {text}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                className='inline-block w-[3px] h-[30px] bg-[#915eff] ml-1 align-middle'
              />
            </span>
          </div>

          <p className={`${styles.heroSubText} mt-4 text-white-100 text-[16px]`}>
            Building modern web applications <br className='sm:block hidden' /> 
            and exploring cloud technologies
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 35, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>  
    </section>
  )
}

export default Hero