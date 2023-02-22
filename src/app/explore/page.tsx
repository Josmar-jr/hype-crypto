'use client'
import { useEffect, useMemo, useState } from 'react'

import { useContract, useListings } from '@thirdweb-dev/react'
import { Filter, Grid } from 'lucide-react'
import cln from 'classnames'

import { Input } from '@/components/commons/Input'
import { NFTCard } from '@/components/NFTCard'
import { AuctionListing, DirectListing, Marketplace } from '@thirdweb-dev/sdk'
import { CartDrawer } from '@/components/CartDrawer'

type Distribution = 'normal' | 'more'

export default function Explore() {
  const [listDistribution, setListDistribution] =
    useState<Distribution>('normal')
  const [searchNFT, setSearchNFT] = useState('')
  const { contract } = useContract('0x04C47E75Fa3C98335Da055C725809356e5f389B6')

  // @ts-ignore
  const { data: nfts } = useListings<Marketplace>(contract)
  const [NFTs, setNFTs] = useState<(AuctionListing | DirectListing)[]>(
    nfts ?? [],
  )

  const countNFTs = NFTs.length

  const filteredNFTs = useMemo(() => {
    if (!nfts || searchNFT === '') {
      return []
    }

    return nfts
      ?.filter((nft) => {
        const name = nft.asset.name as string

        return name.toLocaleLowerCase().includes(searchNFT.toLocaleLowerCase())
      })
      .slice(0, 6)
  }, [searchNFT, nfts])

  function handleSelectSearchNFT(nftId: string) {
    if (nfts) {
      setNFTs(nfts?.filter((nft) => nft.id === nftId) ?? nfts)
    }
    setSearchNFT('')
  }

  useEffect(() => {
    if (nfts) {
      setNFTs(nfts)
    }
  }, [nfts])

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

          <span>{countNFTs} resultados</span>

          <div className="relative max-w-xl w-full">
            <Input
              name="search"
              className="w-full z-50"
              value={searchNFT}
              onChange={(event) => setSearchNFT(event.target.value)}
            />

            <ul
              className={cln(
                'w-full bg-white -translate-y-8 shadow opacity-0 rounded-xl absolute z-40 top-11 animate-scale-in transition-image pointer-events-none',
                {
                  'opacity-100 translate-y-0 pointer-events-auto':
                    filteredNFTs.length > 0,
                },
              )}
            >
              <li className="flex justify-between px-3 py-3 w-full rounded-t-xl">
                <span className="font-bold text-zinc-400">Nome</span>
                <span className="font-bold text-zinc-400">Valor</span>
              </li>

              {filteredNFTs?.map((nft) => (
                <li key={nft.id}>
                  <button
                    onClick={() => handleSelectSearchNFT(nft.id)}
                    className="flex justify-between px-3 py-3 w-full focus:ring-1 outline-none focus:ring-indigo-500 hover:bg-zinc-100 transition-colors last:rounded-b-xl"
                  >
                    <span className="font-medium">{nft.asset.name}</span>
                    <span className="text-sm">
                      {nft.buyoutCurrencyValuePerToken.displayValue}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

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
          {NFTs?.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
      </div>

      <CartDrawer />
    </div>
  )
}
