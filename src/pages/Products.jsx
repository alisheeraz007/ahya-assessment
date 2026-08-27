import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from '../components/Button'

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
        <div className="p-[50px]">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-[28px] font-bold text-center">Products</h1>

                <div className="w-[300px] bg-gray-100 rounded-md p-[10px]">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="outline-none w-full bg-transparent px-[10px]"
                    />
                </div>
            </div>

            <div className="container mx-auto flex flex-wrap gap-[20px] mt-[50px]">
                {products?.products?.map((item, i) => (
                    <div key={i} className="p-[20px] w-[calc(33.33%-15px)] shadow-lg rounded-md">
                        <div className="flex items-center justify-center ">
                            <img src={item.thumbnail} alt={item.title} className="object-cover transition-all hover:scale-110" />
                        </div>
                        <div className="mt-[20px]">
                            <h2 className="text-[20px] font-bold text-center">{item.title}</h2>
                            <p className="text-[18px] font-bold text-center mt-[10px]">{item.price}</p>
                            <div className="mt-[20px] flex justify-center">
                                <Button variant="primary" size="md">
                                    Buy Now
                                </Button>
                            </div>
                            <div className="flex flex-wrap gap-[10px] mt-[20px]">
                                {item?.tags?.map((tag, j) => (
                                    <div
                                        className="cursor-pointer py-[3px] px-[10px] bg-gray-200 hover:bg-gray-300 transition-all text-[12px] rounded-full"
                                    >
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Products