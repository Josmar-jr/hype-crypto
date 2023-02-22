'use client'

import { AuctionListing, DirectListing } from '@thirdweb-dev/sdk'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
  TooltipRoot,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from './commons/Tooltip'

interface NftProps {
  nft: AuctionListing | DirectListing
}

export function NFTCard({ nft }: NftProps) {
  return (
    <article className="rounded-2xl z-20 relative p-0 bg-white shadow group focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 block outline-none">
      <Link href={`/explore/${nft.asset.id}`} prefetch>
        <>
          <div className="overflow-hidden rounded-t-2xl">
            <TooltipProvider>
              <TooltipRoot>
                <TooltipTrigger asChild>
                  <span className="group-hover:opacity-100 opacity-0 transition-image rounded-full bg-zinc-300 absolute top-3 left-3 z-10 p-[6px] bg-opacity-30">
                    <svg
                      fill="white"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                    >
                      <path
                        d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                </TooltipTrigger>
                <TooltipContent>Chain: Etherium</TooltipContent>
              </TooltipRoot>
            </TooltipProvider>

            <Image
              className="group-hover:scale-110 origin-center w-full h-full transition-image"
              src={nft?.asset?.image ?? ''}
              alt={String(nft?.asset?.name) ?? ''}
              width={500}
              height={500}
            />
          </div>

          <div className="text-zinc-800 p-4 text-left">
            <span className="font-normal block text-sm">{nft.asset.name}</span>

            <span className="block my-1 text-base font-semibold">
              {nft.buyoutCurrencyValuePerToken.displayValue} ETH
            </span>
            <span className="">Highest Bid</span>
          </div>
        </>
      </Link>

      <button
        onClick={() => console.log('test')}
        className="bg-indigo-500 z-50 hover:bg-indigo-400 text-zinc-100 flex gap-2 items-center justify-center font-medium transition-image w-full rounded-b-xl py-2 absolute bottom-0 opacity-0 group-hover:opacity-100"
      >
        <ShoppingCart size={18} />
        Add to cart
      </button>
    </article>
  )
}
