import React from 'react'

function CardStatus({text, Icon}) {
  return (
    <div className="flex items-center justify-center gap-2">
        {Icon && <Icon className='size-4'/>}
        <p className=''>{text??''}</p>
    </div>
  )
}

export default CardStatus