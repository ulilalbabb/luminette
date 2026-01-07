import Navbar from "@/src/Components/elements/Navbar/Navbar"
import Image from "next/image"
import LivingRoom from "../fragments/livingRoomProducts"

const LivingRoomLayouts = () => {
    return (
        <>
            <Navbar/>
            <div className="w-full relative px-3 md:px-6 lg:px-34">
                <Image
                    src="/assets/living-room-banner.jpg"
                    width={1000}
                    height={1000}
                    alt="Living Room"
                    className="w-full h-full object-cover"
                />
                <h1 className="absolute top-20 left-25 text-4xl font-bold text-white">Living Room</h1>
            </div>
            <LivingRoom />
        </>
    )
}

export default LivingRoomLayouts