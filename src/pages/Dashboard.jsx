import React from 'react'
import Card1 from '../components/Card1'

const Dashboard = () => {
  return (
    <section className='m-6'>
      <div className="title text-xl font-medium">Welcome Admin!</div>
      <div className="cards flex justify-center gap-3 flex-wrap">
        <Card1/>
        <Card1/>
        <Card1/>
        <Card1/>
      </div>
    </section>
  )
}

export default Dashboard