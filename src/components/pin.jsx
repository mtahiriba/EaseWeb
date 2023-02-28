import React from 'react'

const pin = ({website}) => {
  return (
    <div className="bg-white rounded-lg shadow-md m-2 mt-4">
        <img className="rounded-t-lg w-full" src={website.picUrl} alt="" />
        <div class="px-5 py-2">
            <span>{website.name}</span>
        </div>
    </div>
  )
}

export default pin