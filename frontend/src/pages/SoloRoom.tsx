import React, { useContext } from 'react'
import { UserContext } from '../App'
import Header from '../components/Header'

type Props = {}

const SoloRoom = (props: Props) => {
   // const {username} = useContext(UserContext)

  return (
    <div className='w-screen h-screen'>
        <div className='flex justify-center py-16'>
        <Header roomType='solo'/>
        </div>

    </div>
  )
}

export default SoloRoom