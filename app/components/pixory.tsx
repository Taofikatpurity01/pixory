"use client";

import Image from "next/image";
import hero from "@/public/hero.gif";
import logo from "@/public/logo.png";
import { FaRegCirclePlay } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

export default function Pixory() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={hero}
          alt="Hero Background"
          fill
          priority
          className="object-cover opacity-90"
        />
      </div>

      {/* Navbar */}
      <header className="relative z-20 px-6 py-6 md:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Image src={logo} alt="Pixory Logo" width={38} height={38} />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm uppercase [font-family:var(--font-roboto-mono)]">
            <a href="#">Home</a>
            <a href="#">Community</a>
            <a href="#">About</a>
            <a href="#">Airdrop</a>
          </nav>

          {/* Desktop Button */}
          <button className="hidden md:block rounded-full bg-white px-14 py-6 text-black [font-family:var(--font-inter)]">
            Sign In
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute left-0 top-full w-full bg-black/95 backdrop-blur-md p-6 md:hidden">
            <nav className="flex flex-col gap-6 text-center uppercase [font-family:var(--font-roboto-mono)]">
              <a href="#" onClick={() => setIsOpen(false)}>
                Home
              </a>
              <a href="#" onClick={() => setIsOpen(false)}>
                Community
              </a>
              <a href="#" onClick={() => setIsOpen(false)}>
                About
              </a>
              <a href="#" onClick={() => setIsOpen(false)}>
                Airdrop
              </a>

              <button className="rounded-full bg-white px-8 py-3 text-black [font-family:var(--font-inter)]">
                Sign In
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Content */}
      <div className=" relative flex min-h-screen flex-col justify-center px-5 py-12 sm:px-8 md:px-12 lg:px-16">
        {/* Floating Card */}
        <div className="mb-8 w-full max-w-xs sm:max-w-sm md:max-w-80 rounded-[10px] border border-white/20 bg-white/10 p-4    backdrop-blur-md">
          <p className="text-[15px] uppercase leading-6 tracking-widest text-[#ffffff] [font-family:var(--font-roboto-mono)] font-normal">
            A powerful WEB3 infrastructure that allows you to create, trade, and
            manage digital assets with full transparency and security.
          </p>
        </div>

        {/* Hero Heading */}
        <div className="space-y-2">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl  xl:text-[9rem]  leading-none  tracking-tight [font-family:var(--font-inter)] ">
            Decentralize
          </h1>
        </div>
        <div className=" flex  flex-col-reverse  md:flex-row  justify-between  gap-10 lg:gap-20">
          {/* Description */}
          <div className="mt-8 md:-w-2xl lg:-w-3xl">
            <div className="flex flex-col gap-8 w-full">
              <p className=" text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl text-white italic font-light [font-family:var(--font-inter)]">
                Build, scale, and innovate with blockchain technology. Our
                platform enables secure, transparent, and permissionless digital
                experiences for the future of the internet.
              </p>
              <div className="">
                <button className="rounded-full bg-white px-6  py-3  sm:px-8 sm:py-4  md:px-10  md:py-5  text-sm  md:text-base  text-[#090A0D]  transition  hover:bg-gray-200  [font-family:var(--font-inter)]">
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
          <div className="flex md:justify-end md:mt-32 xs:justify-start">
            <h1 className=" text-5xl  sm:text-6xl md:text-7xl lg:text-8xl xl:text-[154px] leading-none tracking-tight  md:ml-16  lg:ml-24  [font-family:var(--font-inter)]">
              Everything
            </h1>
          </div>
        </div>
        {/* Top Right Text */}
        <div className="mt-6 md:absolute md:right-10 md:top-20 text-xs sm:text-sm tracking-wide text-white ">
          <div className="flex items-center gap-2">
            <FaRegCirclePlay />
            <div className="flex gap-4 [font-family:var(--font-roboto-mono)]">
              <p>Fast. </p>
              <p> Secure.</p>
              <p> Permissionless.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
