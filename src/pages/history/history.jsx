import {View} from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState } from 'react'
import { Collapse, CollapseItem, Tag } from '@antmjs/vantui'
import './history.scss'

const RenderTag = (props) => {
  return <Tag mark color='#8C69D9' style='margin-top: 10px' >{props.text}</Tag>
}
export default function History() {
  const [values, setValues] = useState(['0','1','2'])
  Taro.setNavigationBarColor({
    frontColor: '#ffffff',
    backgroundColor: '#8C69D9',
  })
  return(
    <View className='history-page'>
      <Collapse value={values} onChange={(e) => setValues(e.detail)}>
      <CollapseItem title='广州倍康益众 2021.4月-今' name='0'>
        <View><RenderTag text='公司简介' />倍康益众主要为各类医疗机构提供定制化的IT解决方案，设计与实施以及运维服务，在国内三十多家大型医院成功实施并取得良好效果</View>
        <View><RenderTag text='工作内容' />负责新项目的研发，完成小程序的开发迭代，中后台功能迭代，参加需求评审，负责项目推进。</View>
        <View><RenderTag text='项目经历' />医院全流程小程序重构，原版小程序可扩展性差，不适合适配多家医院。新版用了taro + react + hooks进行重构，改原来的条件判断为按需配置，同时优化了代码，增加工程化工具，并减小代码体积。</View>
        <View><RenderTag text='项目经历' />互联网医院项目，该项目主要包含在线挂号和视频问诊功能，前端技术栈taro + hooks + 腾讯IM、RTC服务做小程序端，vue2 + element-ui + vuex做医生后台。全权负责项目搭建和开发，并主导项目进度。</View>
        <View><RenderTag text='项目经历' />智能导诊项目，该项目用于提供只能导诊功能，主要用到腾讯的语音服务，配合后台提供的语义分析，进行给病患导诊挂号。</View>
        <View><RenderTag text='项目经历' />智慧课室项目，该项目包含课前备课，预习；课中老师讲解和直播，发放练习题；课后查看录播，复习等等功能。视频方面基于海康产品配合云服务器实现，有智慧电视+自研app提供讲课，白板，随堂测试等功能，小程序提供课前预习可厚复习和查看视频等功能。我负责安卓app和小程序的开发，用到的技术主要是android Java和taro + vue小程序，腾讯视频推拉流服务</View>
      </CollapseItem>
      <CollapseItem title='广州包红科技 2020.12月-2021.4月' name='1'>
        <View><RenderTag text='公司简介' />包红科技主要从事互联网电商行业，拥有包红app社交电商和小世界app社交平台，该平台用于获取新闻资讯和了解朋友动态。</View>
        <View><RenderTag text='工作内容' />完成电商后台和小程序开发，参加需求评审等工作</View>
        <View><RenderTag text='项目经历' />开发O2O商城后台，使用的技术栈是vue2 + vue router + vuex + iview</View>
      </CollapseItem>
      <CollapseItem title='深圳碳原子科技 2019.1月-2020.9月' name='2'>
        <View><RenderTag text='公司简介' />深圳碳原子是一家自媒体电商以及国内小程序saas服务公司，累计服务超1000家自媒体，其中包括一条、同道大叔、陈翔六点半等等；提供小程序、商城系统、店铺运营、数据画像、供应链等整套服务</View>
        <View><RenderTag text='工作内容' />参与小程序开发，中后台业务迭代，H5页面开发，nodejs开发。负责系统优化和e2e测试，参与需求评审和用例评审等工作</View>
        <View><RenderTag text='项目经历' />参与直播电商app的项目重构，基于remax实现跨平台小程序的构建，前端使用react + typescript + linari技术栈，linari主要用于实现css-in-js，接口则用grapql + apollo。我负责的是订单模块和退货退款模块的开发。工作重点是在理解退款流程的基础上正确展现订单状态的流转结果。</View>
        <View><RenderTag text='项目经历' />参与微博电商saas项目，微博开放开店入口，到店铺saas系统进行开店。主要用到的技术有Nx + angular9 + tailwindcss + graphql + apollo。Nx是一个全栈工程集成框架，使用了Cypress，Jest，Pretter，Typescript等开发工具。我主要负责商详页，退货模块的开发，兼顾各浏览器的兼容性</View>
        <View><RenderTag text='项目经历' />参与小程序saas的迭代和中后台业务开发。小程序使用的技术栈是wepy + vue + vant，中后台 nx + angular8 + ant design。小程序上线了限时购、红包、抽奖等功能，中后台上线了供应商报名、营销活动管理等等。另外负责了一个小程序广告页的开发，用于在微信中投放广告，工作重点是小程序分包，懒加载，图片下载监听实现动图/静图流畅切换。</View>
        <View><RenderTag text='项目经历' />添加CI测试，在gitlab的ci环境中加入lighthouse进行web效能测试，使用AirtestIDE进行小程序的e2e测试</View>
      </CollapseItem>
      <CollapseItem title='深圳市单麦小程序 2018.6月-2018.9月' name='3'>
        <View><RenderTag text='公司简介' />单麦科技是一家小程序saas服务商。品类覆盖社交电商，企推名片，到店预约，门店外卖，知识店铺，品牌展示等等</View>
        <View><RenderTag text='工作内容' />我们是ruby on rails的全栈开发团队，每周参加需求评审并各自领取任务点，每周迭代一个小版本。和团队成员一起丰富了saas覆盖的品类，包含电商、个人企业名片、门店外卖、视频教育等等类目。</View>
        <View><RenderTag text='项目经历' />小程序添加打印模块，技术栈是Ruby on Rails + jquery + slim + Bootstrap，工作重点是云打印机的接入和小票格式的设计。</View>
      </CollapseItem>
      <CollapseItem title='厦门毫米房产 2018.1月-2018.5月' name='4'>
        <View><RenderTag text='公司简介' />这是一个创业项目，产品形态是一个租房平台，旨在帮助在厦门的外国人更方便快捷的找到合适的租赁房源</View>
        <View><RenderTag text='工作内容' />负责公司官网和资管平台的开发和上线，用ruby on rails实现了开发和部署。</View>
      </CollapseItem>
      <CollapseItem title='福建大宏实业 2014.3月-2017.12月' name='5'>
        <View><RenderTag text='公司简介' />大宏实业主要从事电脑软硬件研究，电子产品，钟表，时装的生产装配</View>
        <View><RenderTag text='工作内容' />参与研发公司的新产品，一款智能时钟，主要功能除了时间显示、电子相册还包括室内空气检测，包括烟雾/甲醛/PM2.5等指标的测试，可联网，有视频播放功能。</View>
      </CollapseItem>
      <CollapseItem title='深圳兴威帆电子科技 2014.3月-2017.12月' name='6'>
        <View><RenderTag text='公司简介' />深圳兴威帆电子主要从事时钟芯片的生产测试，也是日本精工芯片的国内代理，负责一部分销售。</View>
        <View><RenderTag text='工作内容' />完成时钟芯片测试版的研发，包含原理图设计，电路板测试和生产，用于实现公司对芯片电流、电压、精度等指标的测试。</View>
      </CollapseItem>
    </Collapse>
    </View>
  )
}