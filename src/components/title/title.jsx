import { View } from '@tarojs/components'
import './title.scss'

export default function Title(props) {
  return (
    <View className='title'>
      {props.title}
    </View>
    
  )
}