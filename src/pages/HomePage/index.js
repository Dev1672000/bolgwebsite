import React from 'react'
import Sidebar from '../../components/Sidebar'
import Lastest from '../../components/Lastest'
import HomeMain from './HomeMain'

const Index = () => {
  return (
    <div>
      <HomeMain/>
      <Lastest/>
    <Sidebar/>
    </div>
  )
}

export default Index