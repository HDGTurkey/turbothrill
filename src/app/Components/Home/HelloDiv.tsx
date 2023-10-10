

export const HelloDiv = () => {
    return (
        <>
            <div className=' items-center lg:mx-32 p-11 '>
                <div className='grid grid-cols-1 md:grid-cols-2' >
                    <div className='grid items-center'>
                        <div>
                            <div className='hidden text-left md:block mb-8 text-[#ec373c] font-thin '>HUAWEI DEVELOPERS</div>
                            <h1 className='text-4xl font-bold text-gray-700'>  Make good things <span className='text-[#ec373c]'>together</span>.</h1>
                            <p className='text-gray-500 mt-4 '>As developers of the Huawei community, we create sweepstakes and events with our ambassadors at our Universities.</p>
                            <div className='mt-6'>
                                <div className='text-left dark:text-white' color="text.secondary" >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className=" transition-transform ">
                            <img src={require("../../assets/Images/hi.png").default.src} alt='i' className='lg:w-[600px] sm:w-[500px]  whitespace-nowrap ' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

