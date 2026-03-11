import React from "react";
import Logo from "./Logo";
import {
  RiFacebookBoxFill,
  RiGithubFill,
  RiInstagramFill,
  RiTwitterFill,
} from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="sm:flex space-y-10 mb-25">
          <div className="text-center sm:text-left flex-1 space-y-4">
            <div>
              <Logo className="pl-0 cursor-pointer" />
            </div>

            <div>
              <p className="text-gray-300 text-base font-semibold leading-8">
                Built to keep track of the shows I enjoy watching throughout the
                day.
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-10 sm:flex text-gray-300 font-semibold">
            <div className="space-y-3 flex-1 ">
              <div>Frontend Stack</div>
              <div>Next.js</div>
              <div>Tailwind CSS</div>
              <div>Swiper Js</div>
            </div>

            <div className="space-y-3 flex-1">
              <div>Tools</div>
              <div>Vite</div>
              <div>VS Code</div>
              <div>GitHub</div>
              <div>TMDb API</div>
            </div>

            <div className="space-y-3 flex-1">
              <div>Backend Stack</div>
              <div>Supabase</div>
              <div>Prisma</div>
            </div>
          </div>
        </div>

        <div className="text-center mb-10 space-y-5">
          <div className="flex justify-center space-x-1 items-center font-semibold text-gray-300">
            <span> &copy;</span>
            <span>{new Date().getFullYear()} </span>
            <Logo className="text-base font-normal pl-0 text-gray-300" />
          </div>
          <div className="flex justify-center space-x-6 text-2xl text-white cursor-pointer">
            <RiGithubFill />
            <RiInstagramFill />
            <RiTwitterFill />
          </div>
        </div>

        <Link href="https://www.themoviedb.org/">
          <div className="text-gray-300 justify-center cursor-pointer font-semibold space-x-2 mb-10 flex">
            <p>Powered by The Movie Database</p>
            <Image src="/TMDb.svg" width={80} height={80} alt="TMDb logo" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
