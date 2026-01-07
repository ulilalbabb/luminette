'use client'

import Image from "next/image"
import Button from "../Button/Button"
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import useCarousel from "@/src/hooks/useCarousel";
import slider from "@/src/Components/Data/slider.json"

const HeroSlider = () => {
    const {
        current,
        prevSlide,
        nextSlide,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd, 
    } = useCarousel(slider.length)

    return (
        <div className="flex flex-col-reverse w-full px-3 md:px-6 lg:px-34">
            <header className="flex flex-col gap-7 md:flex md:flex-row md:items-center md:justify-between">
                <div className="pt-9">
                    <h1 className="text-5xl md:text-5xl">Bright Ideas/</h1>
                    <h1 className="text-5xl md:text-5xl">Brilliant Results.</h1>
                </div>
                <div className="md:w-1/2">
                    <p>
                        <span className="font-medium text-amber-800">Luminette </span> 
                        is a gift & decorations store based in Malang, Indonesia. Est since 2025. 
                    </p>
                </div>
            </header>
            <div 
                className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-md shadow-lg"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* images */}
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {slider.map((src, index) => (
                        <div key={index} className="min-w-full">
                            <Image
                                src={src.image}
                                alt={`Slide ${index + 1}`}
                                width={1000}
                                height={500}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                <Button
                    onClick={prevSlide}
                    variant="hidden md:flex absolute top-1/2 left-0 -translate-y-1/2 bg-white px-3 py-3 rounded-full hover:bg-gray-200"
                >
                    <FaArrowLeftLong />
                </Button>
                <Button
                    onClick={nextSlide}
                    variant="hidden md:flex absolute top-1/2 right-0 -translate-y-1/2 bg-white px-3 py-3 rounded-full hover:bg-gray-200"
                >
                    <FaArrowRightLong />
                </Button>
                
                {/* dots */}
                <div 
                    className="absolute bottom-4 right-26 md:right-75 lg:right-120 transform -translate-x-1/2 flex space-x-3 cursor-pointer"
                    onClick={nextSlide}>
                        {slider.map((_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 rounded-full ${
                                    current === index ? "bg-white" : "bg-gray-300"
                                }`}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default HeroSlider