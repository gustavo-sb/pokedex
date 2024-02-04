import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Dialog as ShadcnDialog
} from '@/components/ui/dialog'
import { Button } from '@/components/button'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  triggerButtonLabel: string | JSX.Element
  submitButtonLabel: string
  onSubmit: () => void
  className?: string
  hasCancelButton?: boolean
  title?: string
  description?: string
}

const Dialog = ({
  children,
  triggerButtonLabel,
  submitButtonLabel,
  onSubmit,
  className,
  hasCancelButton = false,
  title,
  description
}: Props) => {
  return (
    <ShadcnDialog>
      <DialogTrigger asChild>
        <Button className={className}>{triggerButtonLabel}</Button>
      </DialogTrigger>
      <DialogContent className="bg-zinc-800 text-zinc-50 border-zinc-800">
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
        <DialogFooter>
          {hasCancelButton && <Button>Cancelar</Button>}
          <Button onClick={onSubmit}>{submitButtonLabel}</Button>
        </DialogFooter>
      </DialogContent>
    </ShadcnDialog>
  )
}

export { Dialog }
