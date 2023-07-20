"use client";
import { Fragment, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Popover, Transition } from "@headlessui/react";

import styles from "../styles";
import { navVariants } from "../utils/motion";
import { TitleText } from ".";
import Link from "next/link";
import Paketi from '../public/paketi.svg'
import { ChevronDownIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  EyeIcon,
  CalendarDaysIcon,
  HandRaisedIcon,
  FingerPrintIcon,
  GiftIcon,
  ScissorsIcon,
  SparklesIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const callsToAction = [


    { name: 'Pogledaj video', href: '/DigitalnasovaVideo.mp4', icon: PlayCircleIcon },
    { name: 'Odaberi paket', href: '#', icon: Squares2X2Icon },
  ]

  const links = [
    { href: "/rjesenja/beauty-salon", name: "Beauty salon", icon: EyeIcon, description: 'Olakšajte svojim klijentima rezervaciju i pružite im besprijekorno iskustvo.' },
    { href: "/rjesenja/brijacnica", name: "Brijačnica", icon: ScissorsIcon , description: 'Optimizirajte vašu uslugu brijanja i poboljšajte zadovoljstvo klijenata.'},
    { href: "/rjesenja/frizerski-salon", name: "Frizerski salon", icon: SparklesIcon , description: 'Upravljajte svojim terminima s lakoćom i povećajte produktivnost.'},
    { href: "/rjesenja/masaza", name: "Masaža", icon: HandRaisedIcon , description: 'Organizirajte svoje termine na jednostavan način i pružite izvrsnu uslugu.'},
    { href: "/rjesenja/poliklinika", name: "Poliklinika", icon: CalendarDaysIcon , description: 'Upravljajte pacijentima efikasno i poboljšajte iskustvo njihove naručivanja.'},
    { href: "/rjesenja/spa", name: "Spa & Welleness", icon: GiftIcon, description: 'Poboljšajte svoje poslovanje i ojačajte lojalnost klijenata. ' },
    { href: "/rjesenja/tattoo-studio", name: "Tattoo studio", icon: FingerPrintIcon , description: 'Optimizirajte upravljanje terminima i privucite nove klijente. '},
  ];

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} -mt-10 pt-20 pb-14 bg-[url('/blob-scene-haikei.svg')] bg-no-repeat bg-cover flex items-center justify-center z-0 max-w-[100vw] overflow-hidden`}
      >
        <div className="flex h-[10px] items-center">
          <div className="flex justify-evenly flex-row items-center flex-wrap">
            <span className="bg-white rounded-md mr-2 font-medium hidden lg:inline-block">
              <p className="p-2">Specijalno</p>
            </span>
            <span className="hidden lg:inline-block">😍</span>
            <p className="text-slate-200 ">
              Čak <strong className="text-white">20% Popusta </strong>za nove
              korisnike, za prvu godinu.
            </p>
            <a href="#" className="text-white ml-5 hidden lg:inline-block">
              <u>Odaberi svoj paket</u>{" "}
            </a>
          </div>
        </div>
      </motion.nav>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={` h-full rounded-t-3xl z-10 pt-5 -mt-5 my-12 bg-white max-w-[100vw]`}
      >
        <div className="mx-56 flex justify-between">

        
        <Link href="/">
          <div className="w-[85px] sm:w-[60px] flex">
            <img src="/logo.svg" alt="I-termini" />
            <div>
              <h1 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] px-3">
                I-termini
              </h1>
              <p className=" font-normal sm:text-[12px] text-[6px] sm:leading-[12px] leading-[8px] px-3 text-slate-500">
                BOOKING & NARUDŽBE
              </p>
            </div>
          </div>
        </Link>

        <div className="sm:hidden flex  relative justify-evenly flex-row items-center">
        <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 focus:ring">
        <span>Rješenja</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute right-0 px-5 z-10 mt-5 w-screen">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {links.map((item) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
        </div>
        <div className="sm:flex hidden relative justify-evenly flex-row w-[300px] items-center">
        <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 ">
        <span className={`${styles.heroHeading}`}>Rješenja</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen h-screen max-w-[840px] flex-auto max-h-[500px] rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4 flex flex-wrap">
              {links.map((item) => (
                <div key={item.name} className="group max-w-sm relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
          <Link href="/paketi" className={`${styles.heroHeading}`}>
            Paketi
          </Link>
          <Link href="/iskustva" className={`${styles.heroHeading}`}>
            Iskustva
          </Link>
        </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
