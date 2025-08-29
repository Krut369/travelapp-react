'use client'

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Button from "./Button"

const Navbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flexBetween max-container padding-container z-50 py-5 bg-white bg-opacity-90 shadow-md backdrop-blur">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        {isLoggedIn ? (
          <Button
            type="button"
            title="Logout"
            icon="/user.svg"
            variant="btn_dark_green"
            onClick={handleLogout}
          />
        ) : (
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
            onClick={() => router.push('/login')}
          />
        )}
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar