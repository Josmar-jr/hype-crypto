'use client'
import Image from 'next/image'

import { useContract, useListing, useNFT } from '@thirdweb-dev/react'

import { Heart } from 'lucide-react'

interface NFTProps {
  params: {
    id: string
  }
}

export default function NFT({ params }: NFTProps) {
  const { contract } = useContract('0x04C47E75Fa3C98335Da055C725809356e5f389B6')
  // @ts-ignore
  const listing = useListing(contract, Number(params.id))

  const { contract: contractNFT } = useContract(
    listing.data?.assetContractAddress,
  )
  const { data: nft } = useNFT(contractNFT, listing.data?.asset.id)

  return (
    <div className="max-w-7xl mx-auto px-4 w-full">
      <div className="py-16 border-b border-zinc-200 flex justify-between">
        <h1 className="text-4xl font-bold">NFT</h1>
      </div>

      <main className="w-full">
        <div className="flex gap-6">
          <div className="relative">
            <Image
              src="/nft.png"
              alt="Image NFT"
              width={677}
              height={677}
              quality={100}
            />
            <span className="absolute bg-white top-3 right-3 rounded-full p-3 flex items-center justify-center gap-2 font-bold">
              <button className="group">
                <Heart
                  className="group-hover:fill-red-600 transition-colors group-hover:stroke-red-600"
                  size={18}
                />
              </button>
              64
            </span>
          </div>
          <div className="">
            <span>
              por{' '}
              <span className="text-indigo-400 font-medium">Josmar Junior</span>
            </span>

            <h2 className="text-3xl font-bold">Golden Skull</h2>

            <p>
              The Wall Street Official Avatar Fight Club is launching its is an
              NFT Collection of over 50k Unique pieces from Wall Street...
            </p>

            <div>
              <Image
                className="w-9 h-9 rounded-full"
                src="/nft.png"
                alt="Image NFT"
                width={36}
                height={36}
                quality={100}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
