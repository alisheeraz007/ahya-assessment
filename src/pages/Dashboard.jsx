import React, { useState } from 'react'
import Button from '../components/Button'
import AnalyticsCard from '../components/AnalyticsCard';

import card1Icon from '../assets/images/card1.svg'
import card2Icon from '../assets/images/card2.svg'
import card3Icon from '../assets/images/card3.svg'
import RevenueGrowthChart from '../components/RevenueGrowthChart';
import UserTable from '../components/UserTable';

import user1 from '../assets/images/User.png'
import user2 from '../assets/images/User-1.png'
import user3 from '../assets/images/User-2.png'
import user4 from '../assets/images/User-3.png'

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="gray"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fff"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

function Dashboard() {

   let [usersData, setUsersData] = useState([
    {
      userImage: user1,
      name: "Testing User 1",
      email: "user1@gmail.com",
      status: "Active",
      lastActive: "2 min ago",
      revenue: "$1,450.00"
    },
    {
      userImage: user2,
      name: "Testing User 2",
      email: "user2@gmail.com",
      status: "Inactive",
      lastActive: "1 hour ago",
      revenue: "$2,890.00"
    },
    {
      userImage: user3,
      name: "Testing User 3",
      email: "user3@gmail.com",
      status: "Active",
      lastActive: "10 min ago",
      revenue: "$850.50"
    },
    {
      userImage: user4,
      name: "Testing User 4",
      email: "user4@gmail.com",
      status: "Suspended",
      lastActive: "25 min ago",
      revenue: "$5,200.00"
    }
  ])

  return (
    <main className='p-[30px] w-[100%] overflow-hidden'>
      <div className='flex flex-col lg:flex-row justify-between lg:items-end'>
        <div>
          <h1 className='text-[32px] font-[600]'>Executive Summary</h1>
          <p className='text-[gray]'>Deep dive into this month's curated performance metrics.</p>
        </div>
        <div className='flex gap-x-[10px] mt-[10px] lg:mt-0'>
          <Button icon={<CalendarIcon />} variant="outline">
            Last 30 days
          </Button>
          <Button icon={<DownloadIcon />} text="Export" variant="primary">
            Export
          </Button>
        </div>
      </div>

      <div className='flex flex-wrap lg:flex-nowrap gap-[20px] w-full mt-[40px]'>
        <AnalyticsCard icon={card1Icon} percent="12.5%" nagative={false} label="Total Revenue" count="$45,231.00" />
        <AnalyticsCard icon={card2Icon} percent="8.2%" nagative={false} label="Active Users" count="12,842" />
        <AnalyticsCard icon={card3Icon} percent="1.4%" nagative={true} label="Conversion Rate" count="3.4%" />
      </div>

      <div className='flex flex-wrap lg:flex-nowrap gap-[20px] w-full mt-[40px]'>
        <div className='sm:w-[66%] w-[100%] analyticsCard pb-[50px]'>
         <RevenueGrowthChart />
        </div>

        <div className='sm:w-[33%] w-[100%] p-[30px] bg-[#3a388b] rounded-[15px] text-[#fff]'>
          <span className="bg-[#504f98] p-[5px] px-[10px]">
            NEW INSIGHTS
          </span>

          <h2 className='text-[30px] font-[600] mt-[20px]'>
            Machine learning detected a 14% anomaly in User Retention.
          </h2>
          <p className='mt-[20px]'>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet tincidunt, nunc nisl aliquam nunc, eget aliquam nisl nunc eget nunc.
          </p>

          <button className='mt-[20px] bg-[#fff] text-[#3a388b] w-[100%] text-center px-[20px] py-[10px] rounded-[5px] flex items-center justify-center gap-x-[10px]'>
            Investigate Now
          </button>
        </div>
      </div>

       <div className='mt-[40px]'>
        <h3>Recent Transactions</h3>

        <div className='mt-[20px] w-[100%] overflow-x-scroll '>
          <UserTable data={usersData} />
        </div>
      </div>
    </main>
  )
}

export default Dashboard