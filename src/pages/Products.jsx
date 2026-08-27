import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Products() {

    let [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            let res = await axios.get(`https://dummyjson.com/products/?limit=10`)
            setProducts(res.data)
        } catch (error) {
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>{products?.products?.length}</div>
    )
}

export default Products