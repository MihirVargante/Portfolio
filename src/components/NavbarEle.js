import React from 'react'
import { Socials } from '../constants/index'
import Logo from '../assets/logo.png'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
    <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
      <a
        href="#about-me"
        className="h-auto w-auto flex flex-row items-center"
      >
          <img
            src={Logo}
            alt="logo"
            width={70}
            height={70}
            
            className="cursor-pointer hover:animate-slowspin bg-[#03001417] rounded-full p-[15px]"
          />

        <span className="font-bold ml-[10px] hidden md:block text-gray-300">
          Mihir Vargante
        </span>
      </a>

      <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
        <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
          <a href="#about-me" className="cursor-pointer">
            About me
          </a>
          <a href="#skills" className="cursor-pointer">
            Skills
          </a>
          <a href="#projects" className="cursor-pointer">
            Projects
          </a>
        </div>
      </div>

      <div className="flex flex-row gap-5 justify-center item-center">
      <li className="social-icons text-2xl inline-flex">
              <a
                href="https://github.com/MihirVargante"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons text-2xl inline-flex">
              <a
                href="https://x.com/Mihir_Vargante"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons text-2xl inline-flex">
              <a
                href="https://www.linkedin.com/in/mihir-vargante/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons text-2xl inline-flex">
              <a
                href="https://www.instagram.com/mahi_vargante_115/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
        </div>
    </div>
  </div>
  )
}

export default Navbar