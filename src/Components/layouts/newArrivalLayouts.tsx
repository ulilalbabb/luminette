import NewArrivalsCard from "../fragments/newArrivalsCard"

const NewArrivalLayouts = () => {
    return (
        <div className="p-3 md:px-6 md:py-10 lg:px-34">
            <h2 className="text-3xl md:text-4xl font-bold pb-10 text-amber-800">New <br /> Arrivals</h2>
            <NewArrivalsCard />
        </div>
    )
}

export default NewArrivalLayouts