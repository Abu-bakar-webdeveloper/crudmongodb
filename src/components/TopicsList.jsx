import React from 'react'
import RemoveBtn from './RemoveBtn';
import { HiPencilAlt } from 'react-icons/hi';
import Link from 'next/link';

const TopicsList = () => {
  return (
    <>
    <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
        <div>
            <h2 className='font-bold text-2xl'>Topic Title</h2>
            <div>Topic description</div>
        </div>

        <div className='flex gap-2'>
            <RemoveBtn />
            <Link href={`/editTopics/123`}>
            <HiPencilAlt size={24} />
            </Link>
        </div>
    </div>
    </>
  )
}

export default TopicsList