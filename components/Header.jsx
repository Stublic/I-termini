"use client";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

import styles from " @component/styles";
import { motion } from "framer-motion";
import play from "../public/play.svg";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { headerSpa, headerMain } from "../constants";
import { Squares2X2Icon } from "@heroicons/react/24/outline";

const Header = ({ imgUrl, title, desc }) => {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  return (
    <section className={`${styles.paddings} min-h-[80vh] relative`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.25 }}
        className={`${styles.innerWidth} mx-56 flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <div className="w-[263px] h-[45px] flex justify-center items-center rounded-md bg-[rgba(105,83,211,0.12)] ">
            <span className="text-[#6953D3] text-[17px] font-medium">
              Online rješenje za narudžbe
            </span>
          </div>
          <div>
            <h1 className="title-gradient mt-11">{title}</h1>
            <p className="title-description">{desc}</p>
          </div>
          <div>
            <div className="flex justify-between my-12 w-[460px]">
              <Link href="/paketi">
                <div className=" flex justify-center items-center w-[241px] h-[62px] rounded-full bg-[#6953D3]">
                  <Squares2X2Icon className="h-6 w-6 text-white" />
                  <span className="text-white mx-3">|</span>
                  <p className="text-white">Odaberi paket</p>
                </div>
              </Link>
              <Transition.Root show={open} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-10"
                  initialFocus={cancelButtonRef}
                  onClose={setOpen}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                  </Transition.Child>

                  <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      >
                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl">

                            <video controls autoPlay width='2500'>
                                <source src="/DigitalnasovaVideo.mp4" />
                            </video>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition.Root>
              <button onClick={()=> setOpen(true)}>

            
              <div className="flex justify-center items-center">
                <img src="/play.svg" alt="play" />
                <p className="ml-3 text-left font-medium">
                  Pogledaj <br />
                  Video
                </p>
              </div>
              </button>
            </div>  
            <div className="flex items-center justify-between w-[560px]">
                 <div className="flex items-center">
                <img src="/reneval.svg" alt="reneval"/>
                <p className="ml-3 font-medium">Već od 29€/mjesečno</p>
            </div>
            <div className="flex items-center">
                <img src="/fixedPrice.svg" alt="reneval"/>
                <p className="ml-3 font-medium">Fiksna cijena web stranice</p>
            </div>
            </div>
           
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className={`flex-1 ${styles.flexCenter} -mr-24`}
        >
          <img
            src={imgUrl}
            alt="Itermini"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Header;
