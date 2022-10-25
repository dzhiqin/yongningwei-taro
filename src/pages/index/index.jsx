import { Component } from 'react'
import { View, Image } from '@tarojs/components'
import { Button, Tag } from '@antmjs/vantui'
import Title from '@/components/title/title'
import Taro from '@tarojs/taro'
import {angularSvg, dockerSvg, graphqlSvg,nodeSvg,reactSvg,rubySvg,tsSvg,vueSvg,juejinSvg} from '@/images/index'
import './index.scss'

const CardItem = (props) => {
  return(
    <View className='card-item'>{props.text}</View>
  )
}
export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  handleCopy = () => {
    Taro.setClipboardData({
      data: 'https://juejin.cn/user/2005122155034110/posts',
      success: res => {
        Taro.showToast({title: '已复制到剪切板，可以去浏览器访问',icon: 'none'})
        console.log(res)
      }
    })
  }
  render () {
    
    return (
      <View className='index-page'>
        <View className='head'>
          <View className='head-avatar'>
            <Image src='https://bkyz-applets-1252354869.cos.ap-guangzhou.myqcloud.com/common/me.jpg' className='head-avatar-img' />
          </View>
          <View>
            <View>董志钦  前端开发</View>
            <View>电话：15905088681</View>
            <View>邮箱：dzhiqin@126.com</View>
            <View>行业：医疗健康、小程序saas、电商、直播</View>
          </View>
        </View>
        <View>
          <Tag mark type='primary'>10年以上工作经验</Tag>
          <Tag mark type='success'>1年ruby全栈</Tag>
          <Tag mark type='success'>4年前端开发</Tag>
        </View>
        <View className='card'>
          <Title title='技能' />
          <View className='card-panel'>
            <Image src={vueSvg} className='card-image' />
            <Image src={reactSvg} className='card-image' />
            <Image src={nodeSvg} className='card-image' />
            <Image src={dockerSvg} className='card-image' />
            <Image src={tsSvg} className='card-image' />
            <Image src={rubySvg} className='card-image' />
            <Image src={angularSvg} className='card-image' />
            <Image src={graphqlSvg} className='card-image' />
            <CardItem text='熟悉使用vue2 + vue router + vuex和react+react-router-dom进行开发，使用过iview，ant-design，vant等各种UI框架。' />
            <CardItem text='有比较丰富的小程序开发经验，熟悉使用taro框架或者原生小程序进行小程序开发' />
            <CardItem text='会使用会使用github actions配合docker、jest搭建CI/CD流程' />
            <CardItem text='会使用ruby进行全栈开发，会nodejs，使用过angular，graphql等技术' />
            <CardItem text='熟悉Git和git flow团队协作流程，具备良好的编码习惯，使用eslint保持代码风格一致' />
          </View>
        </View>
        <View className='card'>
          <Title title='状态/意向' />
          <View className='card-panel'>
            <CardItem text='目前状态： 在职' />
            <CardItem text='求职意向： 远程办公/广州' />
          </View>
        </View>
        <View className='card'>
          <Title title='关于我' />
          <View className='card-panel'>
            <CardItem text='毕业院校： 湖南科技大学 09届 全日制本科' />
            <CardItem text='专业： 电子信息科学与技术  英语四级' />
            <CardItem text='籍贯： 福建石狮' />
            <CardItem text='1年ruby全栈经验，4年前端开发经验。目前主要使用taro框架+react或者vue进行小程序和web开发，也有Ruby on Rails全栈开发的经验。有angular，graphql，nodejs等等开发经验。理解敏捷开发的精神，能主动推进项目。早期有过几年的电子工程师工作经验，了解电子元件、电路图绘制、单片机编程等等技术，后来因个人兴趣原因转为软件开发' />
          </View>
        </View>
        <Button 
          block 
          color='linear-gradient(to right, #4bb0ff, #6149f6)' 
          style='margin-top: 20px'
          onClick={() => Taro.navigateTo({url: '/pages/history/history'})}
        >
          过往经历
        </Button>
        <View style='display:flex'>
          <View className='copy-link' onClick={this.handleCopy.bind(this)}>偶尔用掘金记录一些心得</View>
        </View>
        
      </View>
    )
  }
}
