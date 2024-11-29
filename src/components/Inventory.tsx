import React from "react";
import video from "../assets/02-How-to-import-your-inventory.mp4";
import video1 from "../assets/03-How-to-count-inventory-1.mp4";
import video2 from "../assets/04-Get-the-inventory-count-report.mp4";

const InventoryPage = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col pb-28 ">
            {/* Header Section */}
            <header className="text-center py-10">
                <h1 className="text-6xl font-bold">How it works</h1>
                <p className="text-gray-600 text-xl">See measurable results in under 30 days</p>
            </header>

            {/* Step Section */}
            <div className="flex justify-center mb-32">
                <section className="flex w-4/5  justify-between items-center">
                    <div>
                        <div className="flex items-center mb-8">
                            <div className="bg-green-100 text-green-600 font-bold rounded-full h-12 w-12 flex items-center justify-center text-xl">
                                1
                            </div>
                            <h2 className="text-4xl font-semibold ml-4">Upload your inventory</h2>
                        </div>
                        <p className="text-gray-600  px-4 max-w-md">
                            Easily digitize your inventory. No more pen and paper. With our app, it
                            takes less than 5 minutes to digitize your inventory.
                        </p>
                        <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded shadow">
                            Start your FREE 30-day trial
                        </button>
                    </div>
                    <div>
                        <video
                            autoPlay 
                            loop
                            muted 
                            playsInline 
                            className="rounded-lg shadow-lg max-w-full"
                            width="640"
                            height="360"
                        >
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </section>
            </div>
            <div className="flex justify-center mb-32">
                <section className="flex w-4/5  justify-between items-center">

                    <div>
                        <video
                            autoPlay 
                            loop
                            muted 
                            playsInline 
                            className="rounded-lg shadow-lg max-w-full"
                            width="640"
                            height="360"
                        >
                            <source src={video1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div>
                        <div className="flex items-center mb-8">
                            <div className="bg-green-100 text-green-600 font-bold rounded-full h-12 w-12 flex items-center justify-center text-xl">
                                1
                            </div>
                            <h2 className="text-4xl font-semibold ml-4">Upload your inventory</h2>
                        </div>
                        <p className="text-gray-600  px-4 max-w-md">
                            Easily digitize your inventory. No more pen and paper. With our app, it
                            takes less than 5 minutes to digitize your inventory.
                        </p>
                        <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded shadow">
                            Start your FREE 30-day trial
                        </button>
                    </div>

                </section>
            </div>
            <div className="flex justify-center">
                <section className="flex w-4/5  justify-between items-center">
                    <div>
                        <div className="flex items-center mb-8">
                            <div className="bg-green-100 text-green-600 font-bold rounded-full h-12 w-12 flex items-center justify-center text-xl">
                                1
                            </div>
                            <h2 className="text-4xl font-semibold ml-4">Upload your inventory</h2>
                        </div>
                        <p className="text-gray-600  px-4 max-w-md">
                            Easily digitize your inventory. No more pen and paper. With our app, it
                            takes less than 5 minutes to digitize your inventory.
                        </p>
                        <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded shadow">
                            Start your FREE 30-day trial
                        </button>
                    </div>
                    <div>
                        <video
                            autoPlay 
                            loop
                            muted 
                            playsInline 
                            className="rounded-lg shadow-lg max-w-full"
                            width="640"
                            height="360"
                        >
                            <source src={video2} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </section>
            </div>


        </div>
    );
};

export default InventoryPage;