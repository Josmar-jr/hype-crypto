import { Button } from '@/components/commons/Button'

export default function Home() {
  return (
    <div className="mt-40">
      <div className="bg-hero">
        <img
          className="-z-10 select-none absolute top-0 left-0 object-cover w-screen"
          src="/bg-hero.svg"
          alt=""
        />
        <div className="text-center flex flex-col items-center gap-8">
          <h1 className="font-bold text-4xl md:text-7xl leading-snug">
            Compre e venda
            <span className="block bg-indigo-500 text-zinc-100 md:w-[580px] mx-auto -rotate-3">
              Artes digitais e
            </span>
            NFTS
          </h1>

          <p className="text-md px-2 md:text-lg max-w-[500px] w-full">
            The World Largest Digital Marketplace For Crypto Collectibles And
            Non-Fungible Tokens
          </p>

          <div className="flex gap-4">
            <Button className="w-40" variant="outlined">
              Explorar
            </Button>
            <Button className="w-40">Aprenda mais</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
