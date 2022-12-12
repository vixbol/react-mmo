import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 w-full h-20 text-white bg-[#0f0f0f] z-50">
      <div className="w-4/5 w flex items-center justify-between px-5 py-3 m-auto">
        <div className="relative">
          <Link
            to="/"
            className="animate-water-wave absolute -translate-x-1/2 -translate-y-1/2 text-4xl font-bold font-Rubik-Vinyl"
          >
            Bshop
          </Link>
          <Link
            to="/"
            className="animate-water-wave absolute -translate-x-1/2 -translate-y-1/2 text-4xl font-bold font-Rubik-Vinyl"
          >
            Bshop
          </Link>
        </div>
        <div className="flex items-center text-xl gap-4">
          <Link to="/" className="pr-5 border-r hover:text-red-500">
            Trang chủ
          </Link>
          <Link to="About" className="pr-5 border-r hover:text-red-500">
            Giới thiệu
          </Link>
          <Link to="Tutorial" className="pr-5 border-r hover:text-red-500">
            Hướng dẫn
          </Link>
          <Link to="Download" className="pr-5 border-r hover:text-red-500">
            Tải tool
          </Link>
          <Link to="BuyCoin" className="pr-5 border-r hover:text-red-500">
            Mua Xu
          </Link>
          <Link to="Contacts" className="pr-5 border-r hover:text-red-500">
            Cộng đồng
          </Link>
          <a
            className="transition-all px-5 py-2.5 text-red-400 hover:text-white rounded-md border border-t-cyan-500 border-l-cyan-400 border-b-pink-500 border-r-pink-400 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-pink-500"
            href="https://www.facebook.com/100010504325448/"
            target="_blank"
          >
            Liên hệ ngay
          </a>
        </div>
      </div>
    </header>
  );
}
