import TopProductCard from "../fragments/topProductCard"

const TopProductCardLayouts = () => {
    return (
        <div className="p-3 md:px-6 md:py-10 lg:px-34">
            <h2 className="text-3xl md:text-4xl font-bold pb-10 text-amber-800">Top <br /> Products</h2>
            <TopProductCard />
        </div>
    )
}

export default TopProductCardLayouts