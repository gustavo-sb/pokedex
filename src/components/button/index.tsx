import { Icon } from '@/types/icon'
import { icons } from '@/utils/icons'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { Spinner } from '../spinner'

interface Props extends ComponentProps<'button'> {
  children: React.ReactNode
  icon?: Icon
  isLoading?: boolean
}

const Button = ({
  children,
  icon,
  className,
  isLoading = false,
  ...rest
}: Props) => {
  const Icon: { [key: string]: React.ReactNode } = icons

  return (
    <button
      className={twMerge(
        'bg-yellow-400 text-zinc-50 flex justify-center items-center gap-3 p-3 rounded-lg transition duration-200 hover:brightness-90',
        className
      )}
      {...rest}
    >
      {icon && !isLoading && Icon[icon]}
      {!isLoading && children}
      {isLoading && (
        <>
          <Spinner /> Loading...
        </>
      )}
    </button>
  )
}

export { Button }
