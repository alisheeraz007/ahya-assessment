import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Products from '../pages/Products.jsx'
import Users from '../pages/Users.jsx'

function UserRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/users" element={<Users />} />
        </Routes>
    )
}

export default UserRoutes