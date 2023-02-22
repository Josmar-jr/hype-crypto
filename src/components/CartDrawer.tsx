'use-client'

import * as Dialog from '@radix-ui/react-dialog'
import { AlertCircle, Trash, Verified, X } from 'lucide-react'
import Image from 'next/image'
import { ReactNode } from 'react'
import { Button } from './commons/Button'
import {
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from './commons/Tooltip'

interface CartDrawerProps {
  trigger: ReactNode
}

export function CartDrawer({ trigger }: CartDrawerProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-zinc-900 fixed inset-0 bg-opacity-75 z-50" />

        <Dialog.Content className="h-drawer max-w-sm w-full z-50 my-auto top-6 right-6 fixed bg-zinc-100 py-8 px-6 rounded-2xl">
          <Dialog.DialogTitle className="text-2xl font-bold flex gap-3 items-center">
            Seu carrinho
            <TooltipProvider>
              <TooltipRoot>
                <TooltipTrigger asChild>
                  <button>
                    <AlertCircle size={20} />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Chain: Etherium</TooltipContent>
              </TooltipRoot>
            </TooltipProvider>
          </Dialog.DialogTitle>
          <Dialog.Close asChild>
            <button className="absolute top-8 right-5 p-1 outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg hover:opacity-80 transition-opacity">
              <X />
            </button>
          </Dialog.Close>
          <Dialog.Description className="mt-12">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-base font-bold">1 item</span>
                <button
                  className="font-bold hover:opacity-80 transition-opacity"
                  title="remover tudo"
                >
                  Limpar tudo
                </button>
              </div>

              <div className="border-t border-zinc-300" />

              <ul className="my-3">
                <li className="">
                  <button className="group p-2 flex gap-4 items-center w-full hover:bg-indigo-100 transition-image outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg">
                    <Image
                      className="rounded-lg"
                      width={70}
                      height={70}
                      src="/nft.png"
                      alt="NFT"
                    />

                    <div className="text-left">
                      <span className="font-bold text-base">6748</span>
                      <span className="flex gap-1 items-center">
                        Lorem ipsum...
                        <Verified size={18} className="stroke-blue-700" />
                      </span>
                      <span className="block text-zinc-400">Josmar Junior</span>
                    </div>

                    <span className="block group-hover:hidden ml-auto">
                      0.287 ETH
                    </span>

                    <button
                      title="Remover item"
                      className="p-1 hidden ml-auto group-hover:block opacity-0 group-hover:opacity-100 hover:opacity-70 transition-opacity"
                    >
                      <Trash size={16} />
                    </button>
                  </button>
                </li>
              </ul>

              <div className="border-t border-zinc-300" />

              <div className="flex justify-between items-center mt-4">
                <span className="text-base font-bold">Total price</span>
                <span className="text-base font-bold">82.43 ETH</span>
              </div>

              <span className="ml-auto flex justify-end mt-1 text-zinc-500">
                $ 3212.89
              </span>

              <Button className="w-full mt-8">Fechar compra</Button>
            </div>
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
