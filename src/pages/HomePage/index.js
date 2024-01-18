import React from 'react'
import Sidebar from '../../components/Sidebar'
import Lastest from '../../components/Lastest'
import HomeMain from './HomeMain'
import NavBarComponents from './NavBarComponents'
import Sports from '../../components/Sports'

const Index = () => {
  return (
    <div>
      <NavBarComponents/>
      <HomeMain/>
      <Lastest/>
      <Sports/>
    <Sidebar/>
    </div>
  )
}

export default Index