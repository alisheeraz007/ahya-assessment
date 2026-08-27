import React from 'react'

function AnalyticsCard(props) {
    return (
        <div className='analyticsCard p-[20px] w-[100%] lg:w-[33%] rounded-[15px]'>
            <div className='flex justify-between'>
                <img src={props.icon} />
                <span className={`block px-[5px] py-[3px] h-max ${props.nagative ? "bg-[#ff000026] text-[red]" : "bg-[#90ee9047] text-[green]"} rounded-[5px] text-[12px]`}>{props.percent}</span>
            </div>
            <div className='mt-[20px]'>
                <h4 className='font-[400] text-[gray]'>{props.label}</h4>
                <h2 className='text-[28px] mt-[3px] font-[600]'>{props.count}</h2>
            </div>
        </div>
    )
}

export default AnalyticsCard