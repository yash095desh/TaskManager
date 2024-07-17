import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Dropdown from './Dropdown'

function Navbar() {

    const taskChildren = [
        {
            name : 'Daily',
            link : '/tasks'
        },
        {
            name : 'Monthly',
            link : '/tasks/monthly'
        },
        {
            name : 'Yearly',
            link : '/tasks/yearly'
        },
    ] 

  return (
    <div className='h-[90vh] w-[200px] bg-white rounded-md flex flex-col gap-10 items-center p-4 '>
        <Image src={'/logo.svg'} height={32} width={135} />
        <div className=' text-xl flex flex-col gap-4 justify-center dropDown_transition '>
            <Dropdown children={taskChildren} name={'Tasks'} link={'/tasks'}/>
            <Dropdown children={null} name={'Dashboard'} link={'/dashboard'}/>
            <Dropdown children={null} name={'Routine'} link={'/routine'}/>
            <Dropdown children={null} name={'Content'} link={'/content'}/>
        </div>
    </div>
  )
}

export default Navbar