import { Button } from '@/components/commons/Button'
import Image from 'next/image'

import Link from 'next/link'

export default function SignIn() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="py-16 border-b border-zinc-200 flex justify-between">
        <h1 className="text-4xl font-bold">Sign In</h1>

        <p className="mr-28">
          Choose one of available wallet providers or create a new wallet.
          <Link className="block text-indigo-400 font-bold" href="/">
            What is a wallet?
          </Link>
        </p>
      </div>

      <main className="mt-12 w-full">
        <div className="flex justify-center gap-8">
          <button className="border hover:shadow-lg transition-shadow border-zinc-200 rounded-lg flex flex-col gap-4 items-center justify-center h-[394px] flex-1 shadow focus:ring-2 focus:ring-indigo-500 outline-none">
            <Image
              className="w-20"
              width={120}
              height={120}
              src="/wallets/coin-base.png"
              alt="Meta mask"
              quality={100}
            />

            <span className="font-medium text-lg">MetaMask</span>
          </button>
          <button className="border hover:shadow-lg transition-shadow border-zinc-200 rounded-lg flex flex-col gap-4 items-center relative justify-center h-[394px] flex-1 shadow focus:ring-2 focus:ring-indigo-500 outline-none">
            <span className="bg-indigo-500 rounded-full px-3 py-1 text-zinc-100 font-medium absolute -top-4">
              Popular
            </span>

            <Image
              className="w-20"
              width={120}
              height={120}
              src="/wallets/meta-mask.png"
              alt="Meta mask"
              quality={100}
            />

            <span className="font-medium text-lg">MetaMask</span>
          </button>
          <button className="border hover:shadow-lg transition-shadow border-zinc-200 rounded-lg flex flex-col gap-4 items-center justify-center h-[394px] flex-1 shadow focus:ring-2 focus:ring-indigo-500 outline-none">
            <Image
              className="w-20"
              width={120}
              height={120}
              src="/wallets/phaton-wallet.png"
              alt="Meta mask"
              quality={100}
            />

            <span className="font-medium text-lg">MetaMask</span>
          </button>
        </div>

        <div className="w-full flex items-center justify-center mt-12">
          <Button variant="outlined">Carregar mais opções</Button>
        </div>
      </main>
    </div>
  )
}
