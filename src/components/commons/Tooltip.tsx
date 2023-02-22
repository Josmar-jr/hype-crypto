import * as PrimitiveTooltip from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'

interface TooltipProviderProps
  extends ComponentProps<typeof PrimitiveTooltip.Provider> {}

export function TooltipProvider(props: TooltipProviderProps) {
  return <PrimitiveTooltip.Provider {...props} />
}

interface TooltipRootProps
  extends ComponentProps<typeof PrimitiveTooltip.Root> {
  children: ReactNode
}

export function TooltipRoot({ children, ...props }: TooltipRootProps) {
  return <PrimitiveTooltip.Root {...props}>{children}</PrimitiveTooltip.Root>
}

interface TooltipTriggerProps
  extends ComponentProps<typeof PrimitiveTooltip.Trigger> {}

export function TooltipTrigger(props: TooltipTriggerProps) {
  return <PrimitiveTooltip.Trigger {...props} />
}

interface TooltipContentProps
  extends ComponentProps<typeof PrimitiveTooltip.Content> {}

export function TooltipContent(props: TooltipContentProps) {
  return (
    <PrimitiveTooltip.Portal>
      <PrimitiveTooltip.Content
        {...props}
        className="z-50 bg-slate-800 rounded-md py-3 px-4 shadow text-white font-bold"
      >
        {props.children}
        <PrimitiveTooltip.Arrow className="fill-slate-800" />
      </PrimitiveTooltip.Content>
    </PrimitiveTooltip.Portal>
  )
}
