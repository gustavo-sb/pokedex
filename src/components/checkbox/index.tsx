import { ComponentProps } from 'react'

type Props = ComponentProps<'input'>

const Checkbox = ({ ...rest }: Props) => {
  return (
    <input
      id="checkbox"
      type="checkbox"
      className="w-4 h-4 text-blue-600 rounded"
      {...rest}
    />
  )
}

export { Checkbox }
