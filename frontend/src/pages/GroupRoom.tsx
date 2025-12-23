import React, { useState } from 'react'
import type { ModalType } from '../components/Modal'
import Modal from '../components/Modal'

type Props = {}

const GroupRoom = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType,setModalType] = useState<ModalType>("createRoom")

  const modalHandler =()=>{
    setIsModalOpen((prev)=>!prev)
  }

  const clickHandler =(e:React.MouseEvent<HTMLDivElement>)=>{
    const modalType = e.currentTarget.getAttribute("data-modal-type")

    if(modalType==="createRoom"||modalType==="joinRoom") {
      setModalType(modalType)
      setIsModalOpen(true)
    }

  }
    
  return (
    <div className='w-screen h-screen flex flex-col justify-center'>
        <div 
        onClick={clickHandler}
        data-modal-type="createRoom"
        className='cursor-pointer'>
            Create a new Room?
        </div>

        <div
        onClick={clickHandler}
        data-modal-type="joinRoom"
        className='cursor-pointer'
        >
            Join a room?
        </div>

        {isModalOpen&&
        <Modal isOpen={isModalOpen} onClose={modalHandler} modalType={modalType}/>
        }
    </div>
  )
}

export default GroupRoom