import Exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='w-[90%] h-fit flex p-4 mb-10 m-auto bg-gradient-to-b from-purple-200 via-purple-200 to-opacity-10'>
        <div className='flex flex-1 flex-col justify-center ml-[10rem]'>
            <h1 className='text-[#171717] text-6xl font-semibold pb-5'>Exclusive</h1>
            <h1 className='text-[#171717] text-6xl font-semibold pb-3'>Offers For You</h1>
            <p className='text-[#171717] font-semibold text-lg'>ONLY ON BEST SELLERS PRODUCT</p>
            <button className='w-64 h-20 bg-[#ff4141] border-none text-white text-2xl font-medium mt-8 cursor-pointer rounded-bl-full'>Check Now</button>
        </div>
        <div className='offerright'>
            <img src={Exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers;
