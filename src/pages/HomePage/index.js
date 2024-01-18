import React from 'react'
import Sidebar from '../../components/Sidebar'
import Lastest from '../../components/Lastest'
import HomeMain from './HomeMain'
import NavBarComponents from './NavBarComponents'
import Sports from '../../components/Sports'
import BreakingNews from '../../components/BreakingNews'

const Index = () => {
  return (
    <div>
      <NavBarComponents/>
      <BreakingNews/>
      <HomeMain/>
      <Lastest/>
      <Sports/>
    <Sidebar/>
    </div>
  )
}

export default Index