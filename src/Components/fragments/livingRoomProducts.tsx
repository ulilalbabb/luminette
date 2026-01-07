'use client'

import { useState, useEffect } from "react"
import { ProductType } from "@/src/types/product.type"
import { getSupabaseBrowserClient } from "@/src/lib/supabase/browser-client"
import Image from "next/image"
import { CiHeart } from "react-icons/ci"
import Button from "../elements/Button/Button"

const LivingRoom = () => {
    const [livingRoomProducts, setLivingRoomProducts] = useState<ProductType[]>([])
    const supabase = getSupabaseBrowserClient()

    useEffect(() => {
            const fetchProducts = async () => {
                const { data, error } = await supabase.from('top-product').select('*');
                if (error) {
                    console.log('Error fetching products: ', error);
                }
                if (data) {
                    setLivingRoomProducts(data);
                }
            };
            fetchProducts();
        }, []);

        if (livingRoomProducts.length === 0) {
            return <div>Loading...</div>;
        }

    return (
        <div className="p-3 md:px-6 md:py-10 lg:px-34">
            <h1 className="font-bold text-2xl text-amber-800">Living Room</h1>
            <div className="grid grid-cols-2 gap-5">
                {livingRoomProducts.map((product) => (
                    <div key={product.id}>
                         <div className="bg-gray-100 w-[172] h-[285] md:w-[300px] md:h-[400px] mt-10">
                            <div className="flex justify-between items-center p-3">
                                <div>
                                    <p className="font-semibold text-center text-sm">NEW</p>
                                    <p className="bg-green-400 px-4 font-semibold text-white text-sm rounded-sm">-50%</p>
                                </div>
                                <Button variant="bg-white rounded-full p-2 shadow-md">
                                    <CiHeart size={20} className="hover:text-green-400"/>
                                </Button>
                            </div>
                            <div>
                                <Image 
                                    src={product.image}
                                    width={200}
                                    height={200}
                                    alt="product"
                                    className="w-full object-cover hover:scale-105 transition-all duration-300 ease-in-out"
                                />
                                <Button variant="border border-amber-800 py-1 hover:bg-amber-800 hover:text-white w-3/4 mx-5.5 rounded-sm">Add to Cart</Button>
                            </div>
                            <div className="py-5">
                                <h2 className="text-sm font-medium">{product.product_name}</h2>
                                <p className="font-semibold text-sm">{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LivingRoom