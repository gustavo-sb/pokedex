import { Icon } from '@/types/icon'
import { icons } from '@/utils/icons'
import { ComponentProps } from 'react'

interface Props extends ComponentProps<'input'> {
  icon: Icon
}

const Input = ({ icon, ...rest }: Props) => {
  const Icon: { [key: string]: React.ReactNode } = icons

  return (
    <div className="w-full relative text-zinc-800 focus:border-sky-600">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        {Icon[icon]}
      </div>
      <input
        className="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:border-sky-600"
        {...rest}
      />
    </div>
  )
}

export { Input }
