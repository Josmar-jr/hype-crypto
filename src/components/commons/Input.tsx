import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'
import type { UseFormRegister, FieldError } from 'react-hook-form'
import cln from 'classnames'
import { ArrowRight } from 'lucide-react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  className?: string
  withSubmit?: boolean
  register?: UseFormRegister<any>
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, register, withSubmit = false, error, className, ...rest },
  ref,
) => {
  return (
    <div className="flex flex-col gap-1">
      <div
        className={cln(
          'flex border border-gray-300 bg-transparent rounded-full py-2 px-4 focus:outline-none focus:z-10',
          className,
          'has-pseudo',
        )}
      >
        <input
          {...rest}
          className="bg-transparent border-0 outline-none disabled:cursor-not-allowed placeholder:zinc-300 w-full"
        />

        {withSubmit && (
          <button className="bg-indigo-500 rounded-full text-zinc-100 p-1 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 hover:bg-opacity-80 transition-colors">
            <ArrowRight size={14} />
          </button>
        )}
      </div>

      {error ? (
        <small className="ml-1 text-red-500 font-medium">{error.message}</small>
      ) : (
        <></>
      )}
    </div>
  )
}

export const Input = forwardRef(InputBase)
