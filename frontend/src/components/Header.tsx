import React, { useState } from 'react'
import type { RoomType } from '../types/room'
import { GiExitDoor } from 'react-icons/gi'
import { CiMenuKebab } from 'react-icons/ci'
import type { User } from '../types/user'
import { useNavigate } from 'react-router-dom'

type Props = {
    roomType: RoomType
    members?:User[]
}

const Header = ({roomType, members}: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()

    const exitHandler =()=>{
        navigate("/")
    }

  return (
    <header className='p-4 flex justify-between'>
        <div>
            LOGO
        </div>

        {roomType==="solo"&&
        <div>
            <GiExitDoor
            onClick={exitHandler}
            className='cursor-pointer'/>
        </div>}

        {roomType === "group"&&
        <>
        <div>
            <CiMenuKebab
            onClick={()=>setIsMenuOpen((prev)=>!prev)}
            className='cursor-pointer'/>
        </div>

        {isMenuOpen&&
        <div className='absolute'>

            {/* List of member - scrollable */}
            <div className='max-h-[80vh] overflow-y-scroll'>
                {members&&members.length>0&&
                members.map((member)=>(
                    <div>
                        <div>img</div>
                        <div>{member.username}</div>
                    </div>
                ))}
            </div>

            {/* leave button */}
            <div>
                <GiExitDoor
                onClick={exitHandler}
                className='cursor-pointer'/>
            </div>
        </div>}
        </>}
        
    </header>
  )
}

export default Header