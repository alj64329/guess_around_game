import React from 'react'
import Card from '../components/Home/Card'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
        <div className='flex justify-center items-center h-screen'>
            <Card/>
        </div>
    </div>
  )
}

export default Home