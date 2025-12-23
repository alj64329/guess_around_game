import React, { useContext, useState, type ChangeEvent } from 'react'
import { UserContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

type Props = {}

const Card = (props: Props) => {
    const [username, setUsername] = useState<string>("")
    const [error, setError] = useState(false)
    const {userHandler} = useContext(UserContext)
    const navigate = useNavigate()

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        if(e.target.value){
            setError(false)
        }
        setUsername(e.target.value)
    }

    const clickHandler =(e:React.MouseEvent<HTMLDivElement>)=>{
        const roomType = e.currentTarget.getAttribute("data-game-type")

        if(!username){
            setError(true)
            toast.error("Please enter username",{
                position:'top-center',
                hideProgressBar:true
            })
            return
        }

        userHandler({
            username,
            img:""
        })

        if(roomType === "solo"){
            // direct to solo room
            navigate("/solo")
        }else if(roomType =="group"){
            //direct to group room
            navigate("/group")
        }
        //something went wrong toast
        toast.error("Something went wrong. Please try again")
    }

  return (
    <div className='font-bangers w-screen'>
        <div className='border p-16 w-[70%] md:max-w-[650px] mx-auto'>
            <div>LOGO</div>

            <div className='flex flex-col gap-4'>

                <div className='w-[70px] h-[70px] bg-blue-400'>
                </div>

                <div className='flex flex-col'>
                    <label>Enter your usernmae:</label>
                    <input 
                    type="text" 
                    name='username' 
                    value={username} 
                    onChange={onChangeHandler}
                    className={`border max-w-[250px] ${error&&' border-2 border-red-500'} `} />
                </div>

                <div className='md:flex justify-around text-lg'>
                    {/* <div className='p-6 cursor-pointer'
                    onClick={clickHandler}
                    data-game-type="solo">
                        Solo User
                    </div> */}
                    <div 
                    className='p-6 cursor-pointer'
                    data-game-type="group"
                    onClick={clickHandler}>
                        Group User
                    </div>
                </div>

            </div>

        </div>
        <ToastContainer />
    </div>
  )
}

export default Card