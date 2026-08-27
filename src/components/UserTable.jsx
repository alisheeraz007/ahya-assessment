import React, { useState } from 'react'

function UserTable({ data }) {

    const [sortField, setSortField] = useState(null)
    const [order, setOrder] = useState('asc')

    const handleSort = (field) => {
        if (sortField === field) {
            setOrder(order === 'asc' ? 'desc' : 'asc')
        } else {
            setSortField(field)
            setOrder('asc')
        }
    }

    const sortedData = [...(data || [])].sort((a, b) => {
        if (!sortField) return 0

        let valA = a[sortField]
        let valB = b[sortField]

        if (sortField === 'revenue') {
            valA = Number(valA)
            valB = Number(valB)
        }

        if (sortField === 'lastActive') {
            valA = new Date(valA)
            valB = new Date(valB)
        }

        if (valA < valB) return order === 'asc' ? -1 : 1
        if (valA > valB) return order === 'asc' ? 1 : -1
        return 0
    })

    return (
        <table className='w-full text-left border-collapse rounded-[20px] overflow-hidden userTable'>
            <tbody>

                <tr className='bg-[#d3d3d34a]'>
                    <th onClick={() => handleSort('name')} className='cursor-pointer min-w-[300px] lg:w-[35%] p-[20px] px-[30px]'>User</th>
                    <th onClick={() => handleSort('status')} className='cursor-pointer min-w-[100px] lg:w-[19%] p-[20px] px-[30px]'>Status</th>
                    <th onClick={() => handleSort('lastActive')} className='cursor-pointer min-w-[150px] lg:w-[23%] p-[20px] px-[30px]'>Last Active</th>
                    <th onClick={() => handleSort('revenue')} className='cursor-pointer min-w-[200px] text-right lg:w-[23%] p-[20px] px-[30px]'>Revenue</th>
                </tr>

                {sortedData.map((user, i) => (
                    <tr key={i}>
                        <td className='px-[30px] py-[20px]'>
                            <div className='flex gap-x-[15px] items-center'>
                                <img className='w-[50px]' src={user.userImage} />
                                <div>
                                    <h5>{user.name}</h5>
                                    <p className='text-[12px] text-[gray]'>{user.email}</p>
                                </div>
                            </div>
                        </td>

                        <td className='px-[30px] py-[20px]'>
                            <span className='block px-[5px] py-[3px] bg-[#90ee9047] text-[green] rounded-[5px] text-[12px] w-max'>
                                {user.status}
                            </span>
                        </td>

                        <td className='px-[30px] py-[20px] text-[gray]'>
                            {user.lastActive}
                        </td>

                        <td className='px-[30px] py-[20px] text-right font-[600]'>
                            {user.revenue}
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}

export default UserTable