import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { Social } from "../typings"

type Props = {
  socials: Social[]
};

export default function Header({ socials }: Props ) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
      <motion.div
        transition={{ duration: 1.5 }}
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        className="flex flex-row space-x-5 items-center "
      >
        {/*For Social Icons*/}
        {socials.map((social) => (
            <SocialIcon
            className="border-b-4 border-transparent rounded-sm hover:border-rose-500"
            key={social._id}
            url={social.url}
            bgColor={"transparent"}
            fgColor={"#60A5FA"}
          />
        ))}
      </motion.div>
      
      <Link href="#contact">
        <motion.div className="flex flex-row items-center text-gray-300 cursor-pointer">
          <p className="uppercase font-bold hidden md:inline-flex text-sm text-gray-400 underline hover:text-[#67e8f9]">
            contact me
          </p>
          
        </motion.div>
      </Link>
    </header>
  );
};
