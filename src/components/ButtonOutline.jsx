import React from 'react'

function ButtonOutline(props) {
    return (
        <button onClick={props.onClick} disabled={props.disabled} className='px-[10px] py-[5px] text-[14px] text-[#000] rounded-[5px] cursor-pointer transition hover:shadow-lg flex items-center justify-center outline-0 border-[1px] border-[gray] bg-transparent gap-x-[10px]'>
            {props.icon}
            {props.text}
        </button>
    )
}

export default ButtonOutline