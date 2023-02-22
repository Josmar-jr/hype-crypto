'use client'

import Link from 'next/link'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Menu, ShoppingCart, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from './commons/Button'
import { CartDrawer } from './CartDrawer'

export function Header() {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)

  return (
    <header className="w-full border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 md:h-16 h-12 flex items-center justify-between">
        <span className="flex items-center">
          <img
            src="/logo.svg"
            alt="Hype Crypto logo"
            className="w-10 md:w-full"
          />
          <span className="font-bold md:text-lg">HypeFT</span>
        </span>

        <div className="md:flex gap-16 hidden">
          <nav className="flex gap-4 items-center">
            <Link
              href="/"
              className="py-1 px-2 font-medium text-zinc-900 after:opacity-0 hover:after:opacity-100 after:block after:content-[' '] after:ease-in after:duration-300 hover:after:w-full after:h-[3px] after:rounded-t-lg after:bg-indigo-500 after:absolute relative after:left-0 after:bottom-[-18px]"
            >
              Explorar
            </Link>
            <Link
              href="/"
              className="py-1 px-2 font-medium text-zinc-900 after:opacity-0 hover:after:opacity-100 after:block after:content-[' '] after:ease-in after:duration-300 hover:after:w-full after:h-[3px] after:rounded-t-lg after:bg-indigo-500 after:absolute relative after:left-0 after:bottom-[-18px]"
            >
              Como trabalhar
            </Link>
            <Link
              href="/"
              className="py-1 px-2 font-medium text-zinc-900 after:opacity-0 hover:after:opacity-100 after:block after:content-[' '] after:ease-in after:duration-300 hover:after:w-full after:h-[3px] after:rounded-t-lg after:bg-indigo-500 after:absolute relative after:left-0 after:bottom-[-18px]"
            >
              Comunidade
            </Link>
          </nav>

          <div className="flex gap-2 items-center">
            <Button variant="outlined">SignIn</Button>
            <Button>Create</Button>

            <CartDrawer
              trigger={
                <button className="p-2">
                  <ShoppingCart size={20} className="stroke-zinc-700" />
                </button>
              }
            />
          </div>
        </div>

        <div className="md:hidden block">
          <DropdownMenu.Root
            open={isOpenDropdown}
            onOpenChange={setIsOpenDropdown}
          >
            <DropdownMenu.Trigger asChild>
              <button className="text-zinc-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 outline-none rounded-sm">
                {isOpenDropdown ? <X /> : <Menu />}
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                sideOffset={16}
                className="radix-side-center:animate-slide-up radix-side-bottom:animate-slide-down bg-zinc-100 w-screen h-screen z-50 flex flex-col items-center"
              >
                <DropdownMenu.Item asChild>
                  <Link
                    href="/"
                    className="w-full text-center py-2 border-b border-gray-200"
                  >
                    Explorar
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <Link
                    href="/"
                    className="w-full text-center py-2 border-b border-gray-200"
                  >
                    Como trabalhar
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <Link
                    href="/"
                    className="w-full text-center py-2 border-b border-gray-200"
                  >
                    Comunidade
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <button className="bg-transparent font-medium hover:opacity-80 transition-opacity border-indigo-500 border rounded-full py-2 mt-2 w-4/5 text-indigo-500 outline-none focus:ring-2 focus:ring-indigo-500 ring-offset-2">
                    SignIn
                  </button>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <button className="bg-indigo-500 font-medium hover:opacity-90 transition-opacity border-indigo-500 border rounded-full py-2 mt-2 w-4/5 text-zinc-100 outline-none focus:ring-2 focus:ring-indigo-500 ring-offset-2">
                    Create
                  </button>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
    </header>
  )
}
