'use client'

import { Input } from './commons/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'

const emailSchema = z.object({
  email: z
    .string({
      required_error: 'O Campo não pode ser vazio',
    })
    .email('Digite um e-mail válido'),
})

type EmailFormData = z.infer<typeof emailSchema>

export function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  })

  function sendEmail({ email }: EmailFormData) {}

  return (
    <footer className="border-t border-zinc-200 mt-8 w-full">
      <div className="max-w-7xl p-8 mx-auto">
        <span className="flex items-center">
          <img src="/logo.svg" alt="Hype Crypto logo" className="w-10" />
          <span className="font-bold md:text-lg">HypeFT</span>
        </span>

        <p className="block my-4">
          Enter your email to get notified by enefthi for latest updates.
        </p>

        <form onSubmit={handleSubmit(sendEmail)}>
          <Input
            withSubmit
            type="email"
            className="w-72"
            placeholder="Seu e-mail"
            error={errors.email}
            {...register('email')}
          />
        </form>
      </div>
      <div className="border-t border-zinc-200 text-center w-full py-4">
        <p>© Enefthy, Inc. All right reserved.</p>
      </div>
    </footer>
  )
}
