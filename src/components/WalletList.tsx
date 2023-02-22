'use client'

import { useCoinbaseWallet, useMetamask } from '@thirdweb-dev/react'
import Image from 'next/image'
import { Button } from '@/components/commons/Button'

export function WalletList() {
  const connectWithCoinbase = useCoinbaseWallet()
  const connectWithMetamask = useMetamask()

  return (
    <div>
      <>
        <div className="flex justify-center gap-8">
          <button
            onClick={connectWithCoinbase}
            className="border hover:shadow-lg transition-shadow border-zinc-200 rounded-lg flex flex-col gap-4 items-center justify-center h-[394px] flex-1 shadow focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <Image
              className="w-20"
              width={120}
              height={120}
              src="/wallets/coin-base.png"
              alt="Meta mask"
              quality={100}
            />

            <span className="font-medium text-lg">Coinbase Wallet</span>
          </button>
          <button
            onClick={connectWithMetamask}
            className="border hover:shadow-lg transition-shadow border-zinc-200 rounded-lg flex flex-col gap-4 items-center relative justify-center h-[394px] flex-1 shadow focus:ring-2 focus:ring-indigo-500 outline-none"
          >
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
          <button
            // onClick={connectWithGnosis}
            className="border hover:shadow-lg transition-shadow border-zinc-200 rounded-lg flex flex-col gap-4 items-center justify-center h-[394px] flex-1 shadow focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <Image
              className="w-20"
              width={120}
              height={120}
              src="/wallets/phaton-wallet.png"
              alt="Meta mask"
              quality={100}
            />

            <span className="font-medium text-lg">Gnosis</span>
          </button>
        </div>

        <div className="w-full flex items-center justify-center mt-12">
          <Button variant="outlined">Carregar mais opções</Button>
        </div>
      </>
    </div>
  )
}
