'use client'
import { useState } from 'react'

import { useContract, useListings } from '@thirdweb-dev/react'
import { Filter, Grid } from 'lucide-react'
import cln from 'classnames'

import { Input } from '@/components/commons/Input'
import { NFTCard } from '@/components/NFTCard'
import { Marketplace } from '@thirdweb-dev/sdk'

type Distribution = 'normal' | 'more'

export default function Explore() {
  const [listDistribution, setListDistribution] =
    useState<Distribution>('normal')

  const { contract } = useContract('0x04C47E75Fa3C98335Da055C725809356e5f389B6')

  // @ts-ignore
  const { data: nfts } = useListings<Marketplace>(contract)

  return (
    <div className="max-w-7xl mx-auto px-4 w-full">
      <div className="py-16 border-b border-zinc-200 flex justify-between">
        <h1 className="text-4xl font-bold">Explore</h1>
      </div>

      <div className="w-full">
        <header className="flex items-center gap-4 py-4 w-full">
          <button className="hover:bg-white rounded-full p-2 hover:shadow-md transition-shadow font-bold">
            <Filter size={22} className="stroke-2" />
          </button>

          <span>14.298 resultados</span>

          <Input className="flex-1 w-full" name="search" />

          <div className="rounded-xl border border-zinc-300">
            <button
              onClick={() => setListDistribution('normal')}
              className={cln('py-2 px-3 text-zinc-400 rounded-l-xl', {
                'bg-zinc-200 text-zinc-900': listDistribution === 'normal',
              })}
            >
              <Grid />
            </button>
            <button
              onClick={() => setListDistribution('more')}
              className={cln(
                'py-2 px-3 border-l border-zinc-300 text-zinc-400 rounded-r-xl',
                {
                  'bg-zinc-200 text-zinc-900': listDistribution === 'more',
                },
              )}
            >
              <Grid />
            </button>
          </div>
        </header>

        <div
          className={cln('grid grid-cols-4 gap-6', {
            'grid-cols-6': listDistribution === 'more',
          })}
        >
          {nfts?.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
      </div>
    </div>
  )
}
