import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiDjango } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear", 
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

function Tech() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100}}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100}}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariants(1.8)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className='text-6xl text-slate-300' />
            </motion.div>
            <motion.div
            variants={iconVariants(2.4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiDjango className='text-6xl text-green-700' />
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className='text-6xl text-sky-700' />
            </motion.div>            
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiFastapi className='text-6xl text-green-600' />
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-6xl text-cyan-400' />
            </motion.div>
            <motion.div
            variants={iconVariants(3.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptFill className='text-6xl' />
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className='text-6xl text-green-500' />
            </motion.div> 
            <motion.div
            variants={iconVariants(3.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiJavascript className='text-6xl text-yellow-400' />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Tech
