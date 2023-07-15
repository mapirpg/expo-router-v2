import { forwardRef } from 'react'
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps & {
  title: string
}

export const Button = forwardRef<TouchableOpacity, Props>(({title, ...rest}, ref ) => {
  return (
    <TouchableOpacity 
      ref={ref} 
      style={{ width: 200, padding: 16, backgroundColor: '#8257e5', alignItems: 'center', borderRadius: 7 }}
      {...rest}
    >
      <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>{title}</Text>
    </TouchableOpacity>
  )
})