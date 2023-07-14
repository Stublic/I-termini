'use client';
import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";
const Navbar = () => {
  return (
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative bg-purple-700 flex items-center justify-center`}>
        <div className="flex h-[10px] items-center">
            <div className="flex justify-evenly flex-row items-center">
                <span className="bg-white rounded-md mr-2 font-medium"><p className="p-2">Specijalno</p></span>
                <span>😍</span>
                <p className="text-slate-200">Čak <strong className="text-white">20% Popusta </strong>za nove korisnike, za prvu godinu.</p>
                <a href="#" className="text-white ml-5"><u>Odaberi svoj paket</u> </a>
            </div>
        </div>
    </motion.nav>
  )
}

export default Navbar