const Banner = () => {
    return (
        <div className="relative w-[100%] h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('./src/assets/banner_image.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-25"></div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full">
                <h1 className="text-4xl font-bold mb-4">Big Winter Sale</h1>
                <p className="text-lg mb-6">Save up to 50% on all your favorites. Limited time only!</p>
                <a href="/shop" className="bg-white text-black font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-200 transition duration-300">
                    Shop Now
                </a>
            </div>
        </div>

    )
}

export default Banner
