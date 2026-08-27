import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

function Layout(props) {

  const handleSideBar = () => {
    document.getElementById("sideBar").style.left = "-250px"
    setTimeout(() => (
      document.getElementById("overlay").style.left = "-100vw"
    ), 200)
  }

  return (
    <div className='flex h-screen overflow-hidden'>

      <div onClick={handleSideBar} id='overlay' className='lg:hidden fixed bg-[#00000065] top-0 left-[-100vw] w-[100vw] h-[100vh] z-[999] transition-all'>
      </div>

      <aside id='sideBar' className='fixed left-[-250px] transition-all md:left-0 bg-[#fff] z-[9999] md:sticky w-[250px] h-screen top-0 border-r border-[#d3d3d3a6]'>
        <Sidebar />
      </aside>

      <div className='w-[calc(100%-250px)] flex-1 flex flex-col h-screen'>

        <div className='sticky top-0 z-10'>
          <Navbar />
        </div>

        <div className='flex-1 overflow-y-auto'>
          {props.children}
        </div>

      </div>
    </div>
  )
}

export default Layout