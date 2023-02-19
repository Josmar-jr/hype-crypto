import { Slot } from '@radix-ui/react-slot'
import cln from 'classnames'
import { Loader2 } from 'lucide-react'
import { ButtonHTMLAttributes } from 'react'

const customVariants = {
  primary: 'bg-indigo-500 hover:opacity-90 text-zinc-100',
  outlined: 'bg-transparent hover:opacity-80 text-indigo-500',
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean
  variant?: keyof typeof customVariants
  className?: string
  asChildren?: boolean
}

export function Button({
  isLoading = false,
  variant = 'primary',
  className,
  asChildren,
  ...props
}: ButtonProps) {
  const Component = asChildren ? Slot : 'button'

  return (
    <Component
      className={cln(
        'font-medium transition-opacity disabled:cursor-not-allowed border-indigo-500 border rounded-full py-2 px-8 outline-none focus:ring-2 focus:ring-indigo-500 ring-offset-2',
        customVariants[variant],
        className,
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        props.children
      )}
    </Component>
  )
}
