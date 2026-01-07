'use client'

import { getSupabaseBrowserClient } from "@/src/lib/supabase/browser-client"
import { ProductType } from "@/src/types/product.type"
import { useState, useRef, useEffect } from "react"
import Button from "../elements/Button/Button"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import Image from "next/image"
import { CiHeart } from "react-icons/ci"

const TopProductCard = () => {
    const [product, setProduct] = useState<ProductType[]>([])
    const supabase = getSupabaseBrowserClient()
    const scrollRef = useRef<HTMLDivElement>(null)

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({
            left: -300,
            behavior: "smooth",
        })
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({
            left: 300,
            behavior: "smooth",
        })
    };

    useEffect(() => {
            const fetchProducts = async () => {
                const { data, error } = await supabase.from('top-product').select('*');
                if (error) {
                    console.log('Error fetching products: ', error);
                }
                if (data) {
                    setProduct(data);
                }
            };
            fetchProducts();
        }, []);

    if (product.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="relative w-full">
            <Button
                variant="absolute hidden md:block left-[-15] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                onClick={scrollLeft}>
                    <FaArrowLeft size={20} />
            </Button>
            <div className="flex gap-2 overflow-x-auto scroll-smooth no-scrollbar" ref={scrollRef}>
                {product.map((product) => (
                    <div key={product.id}>
                    <div className="w-[262] h-[349] md:w-[300px] md:h-[400px]">
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
                                className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out"
                            />
                            <Button variant="border border-amber-800 py-1 hover:bg-amber-800 hover:text-white w-3/4 mx-8 rounded-sm">Add to Cart</Button>
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className="font-semibold text-sm">{product.product_name}</p>
                        <p className="font-semibold text-sm">{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                    </div>
                </div>
                ))}
            </div>
            <Button
                variant="absolute hidden md:block right-[-15] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                onClick={scrollRight}>
                    <FaArrowRight size={20} />
            </Button>
        </div>
    )
}

export default TopProductCard