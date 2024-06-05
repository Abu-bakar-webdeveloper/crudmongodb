import React from 'react'

const EditTopicsForm = () => {
  return (
    <form action="" className='flex flex-col gap-3'>
    <input className='border border-slate-300 px-8 py-2'
    type="text"
    placeholder='topic Title'/>

    <input className='border border-slate-300 px-8 py-2'
    type="text" 
    placeholder='topic description'
    />

    <button className='bg-green-600 font-bold text-white py-3 px-6'>
        Update Topics
    </button>
</form>
  )
}

export default EditTopicsForm