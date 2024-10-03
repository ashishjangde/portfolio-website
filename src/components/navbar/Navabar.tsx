'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import LogoIcon from '@/components/svg/LogoIcon.svg';
import BlackThemeLogo from '@/components/svg/BlackThemeLogo.svg';
import { usePathname } from 'next/navigation';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from '../ui/separator';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const navItems = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Projects',
      path: '/projects',
    },
    {
      name: 'Resume',
      path: '/resume',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ];

  const { theme, setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Ensures the component is mounted before rendering the theme-dependent elements
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return null; // Prevents rendering until the theme is fully loaded
  }

  return (
    <nav className="px-6 py-3 bg-white dark:bg-black w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={'/'}>
          <Image
            src={resolvedTheme === 'dark' ? BlackThemeLogo : LogoIcon}
            alt="logo"
            width={80}
            height={70}
            className="cursor-pointer"
          />
        </Link>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-8 items-center text-sm">
          {navItems.map(({ name, path }) => (
            <Link key={path} href={path}>
              <span
                className={`text-lg text-gray-800 dark:text-gray-200 transition duration-300 ${
                  pathname === path ? ' border-b-2 border-gray-800 dark:border-gray-200' : ''
                }`}
              >
                {name}
              </span>
            </Link>
          ))}
        </div>

        {/* Theme Toggle and Menu for smaller screens */}
        <div className="flex items-center gap-8">
          {/* Theme toggle button */}
          <Button
            onClick={toggleTheme}
            variant="outline"
            size="icon"
            className="rounded-full border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300"
          >
            <Sun
              className={`h-[1rem] w-[1rem] transition-all ${
                theme === 'dark' ? 'hidden' : 'block'
              }`}
            />
            <Moon
              className={`h-[1rem] w-[1rem] transition-all ${
                theme === 'dark' ? 'block' : 'hidden'
              }`}
            />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Mobile menu trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Bars3BottomRightIcon className="h-6 w-6 cursor-pointer md:hidden" />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader className="flex flex-col items-center">
                <SheetTitle>Menu</SheetTitle>
                <Separator />
              </SheetHeader>
              <div className="flex flex-col items-center space-y-6 py-8">
                {navItems.map(({ name, path }) => (
                  <SheetClose asChild key={path}>
                    <Link href={path} className="text-lg text-gray-800 dark:text-gray-200">
                      <span
                        className={`transition duration-300 ${pathname === path ? ' font-bold' : ''}`}
                      >
                        {name}
                      </span>
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <Separator />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
