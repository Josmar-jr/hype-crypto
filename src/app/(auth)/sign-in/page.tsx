'use client'
import { useState } from 'react'
import Link from 'next/link'

import { SuccessfulModal } from '@/components/SuccessfulModal'
import { WalletList } from '@/components/WalletList'
import { useAddress } from '@thirdweb-dev/react'

export default function SignIn() {
  const code = useAddress()

  const [isOpenSuccessfulModal, setIsOpenSuccessfulModal] = useState(
    !code ?? false,
  )

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
        <WalletList />

        <SuccessfulModal
          open={isOpenSuccessfulModal}
          onOpenChange={setIsOpenSuccessfulModal}
          code={code}
        />
      </main>
    </div>
  )
}
