
const NewsLetter = () => {
    return (
        <>
            <div className='w-[90%] h-[20rem] flex flex-col justify-center items-center m-auto p-10 mb-20 gap-8 bg-gradient-to-b from-purple-100 via-purple-100 to-opacity-10'>
                <h1 className='text-[#454545] text-5xl font-semibold '>Get Exclusive Offers On Your Email</h1>
                <p className='text-[#454545] text-xl'>Subscribe to our newletter and stay updated</p>
                <div className='flex items-center justify-center bg-white max-w-screen-md h-16 rounded-full border border-solid border-[#e3e3e3]'>
                    <input type="email" placeholder='Your Email id' className='w-[20rem] ml-7 border-none outline-none text-[#616161] font-mono text-base' />
                    <button className='w-56 h-[4rem] rounded-full bg-black text-white text-lg cursor-pointer'>Subscribe</button>
                </div>
            </div>
        </>
    )
}

export default NewsLetter;
