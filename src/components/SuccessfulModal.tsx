'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { Check, Copy, Wallet } from 'lucide-react'
import { useState, useEffect, ComponentProps } from 'react'
import { Button } from '@/components/commons/Button'

interface SuccessfulModalProps extends ComponentProps<typeof Dialog.Root> {
  code?: string
}

export function SuccessfulModal({ code = '', ...props }: SuccessfulModalProps) {
  const [hasCopied, setHasCopied] = useState(false)

  const formatCode = code.substring(0, 20)

  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code)

    setHasCopied(true)
  }

  useEffect(() => {
    if (hasCopied) {
      setTimeout(() => {
        setHasCopied(false)
      }, 3000)
    }
  }, [hasCopied])

  return (
    <Dialog.Root {...props}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-zinc-900 fixed inset-0 bg-opacity-75" />

        <Dialog.Content className="fixed z-50 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] max-w-md w-full bg-zinc-100 px-4 py-10 rounded-xl">
          <>
            <svg
              className="mx-auto"
              width="110"
              height="110"
              viewBox="0 0 110 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.15" cx="55" cy="55" r="55" fill="#42A846" />
              <path
                d="M55 88.3334C73.3333 88.3334 88.3333 73.3334 88.3333 55.0001C88.3333 36.6667 73.3333 21.6667 55 21.6667C36.6666 21.6667 21.6666 36.6667 21.6666 55.0001C21.6666 73.3334 36.6666 88.3334 55 88.3334Z"
                fill="#42A846"
                stroke="#42A846"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M40.8334 55L50.2667 64.4333L69.1667 45.5667"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <h3 className="text-lg font-semibold text-center mt-4">
              Carteira conectada com sucesso!
            </h3>

            <p className="text-zinc-400 text-center w-72 mx-auto mt-2">
              Você connectou a sua carteira com sucesso! Agora você pode subir e
              monetizar a sua arte.
            </p>

            <div className="w-72 mx-auto mt-4">
              <button
                onClick={copyRoomCodeToClipboard}
                className="w-full rounded-full flex items-center justify-center bg-zinc-200 py-2 px-4 gap-2 text-zinc-500 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Wallet />
                <span className="mr-2">{formatCode}...</span>
                {hasCopied ? <Check className="text-green-500" /> : <Copy />}
              </button>

              <Dialog.Close asChild>
                <Button className="mt-10 mx-auto w-full" aria-label="Close">
                  Explorar
                </Button>
              </Dialog.Close>
            </div>
          </>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
