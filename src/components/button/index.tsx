import { Icon } from '@/types/icon'
import { icons } from '@/utils/icons'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends ComponentProps<'button'> {
  children: React.ReactNode
  icon?: Icon
}

const Button = ({ children, icon, className, ...rest }: Props) => {
  const Icon: { [key: string]: React.ReactNode } = icons

  return (
    <button
      className={twMerge(
        'bg-yellow-400 text-zinc-50 flex justify-center items-center gap-2 p-3 rounded-lg transition duration-200 hover:brightness-90',
        className
      )}
      {...rest}
    >
      {icon && Icon[icon]}
      {children}
    </button>
  )
}

export { Button }
