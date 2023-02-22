import * as Dialog from '@radix-ui/react-dialog'
import { AlertCircle, X } from 'lucide-react'
import { Button } from './commons/Button'

export function CartDrawer() {
  return (
    <Dialog.Root open>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-zinc-900 fixed inset-0 bg-opacity-75 z-50" />

        <Dialog.Content className="h-drawer max-w-sm w-full z-50 my-auto top-6 right-6 fixed bg-zinc-100 py-8 px-6 rounded-2xl">
          <Dialog.DialogTitle className="text-2xl font-bold flex gap-3 items-center">
            Seu carrinho <AlertCircle size={20} />
          </Dialog.DialogTitle>
          <Dialog.Close asChild>
            <button className="absolute top-8 right-5 p-1 outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg hover:opacity-80 transition-opacity">
              <X />
            </button>
          </Dialog.Close>
          <Dialog.Description className="mt-12">
            <div className="flex justify-between items-center mb-4">
              <span className="text-base font-bold">1 item</span>
              <button
                className="font-bold hover:opacity-80 transition-opacity"
                title="remover tudo"
              >
                Limpar tudo
              </button>
            </div>

            <ul>
              <li></li>
            </ul>

            <div className="flex justify-between items-center">
              <span className="text-base font-bold">Total price</span>
              <span className="text-base font-bold">82.43 ETH</span>
            </div>

            <span className="ml-auto flex justify-end mt-1 text-zinc-500">
              $ 3212.89
            </span>

            <Button className="w-full mt-8">Fechar compra</Button>
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
