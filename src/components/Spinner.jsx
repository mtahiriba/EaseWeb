import React from 'react'
import {Circles as Loader} from 'react-loader-spinner'

const Spinner = ({message}) => {
  return (
    <div className='flex flex-col items-center w-full h-full mt-10 gap-2'>
        <Loader
            type="Circles"
            color="#0DCE2E"
            height={50}
            width={200}
            className="m-5"
        />

        <p className='text-lg text-center px-2'>{message}</p>
    </div>
  )
}

export default Spinner